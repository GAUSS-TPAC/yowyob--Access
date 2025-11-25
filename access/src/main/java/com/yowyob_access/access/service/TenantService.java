package com.yowyob_access.access.service;

import com.yowyob_access.access.entities.AuditLog;
import com.yowyob_access.access.entities.Tenant;
import com.yowyob_access.access.enums.TenantStatus;
import com.yowyob_access.access.repository.AuditLogRepository;
import com.yowyob_access.access.repository.TenantRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.Instant;
import java.util.List;

@Service
public class TenantService {

    private TenantRepository tenantRepository;
    private AuditLogRepository auditLogRepository;

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
    public Tenant update(String id, Tenant tenant_updates) {
        Tenant existing = getById(id);
        if (tenant_updates.getTenantName() != null) existing.setTenantName(tenant_updates.getTenantName());
        if (tenant_updates.getStatus() != null) existing.setStatus(tenant_updates.getStatus());
        Tenant tenant_saved = tenantRepository.save(existing);
        auditLogRepository.save(new AuditLog("Tenant", id, "UPDATE", "system", "updated fields"));
        return tenant_saved;
    }

    @Transactional
    public void delete(String id) {
        Tenant tenant = tenantRepository.findByIdAndDeletedFalse(id)
                .orElseThrow(() -> new RuntimeException("tenant not found or already deleted"));
        tenant.setDeleted(true);
        tenant.setDeletedAt(Instant.now());
        tenant.setDeletedBy("system"); // remplacer par l'actor réel si disponible
        // Assurer que TenantStatus contient DELETED ou utiliser INACTIVE selon la charte
        tenant.setStatus(TenantStatus.DELETED);
        tenantRepository.save(tenant);

        auditLogRepository.save(new AuditLog("Tenant", id, "DELETE_SOFT", "system", "soft-deleted tenant"));
    }

    @Transactional
    public Tenant changeStatus(String id, TenantStatus status) {
        Tenant tenant = getById(id);
        tenant.setStatus(status);
        Tenant saved = tenantRepository.save(tenant);
        auditLogRepository.save(new AuditLog("Tenant", id, "STATUS_CHANGE", "system", "status -> " + status));
        return saved;
    }
}
