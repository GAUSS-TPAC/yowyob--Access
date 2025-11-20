package com.yowyob_access.access.entities;

import com.yowyob_access.access.enums.TenantStatus;
import jakarta.persistence.*;

import java.util.Date;

@Entity
@Table(name= "TENANT")
public class Tenant {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private int id;
    @Column(unique = true)
    private String tenant_name;
    private Date create_at;
    private Date update_at;
    private TenantStatus status;

    public Tenant() {
    }

    public Tenant(int id, String tenant_name, Date create_at, Date update_at, TenantStatus status) {
        this.id = id;
        this.tenant_name = tenant_name;
        this.create_at = create_at;
        this.update_at = update_at;
        this.status = status;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getTenant_name() {
        return tenant_name;
    }

    public void setTenant_name(String tenant_name) {
        this.tenant_name = tenant_name;
    }

    public Date getCreate_at() {
        return create_at;
    }

    public void setCreate_at(Date create_at) {
        this.create_at = create_at;
    }

    public Date getUpdate_at() {
        return update_at;
    }

    public void setUpdate_at(Date update_at) {
        this.update_at = update_at;
    }

    public TenantStatus getStatus() {
        return status;
    }

    public void setStatus(TenantStatus status) {
        this.status = status;
    }
}