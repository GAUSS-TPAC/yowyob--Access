CREATE DATABASE access IF NOT EXISTS;

CREATE EXTENSION IF NOT EXISTS "pgcrypto";


CREATE TABLE TENANTS(
    ID UUID primary key not null DEFAULT gen_ramdom_uuid(),
    tenant_name varchar(50) UNIQUE,
    status varchar(10),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    update_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE TABLE USERS (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_name VARCHAR(50),
  email VARCHAR(255) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL, -- stocker hash (bcrypt/argon2)
  status VARCHAR(20) NOT NULL DEFAULT 'ACTIVE',
  tenant_id UUID NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- index sur tenant_id pour recherches filtrées
CREATE INDEX idx_users_tenant_id ON users (tenant_id);
-- index pour recherche par status (utile si filtrage fréquent)
CREATE INDEX idx_users_status ON users (status);

CREATE TABLE ADMIN_TENANT(

    ID UUID primary key not null DEFAULT gen_ramdom_uuid(),
    user_name varchar(20),
    email varchar(20) UNIQUE,
    password varchar(40), 
    status varchar(20) NOT NULL DEFAULT 'ACTIVE', /* les differents status (active, suspended, disabled, archived/deleted) */
    tenant_id UUID not null ,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    update_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),

    CONSTRAINT fk_user FOREIGN KEY (tenant_id) REFERENCES tenants(ID) ON DELETE CASCADE 

);

CREATE TABLE SUPER_ADMIN(
    ID UUID primary key not null DEFAULT gen_ramdom_uuid(),
    user_name varchar(20),
    email varchar(20) UNIQUE,
    password varchar(40), 
    status varchar(20) NOT NULL DEFAULT 'ACTIVE', /* les differents status (active, suspended, disabled, archived/deleted) */
    tenant_id UUID not null ,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    update_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),

);


CREATE TABLE PERMISSIONS(
    ID UUID primary key not null DEFAULT gen_ramdom_uuid(),
    permission_name varchar(50) UNIQUE,
    action varchar(50),
    resource varchar(50),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    update_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE TABLE ROLES (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  role_name VARCHAR(100) UNIQUE NOT NULL,
  description TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE PERMISSIONS (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  permission_name VARCHAR(100) UNIQUE NOT NULL,
  action VARCHAR(50),
  resource VARCHAR(50)
);

CREATE TABLE ROLES_PERMISSIONS (
  role_id UUID NOT NULL REFERENCES roles(id) ON DELETE CASCADE,
  permission_id UUID NOT NULL REFERENCES permissions(id) ON DELETE CASCADE,
  PRIMARY KEY (role_id, permission_id)
);

CREATE TABLE AUDIT_LOGS(
    ID UUID primary key not null DEFAULT gen_ramdom_uuid(),
    user_id UUID not null,
    action varchar(100),
    resource varchar(100),
    timestamp TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    details TEXT,
    ip_address varchar(45),

    CONSTRAINT fk_audit_user FOREIGN KEY (user_id) REFERENCES USER(ID) ON DELETE CASCADE
);

CREATE TABLE audit_log (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL,
  action VARCHAR(100),
  resource VARCHAR(100),
  ts TIMESTAMPTZ DEFAULT NOW(),
  details TEXT,
  ip_address VARCHAR(45)
);

CREATE INDEX idx_auditlog_user_id ON audit_log (user_id);
CREATE INDEX idx_auditlog_ts ON audit_log (ts);

-- Pour gros volume : utiliser partitionnement par range sur "ts".
-- Exemple (Postgres >=10) : créer table parent partitionnée et partitions mensuelles.

-- Index GIN sur array pour opérateurs @> etc.
CREATE INDEX idx_role_permissions_array ON role USING GIN (list_permissions);
