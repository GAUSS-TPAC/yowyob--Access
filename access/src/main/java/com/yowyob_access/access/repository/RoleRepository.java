package com.yowyob_access.access.repository;

import com.yowyob_access.access.entities.Role;
import java.util.List;
import java.util.Optional;
import java.util.UUID;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface RoleRepository extends JpaRepository<Role, UUID> {

    Optional<Role> findByTenantIdAndNameAndDeletedFalse(String tenantId, String name);

    Optional<Role> findByIdAndTenantIdAndDeletedFalse(UUID id, String tenantId);

    List<Role> findAllByTenantIdAndDeletedFalse(String tenantId);

  
    List<Role> findAllByTenantId(String tenantId);
}
