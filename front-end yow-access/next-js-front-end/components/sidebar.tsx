"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ChevronDown, LayoutDashboard, Users, Shield, FileText, LogOut, Settings } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { useLanguage } from "@/lib/language-context"
import { translations } from "@/lib/i18n"

interface SidebarProps {
  isSuperAdmin?: boolean
  tenantId?: string
}

export function Sidebar({ isSuperAdmin = false, tenantId }: SidebarProps) {
  const pathname = usePathname()
  const [collapsed, setCollapsed] = useState(false)
  const { language } = useLanguage()
  const t = translations[language]

  const isActive = (path: string) => pathname.startsWith(path)

  const superAdminLinks = [
    { href: "/super-admin/dashboard", label: t.nav.dashboard, icon: LayoutDashboard },
    { href: "/super-admin/tenants", label: t.nav.tenants, icon: Shield },
  ]

  const tenantLinks = [
    { href: `/tenant/${tenantId}/dashboard`, label: t.nav.dashboard, icon: LayoutDashboard },
    { href: `/tenant/${tenantId}/users`, label: t.nav.users, icon: Users },
    { href: `/tenant/${tenantId}/roles`, label: t.nav.roles, icon: Shield },
    { href: `/tenant/${tenantId}/audit`, label: t.nav.audit, icon: FileText },
  ]

  const links = isSuperAdmin ? superAdminLinks : tenantLinks

  return (
    <aside
      className={cn(
        "h-screen border-r border-sidebar-border bg-sidebar text-sidebar-foreground transition-all duration-300 flex flex-col",
        collapsed ? "w-20" : "w-64",
      )}
    >
      {/* Logo */}
      <div className="p-4 border-b border-sidebar-border">
        <Link
          href={isSuperAdmin ? "/super-admin/dashboard" : `/tenant/${tenantId}/dashboard`}
          className="flex items-center gap-2"
        >
          <div className="w-8 h-8 rounded-lg bg-sidebar-primary/20 flex items-center justify-center flex-shrink-0">
            <span className="font-bold text-sidebar-primary">A</span>
          </div>
          {!collapsed && <span className="font-bold text-sm">AdminHub</span>}
        </Link>
      </div>

      {/* Navigation Links */}
      <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
        {links.map((link) => {
          const Icon = link.icon
          const active = isActive(link.href)
          return (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors",
                active
                  ? "bg-sidebar-primary/20 text-sidebar-primary font-medium"
                  : "text-sidebar-foreground/70 hover:bg-sidebar-accent/10 hover:text-sidebar-foreground",
              )}
              title={link.label}
            >
              <Icon className="w-5 h-5 flex-shrink-0" />
              {!collapsed && <span>{link.label}</span>}
            </Link>
          )
        })}
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-sidebar-border space-y-2">
        <Link
          href="/super-admin/dashboard"
          className={cn(
            "flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors",
            "text-sidebar-foreground/70 hover:bg-sidebar-accent/10 hover:text-sidebar-foreground",
          )}
          title="Settings"
        >
          <Settings className="w-5 h-5 flex-shrink-0" />
          {!collapsed && <span>Settings</span>}
        </Link>
        <Button
          variant="ghost"
          className="w-full justify-start gap-3 text-sidebar-foreground/70 hover:bg-sidebar-accent/10 hover:text-sidebar-foreground"
          onClick={() => (window.location.href = "/login")}
        >
          <LogOut className="w-5 h-5" />
          {!collapsed && t.nav.logout}
        </Button>
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="w-full flex items-center justify-center py-2 text-sidebar-foreground/50 hover:text-sidebar-foreground transition-colors"
          title="Toggle sidebar"
        >
          <ChevronDown className={cn("w-4 h-4 transition-transform", collapsed && "-rotate-90")} />
        </button>
      </div>
    </aside>
  )
}
