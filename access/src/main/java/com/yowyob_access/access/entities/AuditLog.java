// java
package com.yowyob_access.access.entities;

import com.yowyob_access.access.enums.AuditLogAction;
import com.yowyob_access.access.enums.AuditLogEntitiyType;
import jakarta.persistence.*;
import org.hibernate.annotations.GenericGenerator;

import java.time.Instant;

@Entity
@Table(name = "audit_log")
public class AuditLog {

    @Id
    @GeneratedValue(generator = "UUID")
    @GenericGenerator(name = "UUID", strategy = "org.hibernate.id.UUIDGenerator")
    @Column(name = "id", updatable = false, nullable = false, length = 36)
    private String id;

    @Enumerated(EnumType.STRING)
    @Column(name = "entity_type", nullable = false)
    private AuditLogEntitiyType entityType;

    @Column(name = "entity_name", nullable = false, length = 100)
    private String entityName;

    @Column(name = "entity_id", nullable = false, length = 36)
    private String entityId;

    @Enumerated(EnumType.STRING)
    @Column(name = "action", nullable = false)
    private AuditLogAction action;

    @Column(name = "actor", length = 100)
    private String actor;

    @Column(name = "details", columnDefinition = "TEXT")
    private String details;

    @Column(name = "resource", length = 100)
    private String resource;

    @Column(name = "ip_address", length = 45)
    private String ipAddress;

    @Column(name = "created_at", nullable = false)
    private Instant createdAt = Instant.now();

    @Column(columnDefinition = "TEXT")
    private String oldValue;

    @Column(columnDefinition = "TEXT")
    private String newValue;


    public AuditLog() {}

    public AuditLog(String entityName, String entityId, AuditLogAction action, String actor, String details) {
        this.entityName = entityName;
        this.entityId = entityId;
        this.action = action;
        this.actor = actor;
        this.details = details;
    }


    public AuditLog(String id, AuditLogEntitiyType entityType, String entityName, String entityId, AuditLogAction action, String actor, String details, String resource, String ipAddress, Instant createdAt, String oldValue, String newValue) {
        this.id = id;
        this.entityType = entityType;
        this.entityName = entityName;
        this.entityId = entityId;
        this.action = action;
        this.actor = actor;
        this.details = details;
        this.resource = resource;
        this.ipAddress = ipAddress;
        this.createdAt = createdAt;
        this.oldValue = oldValue;
        this.newValue = newValue;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public AuditLogEntitiyType getEntityType() {
        return entityType;
    }

    public void setEntityType(AuditLogEntitiyType entityType) {
        this.entityType = entityType;
    }

    public String getEntityId() {
        return entityId;
    }

    public void setEntityId(String entityId) {
        this.entityId = entityId;
    }

    public AuditLogAction getAction() {
        return action;
    }

    public void setAction(AuditLogAction action) {
        this.action = action;
    }

    public String getActor() {
        return actor;
    }

    public void setActor(String actor) {
        this.actor = actor;
    }

    public String getDetails() {
        return details;
    }

    public void setDetails(String details) {
        this.details = details;
    }

    public String getResource() {
        return resource;
    }

    public void setResource(String resource) {
        this.resource = resource;
    }

    public String getIpAddress() {
        return ipAddress;
    }

    public void setIpAddress(String ipAddress) {
        this.ipAddress = ipAddress;
    }

    public Instant getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(Instant createdAt) {
        this.createdAt = createdAt;
    }

    public String getOldValue() {
        return oldValue;
    }

    public void setOldValue(String oldValue) {
        this.oldValue = oldValue;
    }

    public String getNewValue() {
        return newValue;
    }

    public void setNewValue(String newValue) {
        this.newValue = newValue;
    }
}



