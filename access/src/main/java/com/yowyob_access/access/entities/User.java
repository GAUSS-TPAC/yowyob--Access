package com.yowyob_access.access.entities;

import jakarta.persistence.Id;
import org.hibernate.annotations.TenantId;

public class User {
    private int id;
    private String user_name;
    private String email;
    private String password;
    private Tenant tenant;
}
