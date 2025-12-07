"use client"

import { DashboardHeader } from "@/components/dashboard-header"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from "recharts"
import { ArrowUpRight, Users, Building2, Activity } from "lucide-react"
import Link from "next/link"
import { useLanguage } from "@/lib/language-context"
import { translations } from "@/lib/i18n"

const tenantData = [
  { name: "Week 1", tenants: 12, users: 240 },
  { name: "Week 2", tenants: 19, users: 380 },
  { name: "Week 3", tenants: 25, users: 520 },
  { name: "Week 4", tenants: 32, users: 780 },
]

const activityData = [
  { action: "Tenant Created", timestamp: "2 hours ago", tenant: "TechCorp Inc." },
  { action: "User Invited", timestamp: "4 hours ago", tenant: "Innovation Labs" },
  { action: "Role Modified", timestamp: "6 hours ago", tenant: "Digital Solutions" },
  { action: "Security Audit", timestamp: "1 day ago", tenant: "Global Enterprises" },
]

export default function SuperAdminDashboard() {
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <div className="flex flex-col h-screen">
      <DashboardHeader
        title={t.superAdminDash.title}
        subtitle={
          language === "en"
            ? "Overview of all tenants and platform activity"
            : "Aperçu de tous les locataires et des activités de la plateforme"
        }
        actions={
          <Link href="/super-admin/tenants/create">
            <Button className="bg-primary hover:bg-primary/90">{t.tenants.createNew}</Button>
          </Link>
        }
      />

      <div className="flex-1 overflow-auto">
        <div className="p-6 space-y-6">
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card className="p-6 border-border/50">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">{t.superAdminDash.totalTenants}</p>
                  <p className="text-3xl font-bold text-foreground mt-2">32</p>
                  <p className="text-xs text-primary mt-2 flex items-center gap-1">
                    <ArrowUpRight className="w-3 h-3" /> 15% from last month
                  </p>
                </div>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Building2 className="w-6 h-6 text-primary" />
                </div>
              </div>
            </Card>

            <Card className="p-6 border-border/50">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">{t.superAdminDash.activeUsers}</p>
                  <p className="text-3xl font-bold text-foreground mt-2">1,240</p>
                  <p className="text-xs text-primary mt-2 flex items-center gap-1">
                    <ArrowUpRight className="w-3 h-3" /> 8% from last month
                  </p>
                </div>
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                  <Users className="w-6 h-6 text-accent" />
                </div>
              </div>
            </Card>

            <Card className="p-6 border-border/50">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">{t.superAdminDash.recentActivity}</p>
                  <p className="text-3xl font-bold text-foreground mt-2">48</p>
                  <p className="text-xs text-primary mt-2 flex items-center gap-1">
                    <ArrowUpRight className="w-3 h-3" /> Today
                  </p>
                </div>
                <div className="w-12 h-12 rounded-lg bg-orange-500/10 flex items-center justify-center">
                  <Activity className="w-6 h-6 text-orange-500" />
                </div>
              </div>
            </Card>
          </div>

          {/* Charts */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="p-6 border-border/50">
              <h3 className="text-lg font-semibold mb-4">
                {language === "en" ? "Growth Trend" : "Tendance de Croissance"}
              </h3>
              <ResponsiveContainer width="100%" height={250}>
                <LineChart data={tenantData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
                  <XAxis dataKey="name" stroke="var(--color-muted-foreground)" />
                  <YAxis stroke="var(--color-muted-foreground)" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "var(--color-card)",
                      border: "1px solid var(--color-border)",
                      borderRadius: "0.5rem",
                    }}
                  />
                  <Line type="monotone" dataKey="tenants" stroke="var(--color-primary)" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </Card>

            <Card className="p-6 border-border/50">
              <h3 className="text-lg font-semibold mb-4">
                {language === "en" ? "Tenant Distribution" : "Distribution des Locataires"}
              </h3>
              <ResponsiveContainer width="100%" height={250}>
                <BarChart data={tenantData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
                  <XAxis dataKey="name" stroke="var(--color-muted-foreground)" />
                  <YAxis stroke="var(--color-muted-foreground)" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "var(--color-card)",
                      border: "1px solid var(--color-border)",
                      borderRadius: "0.5rem",
                    }}
                  />
                  <Bar dataKey="users" fill="var(--color-accent)" />
                </BarChart>
              </ResponsiveContainer>
            </Card>
          </div>

          {/* Recent Activity */}
          <Card className="p-6 border-border/50">
            <h3 className="text-lg font-semibold mb-4">{t.superAdminDash.recentActivity}</h3>
            <div className="space-y-3">
              {activityData.map((activity, idx) => (
                <div
                  key={idx}
                  className="flex items-start justify-between p-3 rounded-lg hover:bg-secondary/30 transition-colors"
                >
                  <div>
                    <p className="font-medium text-sm">{activity.action}</p>
                    <p className="text-xs text-muted-foreground">{activity.tenant}</p>
                  </div>
                  <p className="text-xs text-muted-foreground">{activity.timestamp}</p>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}
