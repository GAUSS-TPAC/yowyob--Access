package com.yowyob_access.access.services;

import com.yowyob_access.access.entities.Permission;
import com.yowyob_access.access.repositories.PermissionRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.UUID;
import java.util.List;

@Service
public class PermissionService {

    private final PermissionRepository repository;

    public PermissionService(PermissionRepository repository) {
        this.repository = repository;
    }

    @Transactional
    public Permission create(Permission permission, UUID tenantId) {

        if (repository.existsByTenantIdAndPermissionName(tenantId, permission.getPermissionName())) {
            throw new IllegalArgumentException("Permission already exists for this tenant");
        }

        permission.setTenantId(tenantId);
        return repository.save(permission);
    }

    public List<Permission> list(UUID tenantId) {
        return repository.findByTenantId(tenantId);
    }

    public void delete(UUID permissionId, UUID tenantId) {
        Permission p = repository.findById(permissionId)
                .orElseThrow(() -> new IllegalArgumentException("Permission not found"));

        if (!p.getTenantId().equals(tenantId)) {
            throw new SecurityException("Unauthorized");
        }

        repository.delete(p);
    }
}
