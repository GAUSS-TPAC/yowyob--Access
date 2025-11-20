package com.yowyob_access.access.controller;

import com.yowyob_access.access.service.TenantService;

public class TenantController {

    private TenantService tenantService;

    public TenantController(TenantService tenantService) {
        this.tenantService = tenantService;
    }
}
