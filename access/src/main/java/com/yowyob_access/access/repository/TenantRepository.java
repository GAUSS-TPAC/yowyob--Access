package com.yowyob_access.access.repository;

import com.yowyob_access.access.entities.Tenant;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TenantRepository extends JpaRepository<Tenant, Integer> {

}
