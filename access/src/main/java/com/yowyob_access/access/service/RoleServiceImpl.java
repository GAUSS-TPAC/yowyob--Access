package com.yowyob_access.access.service;

import com.yowyob_access.access.DTO.role.CreateRoleRequest;
import com.yowyob_access.access.DTO.role.RoleDto;
import com.yowyob_access.access.entities.Role;
import com.yowyob_access.access.exceptions.RoleNotFoundException;
import com.yowyob_access.access.mapper.RoleMapper;
import com.yowyob_access.access.repository.RoleRepository;
import com.yowyob_access.access.service.AuditLogService;
import java.time.Instant;
import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

/**
 *   Concrete implementation of RoleService. Enforces tenant isolation, validates
 *   duplicates (role name per tenant), implements soft-delete (deleted flag +
 *   deleted_by/deleted_at), and logs audit events.
 */
@Service
public class RoleServiceImpl implements RoleService {

    private static final String ROLE_NOT_FOUND_TEMPLATE = "Role not found for id=%s and tenant=%s";
    private static final String ROLE_NAME_CONFLICT_TEMPLATE = "Role with name='%s' already exists in tenant=%s";

    private final RoleRepository role_repository;
    private final RoleMapper role_mapper;
    private final AuditLogService audit_service;

    /**
     * Constructor injection for dependencies.
     *
     * @param roleRepository JPA repository for Role entities
     * @param roleMapper mapper to convert between entity and dto
     * @param auditService audit logger
     */
    public RoleServiceImpl(RoleRepository roleRepository, RoleMapper roleMapper, AuditLogService auditService) {
        this.role_repository = roleRepository;
        this.role_mapper = roleMapper;
        this.audit_service = auditService;
    }

    /**
     * {@inheritDoc}
     */
    @Override
    @Transactional
    public RoleDto createRole(String tenantId, CreateRoleRequest request, String actor) {
        // Basic validation
        if (request.getName() == null || request.getName().isBlank()) {
            throw new IllegalArgumentException("role name is required");
        }

        // Prevent duplicate names in same tenant
        boolean exists = role_repository.findByTenantIdAndNameAndDeletedFalse(tenantId, request.getName())
            .isPresent();
        if (exists) {
            throw new IllegalArgumentException(String.format(ROLE_NAME_CONFLICT_TEMPLATE, request.getName(), tenantId));
        }

        // Map request to entity and set audit fields
        Role role = role_mapper.toEntity(request, tenantId);
        role.setCreatedBy(actor);
        role.setCreatedAt(Instant.now());

        Role saved = role_repository.save(role);

        audit_service.log(actor, "CREATE_ROLE", "created role id=" + saved.getId() + " tenant=" + tenantId);

        return role_mapper.toDto(saved);
    }

    @Override
    @Transactional
    public RoleDto updateRole(String tenantId, UUID roleId, CreateRoleRequest request, String actor) {
        Role existing = role_repository.findByIdAndTenantIdAndDeletedFalse(roleId, tenantId)
            .orElseThrow(() -> new RoleNotFoundException(String.format(ROLE_NOT_FOUND_TEMPLATE, roleId, tenantId)));

        // If name changed, ensure no conflict
        String newName = request.getName();
        if (newName != null && !newName.isBlank() && !newName.equals(existing.getName())) {
            boolean nameConflict = role_repository.findByTenantIdAndNameAndDeletedFalse(tenantId, newName)
                .isPresent();
            if (nameConflict) {
                throw new IllegalArgumentException(String.format(ROLE_NAME_CONFLICT_TEMPLATE, newName, tenantId));
            }
            existing.setName(newName);
        }

        existing.setDescription(request.getDescription());
        // permissions mapper should convert List<String> <-> CSV (RoleMapper handles that)
        existing.setPermissions(role_mapper.joinPermissions(request.getPermissions()));

        existing.setModifiedBy(actor);
        existing.setModifiedAt(Instant.now());

        Role saved = role_repository.save(existing);

        audit_service.log(actor, "UPDATE_ROLE", "updated role id=" + saved.getId() + " tenant=" + tenantId);

        return role_mapper.toDto(saved);
    }


    @Override
    @Transactional
    public void softDeleteRole(String tenantId, UUID roleId, String actor) {
        Role existing = role_repository.findByIdAndTenantIdAndDeletedFalse(roleId, tenantId)
            .orElseThrow(() -> new RoleNotFoundException(String.format(ROLE_NOT_FOUND_TEMPLATE, roleId, tenantId)));

        existing.setDeleted(true);
        existing.setDeletedBy(actor);
        existing.setDeletedAt(Instant.now());

        role_repository.save(existing);

        audit_service.log(actor, "SOFT_DELETE_ROLE", "soft deleted role id=" + existing.getId() + " tenant=" + tenantId);
    }

    @Override
    @Transactional(readOnly = true)
    public RoleDto getRole(String tenantId, UUID roleId) {
        Role r = role_repository.findByIdAndTenantIdAndDeletedFalse(roleId, tenantId)
            .orElseThrow(() -> new RoleNotFoundException(String.format(ROLE_NOT_FOUND_TEMPLATE, roleId, tenantId)));
        return role_mapper.toDto(r);
    }


    @Override
    @Transactional(readOnly = true)
    public List<RoleDto> listRoles(String tenantId) {
        return role_repository.findAllByTenantIdAndDeletedFalse(tenantId)
            .stream()
            .map(role_mapper::toDto)
            .collect(Collectors.toList());
    }
}
