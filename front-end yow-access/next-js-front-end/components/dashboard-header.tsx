"use client"

import type React from "react"
import { Bell, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { LanguageSwitcher } from "@/components/language-switcher"

interface DashboardHeaderProps {
  title: string
  subtitle?: string
  actions?: React.ReactNode
}

export function DashboardHeader({ title, subtitle, actions }: DashboardHeaderProps) {
  return (
    <div className="border-b border-border bg-card">
      <div className="px-6 py-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-foreground">{title}</h1>
          {subtitle && <p className="text-sm text-muted-foreground mt-1">{subtitle}</p>}
        </div>
        <div className="flex items-center gap-3">
          {actions}
          <LanguageSwitcher />
          <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
            <Bell className="w-5 h-5" />
          </Button>
          <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
            <User className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </div>
  )
}
