package com.yowyob_access.access.repositories;

import com.yowyob_access.access.entities.Tenant;
import com.yowyob_access.access.enums.TenantStatus;
import org.springframework.data.jpa.repository.JpaRepository;

import java.time.Instant;
import java.util.List;
import java.util.Optional;

public interface TenantRepository extends JpaRepository<Tenant, String> {

    List<Tenant> findAllByDeletedFalseAndStatus(TenantStatus status);
    List<Tenant> findAllByDeletedFalseAndCreatedAtBetween(Instant startDate, Instant endDate);

    Optional<Tenant> findByTenantName(String tenantName);
    boolean existsByTenantName(String tenantName);

    Optional<Tenant> findById(String id);
    List<Tenant> findAll();

    // méthodes tenant non supprimés
    List<Tenant> findAllByDeletedFalse();
    Optional<Tenant> findByIdAndDeletedFalse(String id);
    Optional<Tenant> findByTenantNameAndDeletedFalse(String tenantName);
    boolean existsByTenantNameAndDeletedFalse(String tenantName);

}
