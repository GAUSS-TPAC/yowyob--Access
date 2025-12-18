package com.yowyob_access.access.DTO.role;

import java.time.LocalDateTime;
import java.util.List;
import java.util.UUID;

/**
 * Description:
 *   Data Transfer Object used to expose role data to the outside world.
 *   This DTO does not expose sensitive fields (such as deleted flags,
 *   deleted_by, tenant internal references, etc.).
 *   It includes:
 *   - id
 *   - name
 *   - description
 *   - permissions
 *   - created_at and modified_at timestamps for traceability
 */
public class RoleDto {


    private UUID id;

    private String name;

    private String description;

    private List<String> permissions;

    private LocalDateTime created_at;

    private LocalDateTime modified_at;


    public UUID getId() {
        return id;
    }

    public void setId(UUID id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public List<String> getPermissions() {
        return permissions;
    }

    public void setPermissions(List<String> permissions) {
        this.permissions = permissions;
    }

    public LocalDateTime getCreatedAt() {
        return created_at;
    }

    public void setCreatedAt(LocalDateTime createdAt) {
        this.created_at = createdAt;
    }

    public LocalDateTime getModifiedAt() {
        return modified_at;
    }

    public void setModifiedAt(LocalDateTime modifiedAt) {
        this.modified_at = modifiedAt;
    }
}
