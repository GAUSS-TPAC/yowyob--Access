package com.yowyob_access.access.service;

import com.yowyob_access.access.entities.Tenant;
import com.yowyob_access.access.enums.TenantStatus;
import com.yowyob_access.access.repository.TenantRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class TenantService {

    private TenantRepository tenantRepository;

    public TenantService(TenantRepository tenantRepository) {
        this.tenantRepository = tenantRepository;
    }

    @Transactional
    public Tenant create(Tenant tenant){
        if(tenantRepository.existByTenantName(tenant.getTenantName())){
            throw new RuntimeException("Tenant name already exists");
        }
        tenant.setStatus(TenantStatus.ACTIVE);
        return tenantRepository.save(tenant);
    }

    public List<Tenant> listAll(){
        return tenantRepository.findAll();
    }

    public Tenant getById(String id){
        return tenantRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("tenant not found"));
    }

    @Transactional
    public Tenant update(String id, Tenant updates) {
        Tenant existing = getById(id);
        if (updates.getTenantName() != null) existing.setTenantName(updates.getTenantName());
        if (updates.getStatus() != null) existing.setStatus(updates.getStatus());
        return tenantRepository.save(existing);
    }

    @Transactional
    public void delete(String id) {
        tenantRepository.deleteById(id);
    }

    @Transactional
    public Tenant changeStatus(String id, TenantStatus status) {
        Tenant tenant = getById(id);
        tenant.setStatus(status);
        return tenantRepository.save(tenant);
    }
}
