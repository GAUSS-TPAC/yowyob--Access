package com.yowyob_access.access.controller;

import com.yowyob_access.access.entities.Tenant;
import com.yowyob_access.access.enums.TenantStatus;
import com.yowyob_access.access.service.TenantService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/tenants")
public class TenantController {

    private TenantService tenantService;

    public TenantController(TenantService tenantService)
    {
        this.tenantService = tenantService;
    }

    @GetMapping
    public List<Tenant> listAll() {
        return tenantService.listAll();
    }

    @GetMapping("/{id}")
    public Tenant get(@PathVariable String id) {
        return tenantService.getById(id);
    }

    @PostMapping
    public ResponseEntity<Tenant> create(@RequestBody Tenant request) {
        Tenant created = tenantService.create(request);
        return ResponseEntity.ok(created);
    }

    @PutMapping("/{id}")
    public Tenant update(@PathVariable String id, @RequestBody Tenant updates) {
        return tenantService.update(id, updates);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable String id) {
        tenantService.delete(id);
        return ResponseEntity.noContent().build();
    }

    @PatchMapping("/{id}/status")
    public Tenant changeStatus(@PathVariable String id, @RequestParam TenantStatus status) {
        return tenantService.changeStatus(id, status);
    }
}
