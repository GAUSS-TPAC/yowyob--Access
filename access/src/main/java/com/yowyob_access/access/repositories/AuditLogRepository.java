package com.yowyob_access.access.repositories;

import com.yowyob_access.access.entities.AuditLog;
import com.yowyob_access.access.enums.AuditLogAction;
import com.yowyob_access.access.enums.AuditLogEntitiyType;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import java.time.Instant;
import java.util.List;

public interface AuditLogRepository extends JpaRepository<AuditLog, String> {
    // Recherche par type d'entité et ID d'entité
    List<AuditLog> findByEntityTypeAndEntityId(AuditLogEntitiyType entityType, String entityId);

    // Recherche par action (utilise l'enum AuditLogAction)
    List<AuditLog> findByAction(AuditLogAction action);

    // Recherche par utilisateur (actor)
    List<AuditLog> findByActor(String actor);

    // Recherche par période
    List<AuditLog> findByCreatedAtBetween(Instant startDate, Instant endDate);

    // Recherche par ancienne ou nouvelle valeur
    List<AuditLog> findByOldValueContainingOrNewValueContaining(String oldValue, String newValue);

    Page<AuditLog> findByEntityType(AuditLogEntitiyType entityType, Pageable pageable);


}
