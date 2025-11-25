package com.yowyob_access.access.service;

import com.yowyob_access.access.entities.AuditLog;
import com.yowyob_access.access.repository.AuditLogRepository;

import java.util.List;

public class AuditLogService {

    private AuditLogRepository auditLogRepository;

    public List<AuditLog> getAuditLogsByUser(String userId) {
        return auditLogRepository.findByActor(userId);
    }

}
