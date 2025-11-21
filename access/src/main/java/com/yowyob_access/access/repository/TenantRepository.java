package com.yowyob_access.access.repository;

import com.yowyob_access.access.entities.Tenant;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface TenantRepository extends JpaRepository<Tenant, String> {
    Optional<Tenant> findByTenantName(String tenantName);
    boolean existByTenantName(String tenantName);

    Optional<Tenant> findById(String id);
    List<Tenant> findAll();

    // méthodes tenant non supprimés
    List<Tenant> findAllByDeletedFalse();
    Optional<Tenant> findByIdAndDeletedFalse(String id);
    Optional<Tenant> findByTenantNameAndDeletedFalse(String tenantName);
    boolean existsByTenantNameAndDeletedFalse(String tenantName);
}
