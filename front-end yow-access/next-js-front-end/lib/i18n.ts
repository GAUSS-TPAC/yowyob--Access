export const translations = {
  en: {
    // Navigation
    nav: {
      dashboard: "Dashboard",
      tenants: "Tenants",
      users: "Users",
      roles: "Roles",
      audit: "Audit Log",
      logout: "Logout",
    },
    // Auth
    auth: {
      title: "AdminHub Login",
      subtitle: "Multi-Tenant Management Platform",
      email: "Email",
      password: "Password",
      login: "Sign In",
      demo: "Demo Credentials",
      demoEmail: "admin@adminhub.com",
      demoPassword: "admin123",
    },
    // Super Admin Dashboard
    superAdminDash: {
      title: "Platform Dashboard",
      totalTenants: "Total Tenants",
      activeUsers: "Active Users",
      recentActivity: "Recent Activity",
      systemHealth: "System Health",
      uptime: "Uptime",
    },
    // Tenants
    tenants: {
      title: "Manage Tenants",
      createNew: "Create Tenant",
      name: "Tenant Name",
      admin: "Admin Email",
      created: "Created",
      status: "Status",
      actions: "Actions",
    },
    // Users
    users: {
      title: "Manage Users",
      createNew: "Add User",
      name: "Full Name",
      email: "Email",
      role: "Role",
      joined: "Joined",
      lastActive: "Last Active",
    },
    // Roles
    roles: {
      title: "Manage Roles",
      createNew: "Create Role",
      name: "Role Name",
      permissions: "Permissions",
      users: "Users",
    },
    // Audit
    audit: {
      title: "Audit Log",
      timestamp: "Timestamp",
      user: "User",
      action: "Action",
      details: "Details",
      login: "User Login",
      createUser: "User Created",
      createRole: "Role Created",
      delete: "Item Deleted",
      impersonate: "User Impersonated",
    },
  },
  fr: {
    // Navigation
    nav: {
      dashboard: "Tableau de Bord",
      tenants: "Locataires",
      users: "Utilisateurs",
      roles: "Rôles",
      audit: "Journal d'Audit",
      logout: "Déconnexion",
    },
    // Auth
    auth: {
      title: "Connexion AdminHub",
      subtitle: "Plateforme de Gestion Multi-Locataire",
      email: "Email",
      password: "Mot de passe",
      login: "Se Connecter",
      demo: "Identifiants de Démonstration",
      demoEmail: "admin@adminhub.com",
      demoPassword: "admin123",
    },
    // Super Admin Dashboard
    superAdminDash: {
      title: "Tableau de Bord de la Plateforme",
      totalTenants: "Locataires Totaux",
      activeUsers: "Utilisateurs Actifs",
      recentActivity: "Activité Récente",
      systemHealth: "Santé du Système",
      uptime: "Disponibilité",
    },
    // Tenants
    tenants: {
      title: "Gérer les Locataires",
      createNew: "Créer un Locataire",
      name: "Nom du Locataire",
      admin: "Email de l'Admin",
      created: "Créé",
      status: "Statut",
      actions: "Actions",
    },
    // Users
    users: {
      title: "Gérer les Utilisateurs",
      createNew: "Ajouter un Utilisateur",
      name: "Nom Complet",
      email: "Email",
      role: "Rôle",
      joined: "Inscrit",
      lastActive: "Dernière Activité",
    },
    // Roles
    roles: {
      title: "Gérer les Rôles",
      createNew: "Créer un Rôle",
      name: "Nom du Rôle",
      permissions: "Permissions",
      users: "Utilisateurs",
    },
    // Audit
    audit: {
      title: "Journal d'Audit",
      timestamp: "Horodatage",
      user: "Utilisateur",
      action: "Action",
      details: "Détails",
      login: "Connexion Utilisateur",
      createUser: "Utilisateur Créé",
      createRole: "Rôle Créé",
      delete: "Élément Supprimé",
      impersonate: "Utilisateur Impersonné",
    },
  },
}

export type Language = "en" | "fr"
