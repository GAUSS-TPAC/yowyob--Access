package com.yowyob_access.access.service;


import com.yowyob_access.access.DTO.User.CreateUserRequest;
import com.yowyob_access.access.DTO.User.UserDto;
import com.yowyob_access.access.mapper.UserMapper;
import com.yowyob_access.access.repository.UserRepository;
import java.time.Instant;
import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class UserServiceImpl implements UserService
{
    private static final String USER_NOT_FOUND_TEMPLATE = "User not found for id=%s and tenant=%s";

    private final UserRepository user_repository;
    private final UserMapper user_mapper;
    private final PasswordEncoder password_encoder;
    private final AuditService audit_service;

    /**
     * Constructor injection for dependencies.
     *
     * @param userRepository repository for User entities
     * @param userMapper mapper between entity and DTOs
     * @param passwordEncoder password encoder (e.g. BCryptPasswordEncoder)
     * @param auditService audit logger
     */
    public UserServiceImpl(UserRepository userRepository, UserMapper userMapper,
        PasswordEncoder passwordEncoder, AuditLogService auditService)
    {
        this.user_repository = userRepository;
        this.user_mapper = userMapper;
        this.password_encoder = passwordEncoder;
        this.audit_service = auditService;
    }

    /**
     * {@inheritDoc}
     */
    @Override
    @Transactional
    public UserDto createUser(String tenantId, CreateUserRequest request, String actor)
    {
        // Basic validation
        if (request.getUid() == null || request.getUid().isBlank())
        {
            throw new IllegalArgumentException("uid is required");
        }

        if (request.getPassword() == null || request.getPassword().isBlank())
        {
            throw new IllegalArgumentException("password is required");
        }

        // Map request to entity; mapper leaves password_hash unset.
        User user = user_mapper.toEntity(request, tenantId);

        // Hash password and set on entity. Never log the raw password.
        String hashed = password_encoder.encode(request.getPassword());
        user.setPasswordHash(hashed);

        // Audit fields
        user.setCreatedBy(actor);
        user.setCreatedAt(Instant.now());

        // Persist entity
        User saved = user_repository.save(user);

        // Audit log (non-sensitive)
        audit_service.log(actor, "CREATE_USER", "created user id=" + saved.getId() + " tenant=" + tenantId);

        return user_mapper.toDto(saved);
    }

    /**
     * {@inheritDoc}
     */
    @Override
    @Transactional
    public UserDto updateUser(String tenantId, UUID userId, CreateUserRequest request, String actor)
    {
        User existing = user_repository.findByIdAndTenantIdAndDeletedFalse(userId, tenantId)
            .orElseThrow(() -> new UserNotFoundException(String.format(USER_NOT_FOUND_TEMPLATE, userId, tenantId)));

        // Update allowed fields (uid change allowed if needed)
        if (request.getUid() != null && !request.getUid().isBlank())
        {
            existing.setUid(request.getUid());
        }

        existing.setEmail(request.getEmail());
        existing.setFullName(request.getFullName());
        existing.setRoleNames(user_mapper.joinRoles(request.getRoles()));

        existing.setModifiedBy(actor);
        existing.setModifiedAt(Instant.now());

        User saved = user_repository.save(existing);

        audit_service.log(actor, "UPDATE_USER", "updated user id=" + saved.getId() + " tenant=" + tenantId);

        return user_mapper.toDto(saved);
    }

    /**
     * {@inheritDoc}
     */
    @Override
    @Transactional
    public void softDeleteUser(String tenantId, UUID userId, String actor)
    {
        User existing = user_repository.findByIdAndTenantIdAndDeletedFalse(userId, tenantId)
            .orElseThrow(() -> new UserNotFoundException(String.format(USER_NOT_FOUND_TEMPLATE, userId, tenantId)));

        existing.setDeleted(true);
        existing.setDeletedBy(actor);
        existing.setDeletedAt(Instant.now());

        user_repository.save(existing);

        audit_service.log(actor, "SOFT_DELETE_USER", "soft deleted user id=" + existing.getId() + " tenant=" + tenantId);
    }

    /**
     * {@inheritDoc}
     */
    @Override
    @Transactional(readOnly = true)
    public UserDto getUser(String tenantId, UUID userId)
    {
        User u = user_repository.findByIdAndTenantIdAndDeletedFalse(userId, tenantId)
            .orElseThrow(() -> new UserNotFoundException(String.format(USER_NOT_FOUND_TEMPLATE, userId, tenantId)));
        return UserMapper.toDto(u);
    }

    /**
     * {@inheritDoc}
     */
    @Override
    @Transactional(readOnly = true)
    public List<UserDto> listUsers(String tenantId)
    {
        return user_repository.findAllByTenantIdAndDeletedFalse(tenantId)
            .stream()
            .map(user_mapper::toDto)
            .collect(Collectors.toList());
    }

    /**
     * {@inheritDoc}
     */
    @Override
    @Transactional
    public void changePassword(String tenantId, UUID userId, ChangePasswordRequest request, String actor)
    {
        User existing = user_repository.findByIdAndTenantIdAndDeletedFalse(userId, tenantId)
            .orElseThrow(() -> new UserNotFoundException(String.format(USER_NOT_FOUND_TEMPLATE, userId, tenantId)));

        // If current_password provided, validate it.
        String current = request.getCurrentPassword();
        if (current != null && !current.isBlank())
        {
            boolean matches = password_encoder.matches(current, existing.getPasswordHash());
            if (!matches)
            {
                throw new IllegalArgumentException("current password is invalid");
            }
        }

        String newPwd = request.getNewPassword();
        if (newPwd == null || newPwd.isBlank())
        {
            throw new IllegalArgumentException("new password is required");
        }

        String hashed = password_encoder.encode(newPwd);
        existing.setPasswordHash(hashed);
        existing.setModifiedBy(actor);
        existing.setModifiedAt(Instant.now());

        user_repository.save(existing);

        audit_service.log(actor, "CHANGE_PASSWORD", "changed password for user id=" + existing.getId() + " tenant=" + tenantId);
    }
}