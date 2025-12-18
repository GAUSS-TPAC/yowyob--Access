package com.yowyob_access.access.DTO.role;

import java.util.List;

/**
 *   DTO used when creating or updating a role. It contains only writable fields
 *   (name, description, permissions). No metadata and no audit fields are included.
 */
public class CreateRoleRequest {

    private String name;       // Role name (example: ADMIN, MANAGER, VIEWER).

    private String description;

    private List<String> permissions;


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
}
