package com.yowyob_access.access.controller;

import com.yowyob_access.access.entities.AdminTenant;
import com.yowyob_access.access.entities.Tenant;
import com.yowyob_access.access.enums.TenantStatus;
import com.yowyob_access.access.service.TenantService;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.security.core.context.SecurityContextHolder;

import org.springframework.boot.autoconfigure.kafka.KafkaProperties;
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
    public Tenant getTenant(@PathVariable String id) {
        return tenantService.getById(id);
    }

    @PostMapping
    public ResponseEntity<Tenant> createTenant(@RequestBody Tenant tenant, HttpServletRequest request) {

        // 1. Récupération de l’acteur authentifié
        String actor = SecurityContextHolder.getContext()
                .getAuthentication()
                .getName();

        // 2. Récupération de l'adresse IP
        String ip = request.getHeader("X-Forwarded-For");
        if (ip == null) {
            ip = request.getRemoteAddr();
        }

        // 3. Appel du service
        Tenant created = tenantService.create(tenant, actor, ip);

        return ResponseEntity.ok(created);
    }


    @PutMapping("/{id}")
    public Tenant update(@PathVariable String id, @RequestBody Tenant updates, HttpServletRequest request) {
        // 1. Récupération de l’acteur authentifié
        String actor = SecurityContextHolder.getContext()
                .getAuthentication()
                .getName();

        // 2. Récupération de l'adresse IP
        String ip = request.getHeader("X-Forwarded-For");
        if (ip == null) {
            ip = request.getRemoteAddr();
        }

        // 3. Appel du service
        return tenantService.update(id, updates, actor, ip);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable String id, HttpServletRequest request) {
        // 1. Récupération de l’acteur authentifié
        String actor = SecurityContextHolder.getContext()
                .getAuthentication()
                .getName();

        // 2. Récupération de l'adresse IP
        String ip = request.getHeader("X-Forwarded-For");
        if (ip == null) {
            ip = request.getRemoteAddr();
        }

        // 3. Appel du service
        tenantService.delete(id, actor, ip);
        return ResponseEntity.noContent().build();
    }

    @PatchMapping("/{id}/status")
    public Tenant changeStatus(@PathVariable String id, @RequestParam TenantStatus status) {
        return tenantService.changeStatus(id, status);
    }
}
