package com.yowyob_access.access.controllers;

import com.yowyob_access.access.entities.Permission;
import com.yowyob_access.access.services.PermissionService;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/api/tenants/{tenantId}/permissions")
public class PermissionController {

    private final PermissionService service;

    public PermissionController(PermissionService service) {
        this.service = service;
    }

    @PostMapping
    public Permission create(@PathVariable UUID tenantId,
                             @RequestBody Permission permission) {
        return service.create(permission, tenantId);
    }

    @GetMapping
    public List<Permission> list(@PathVariable UUID tenantId) {
        return service.list(tenantId);
    }

    @DeleteMapping("/{permissionId}")
    public void delete(@PathVariable UUID tenantId,
                       @PathVariable UUID permissionId) {
        service.delete(permissionId, tenantId);
    }
}
