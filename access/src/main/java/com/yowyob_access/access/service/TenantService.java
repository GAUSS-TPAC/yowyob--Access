package com.yowyob_access.access.service;

import com.yowyob_access.access.entities.Tenant;
import com.yowyob_access.access.repository.TenantRepository;
import org.springframework.stereotype.Service;

@Service
public class TenantService {

    private TenantRepository tenantRepository;

    public TenantService(TenantRepository tenantRepository) {
        this.tenantRepository = tenantRepository;
    }

     public void creer(Tenant tenant){
        this.tenantRepository.save(tenant);
     }
}
