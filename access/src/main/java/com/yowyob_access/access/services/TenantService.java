package com.yowyob_access.access.services;

import com.yowyob_access.access.entities.AuditLog;
import com.yowyob_access.access.entities.Tenant;
import com.yowyob_access.access.enums.AuditLogAction;
import com.yowyob_access.access.enums.AuditLogEntitiyType;
import com.yowyob_access.access.enums.TenantStatus;
import com.yowyob_access.access.repositories.AuditLogRepository;
import com.yowyob_access.access.repositories.TenantRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.Instant;
import java.util.List;

import static com.yowyob_access.access.enums.AuditLogAction.*;
import static com.yowyob_access.access.enums.AuditLogEntitiyType.TENANT;

@Service
@RequiredArgsConstructor
public class TenantService {

    private TenantRepository tenantRepository;
    private AuditLogRepository auditLogRepository;


    @Transactional
    public Tenant create(Tenant tenant, String actor, String ip) {

        if (tenantRepository.existsByTenantName(tenant.getTenantName())) {
            throw new IllegalArgumentException("Tenant name already exists");
        }

        tenant.setStatus(TenantStatus.ACTIVE);
        Tenant saved = tenantRepository.save(tenant);
        auditLogRepository.save(new AuditLog(TENANT, "Tenant", saved.getId(), CREATE, actor, "Tenant created", "/api/tenants", ip, null, saved.toString()));

        return saved;
    }

    public List<Tenant> listAll(){
        return tenantRepository.findAll();
    }

    public Tenant getById(String id){
        return tenantRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("tenant not found"));
    }

    @Transactional
    public Tenant update(String id, Tenant updates, String actor, String ip) {

        Tenant existing = getById(id);

        String oldValue = existing.toString();

        if (updates.getTenantName() != null)
            existing.setTenantName(updates.getTenantName());

        if (updates.getStatus() != null)
            existing.setStatus(updates.getStatus());

        Tenant saved = tenantRepository.save(existing);

        auditLogRepository.save(new AuditLog(AuditLogEntitiyType.TENANT, "Tenant", saved.getId(), AuditLogAction.UPDATE, actor, "Tenant updated", "/api/tenants/" + id, ip, oldValue, saved.toString()));

        return saved;
    }


    @Transactional
    public void delete(String id, String actor, String ip) {

        Tenant tenant = getById(id);

        String oldValue = tenant.toString();

        tenant.setDeleted(true);
        tenant.setDeletedAt(Instant.now());
        tenant.setDeletedBy(actor);
        tenant.setStatus(TenantStatus.DELETED);

        tenantRepository.save(tenant);

        auditLogRepository.save(
                new AuditLog(
                        AuditLogEntitiyType.TENANT,
                        "Tenant",
                        id,
                        AuditLogAction.DELETE,
                        actor,
                        "Soft delete performed",
                        "/api/tenants/" + id,
                        ip,
                        oldValue,
                        null
                )
        );
    }

    @Transactional
    public Tenant changeStatus(String id, TenantStatus status) {
        Tenant tenant = getById(id);
        tenant.setStatus(status);
        Tenant saved = tenantRepository.save(tenant);
        auditLogRepository.save(new AuditLog("Tenant", id, STATUS_CHANGE, "system", "status -> " + status));
        return saved;
    }
}
