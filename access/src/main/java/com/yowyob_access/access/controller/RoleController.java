package com.yowyob_access.access.controller;

import com.yowyob_access.access.DTO.role.CreateRoleRequest;
import com.yowyob_access.access.DTO.role.RoleDto;
import com.yowyob_access.access.service.RoleService;
import java.util.List;
import java.util.UUID;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

/**
 * Description:
 *   REST controller that exposes CRUD operations for Role resources in a multi-tenant
 *   system. Endpoints are tenant-scoped (tenantId in path). This controller only
 *   handles HTTP mapping and delegates business rules to RoleService.
 */
@RestController
@RequestMapping(path = "/api/v1/tenants/{tenantId}/roles")
public class RoleController {

    private final RoleService role_service;

    //Constructor injection for RoleService.
    public RoleController(RoleService roleService) {
        this.role_service = roleService;
    }

  
    @PostMapping
    public ResponseEntity<RoleDto> createRole(
        @PathVariable("tenantId") String tenantId,
        @RequestBody CreateRoleRequest request,
        @RequestHeader("X-Actor-Id") String actor) {

        RoleDto dto = role_service.createRole(tenantId, request, actor);
        return ResponseEntity.status(HttpStatus.CREATED).body(dto);
    }

  
    @PutMapping("/{roleId}")
    public ResponseEntity<RoleDto> updateRole(
        @PathVariable("tenantId") String tenantId,
        @PathVariable("roleId") UUID roleId,
        @RequestBody CreateRoleRequest request,
        @RequestHeader("X-Actor-Id") String actor) {

        RoleDto dto = role_service.updateRole(tenantId, roleId, request, actor);
        return ResponseEntity.ok(dto);
    }

     //Soft delete a role for the given tenant.
    @DeleteMapping("/{roleId}")
    public ResponseEntity<Void> softDeleteRole(
        @PathVariable("tenantId") String tenantId,
        @PathVariable("roleId") UUID roleId,
        @RequestHeader("X-Actor-Id") String actor) {

        role_service.softDeleteRole(tenantId, roleId, actor);
        return ResponseEntity.noContent().build();
    }

    //Retrieve a role by id (non-deleted).
  
    @GetMapping("/{roleId}")
    public ResponseEntity<RoleDto> getRole(
        @PathVariable("tenantId") String tenantId,
        @PathVariable("roleId") UUID roleId) {

        RoleDto dto = role_service.getRole(tenantId, roleId);
        return ResponseEntity.ok(dto);
    }

    //List all non-deleted roles for a tenant.
    @GetMapping
    public ResponseEntity<List<RoleDto>> listRoles(
        @PathVariable("tenantId") String tenantId) {

        List<RoleDto> roles = role_service.listRoles(tenantId);
        return ResponseEntity.ok(roles);
    }
}
