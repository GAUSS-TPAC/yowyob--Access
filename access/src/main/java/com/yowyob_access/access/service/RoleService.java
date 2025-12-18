package com.yowyob_access.access.service;

import com.yowyob_access.access.DTO.role.CreateRoleRequest;
import com.yowyob_access.access.DTO.role.RoleDto;
import java.util.List;
import java.util.UUID;

/**
 * Description:
 *   Business interface that defines role operations for the application.
 *   This interface is intentionally concise — implementation contains the
 *   concrete business rules (validation, tenant checks, audit, soft-delete).
 */
public interface RoleService {

    RoleDto createRole(String tenantId, CreateRoleRequest request, String actor);

    RoleDto updateRole(String tenantId, UUID roleId, CreateRoleRequest request, String actor);


    void softDeleteRole(String tenantId, UUID roleId, String actor);

  
    RoleDto getRole(String tenantId, UUID roleId);

   
    List<RoleDto> listRoles(String tenantId);
}
