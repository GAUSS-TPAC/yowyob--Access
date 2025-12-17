package com.yowyob_access.access.services;

import com.yowyob_access.access.entities.AuditLog;
import com.yowyob_access.access.repositories.AuditLogRepository;

import java.util.List;

public class AuditLogService {

    private AuditLogRepository auditLogRepository;

    public List<AuditLog> getAuditLogsByUser(String userId) {
        return auditLogRepository.findByActor(userId);
    }

}
