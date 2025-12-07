"use client"

import { DashboardHeader } from "@/components/dashboard-header"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"
import { Users, Shield, Clock, AlertCircle } from "lucide-react"
import Link from "next/link"
import { useParams } from "next/navigation"

const activityData = [
  { name: "Mon", actions: 12 },
  { name: "Tue", actions: 19 },
  { name: "Wed", actions: 8 },
  { name: "Thu", actions: 15 },
  { name: "Fri", actions: 22 },
]

export default function TenantDashboard() {
  const params = useParams()
  const tenantId = params.tenantId as string

  return (
    <div className="flex flex-col h-screen">
      <DashboardHeader
        title="Organization Dashboard"
        subtitle="Overview of your tenant"
        actions={
          <Link href={`/tenant/${tenantId}/users/create`}>
            <Button className="bg-primary hover:bg-primary/90">Add User</Button>
          </Link>
        }
      />

      <div className="flex-1 overflow-auto">
        <div className="p-6 space-y-6">
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Card className="p-6 border-border/50">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Total Users</p>
                  <p className="text-3xl font-bold text-foreground mt-2">24</p>
                </div>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Users className="w-6 h-6 text-primary" />
                </div>
              </div>
            </Card>

            <Card className="p-6 border-border/50">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Active Roles</p>
                  <p className="text-3xl font-bold text-foreground mt-2">5</p>
                </div>
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                  <Shield className="w-6 h-6 text-accent" />
                </div>
              </div>
            </Card>

            <Card className="p-6 border-border/50">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Last Login</p>
                  <p className="text-3xl font-bold text-foreground mt-2">2h</p>
                </div>
                <div className="w-12 h-12 rounded-lg bg-orange-500/10 flex items-center justify-center">
                  <Clock className="w-6 h-6 text-orange-500" />
                </div>
              </div>
            </Card>

            <Card className="p-6 border-border/50">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Alerts</p>
                  <p className="text-3xl font-bold text-foreground mt-2">2</p>
                </div>
                <div className="w-12 h-12 rounded-lg bg-destructive/10 flex items-center justify-center">
                  <AlertCircle className="w-6 h-6 text-destructive" />
                </div>
              </div>
            </Card>
          </div>

          {/* Chart */}
          <Card className="p-6 border-border/50">
            <h3 className="text-lg font-semibold mb-4">Activity This Week</h3>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={activityData}>
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
                <Bar dataKey="actions" fill="var(--color-primary)" />
              </BarChart>
            </ResponsiveContainer>
          </Card>

          {/* Quick Links */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link href={`/tenant/${tenantId}/users`}>
              <Card className="p-6 border-border/50 hover:bg-secondary/30 transition-colors cursor-pointer">
                <h3 className="font-semibold mb-2">Manage Users</h3>
                <p className="text-sm text-muted-foreground">Add, edit, or remove users from your organization</p>
              </Card>
            </Link>
            <Link href={`/tenant/${tenantId}/roles`}>
              <Card className="p-6 border-border/50 hover:bg-secondary/30 transition-colors cursor-pointer">
                <h3 className="font-semibold mb-2">Manage Roles</h3>
                <p className="text-sm text-muted-foreground">Define roles and manage permissions</p>
              </Card>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
