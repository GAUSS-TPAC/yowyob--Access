package com.yowyob_access.access.entities;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.persistence.UniqueConstraint;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.JoinColumn;
import java.time.Instant;
import java.util.UUID;

  
@Entity
@Table(
    name = Role.ROLE_TABLE,
    uniqueConstraints = @UniqueConstraint(name = "uq_tenant_role_name",
        columnNames = {"tenant_id", "name"})
)
public class Role
{
    public static final String ROLE_TABLE = "roles";

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id", nullable = false)
    private UUID id = UUID.randomUUID();

    @Column(name = "tenant_id", nullable = false)
    private String tenant_id;

    @Column(name = "name", nullable = false)
    private String name;

    @Column(name = "description")
    private String description;

    /**
     * Permissions stored as CSV, e.g. "USER_READ,USER_WRITE,ROLE_MANAGE".
     * Use a dedicated Permission entity for complex requirements.
     */
    @Column(name = "permissions", columnDefinition = "text")
    private String permissions;

    @Column(name = "deleted", nullable = false)
    private boolean deleted = false;

    @Column(name = "created_by")
    private String created_by;

    @Column(name = "created_at")
    private Instant created_at;

    @Column(name = "modified_by")
    private String modified_by;

    @Column(name = "modified_at")
    private Instant modified_at;

    @Column(name = "deleted_by")
    private String deleted_by;

    @Column(name = "deleted_at")
    private Instant deleted_at;

    /**
     * Tenant association. K
     */
    @ManyToOne
    @JoinColumn(name = "tenant_ref")
    private Tenant tenant;

    public UUID getId()
    {
        return id;
    }

    public void setId(UUID id)
    {
        this.id = id;
    }

    public String getTenantId()
    {
        return tenant_id;
    }

    public void setTenantId(String tenantId)
    {
        this.tenant_id = tenantId;
    }

    public String getName()
    {
        return name;
    }

    public void setName(String name)
    {
        this.name = name;
    }

    public String getDescription()
    {
        return description;
    }

    public void setDescription(String description)
    {
        this.description = description;
    }

    public String getPermissions()
    {
        return permissions;
    }

    public void setPermissions(String permissions)
    {
        this.permissions = permissions;
    }

    public boolean isDeleted()
    {
        return deleted;
    }

    public void setDeleted(boolean deleted)
    {
        this.deleted = deleted;
    }

    public String getCreatedBy()
    {
        return created_by;
    }

    public void setCreatedBy(String createdBy)
    {
        this.created_by = createdBy;
    }

    public Instant getCreatedAt()
    {
        return created_at;
    }

    public void setCreatedAt(Instant createdAt)
    {
        this.created_at = createdAt;
    }

    public String getModifiedBy()
    {
        return modified_by;
    }

    public void setModifiedBy(String modifiedBy)
    {
        this.modified_by = modifiedBy;
    }

    public Instant getModifiedAt()
    {
        return modified_at;
    }

    public void setModifiedAt(Instant modifiedAt)
    {
        this.modified_at = modifiedAt;
    }

    public String getDeletedBy()
    {
        return deleted_by;
    }

    public void setDeletedBy(String deletedBy)
    {
        this.deleted_by = deletedBy;
    }

    public Instant getDeletedAt()
    {
        return deleted_at;
    }

    public void setDeletedAt(Instant deletedAt)
    {
        this.deleted_at = deletedAt;
    }

    public Tenant getTenant()
    {
        return tenant;
    }

    public void setTenant(Tenant tenant)
    {
        this.tenant = tenant;
    }
}
