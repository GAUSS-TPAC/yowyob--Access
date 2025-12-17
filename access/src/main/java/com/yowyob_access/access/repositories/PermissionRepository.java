package com.yowyob_access.access.repositories;

import com.yowyob_access.access.entities.Permission;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.UUID;

public interface PermissionRepository extends JpaRepository<Permission, UUID> {

    boolean existsByTenantIdAndPermissionName(UUID tenantId, String permissionName);

    List<Permission> findByTenantId(UUID tenantId);
}
