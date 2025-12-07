"use client"

import { DashboardHeader } from "@/components/dashboard-header"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Search, LogIn, UserPlus, Shield, Edit, Trash2 } from "lucide-react"
import { useParams } from "next/navigation"
import { useState } from "react"

const auditLog = [
  {
    id: 1,
    action: "User Login",
    user: "John Doe",
    email: "john@company.com",
    timestamp: "2024-03-10 14:30:00",
    details: "Successful authentication from 192.168.1.100",
    icon: LogIn,
    severity: "info",
  },
  {
    id: 2,
    action: "User Created",
    user: "Jane Smith (Admin)",
    email: "jane@company.com",
    timestamp: "2024-03-10 13:15:00",
    details: "New user: Mike Johnson (mike@company.com) added with User role",
    icon: UserPlus,
    severity: "info",
  },
  {
    id: 3,
    action: "Role Modified",
    user: "John Doe",
    email: "john@company.com",
    timestamp: "2024-03-10 12:45:00",
    details: 'Manager role updated: Added "manage_roles" permission',
    icon: Shield,
    severity: "warning",
  },
  {
    id: 4,
    action: "User Updated",
    user: "Jane Smith (Admin)",
    email: "jane@company.com",
    timestamp: "2024-03-10 11:30:00",
    details: "Emily Brown role changed from User to Manager",
    icon: Edit,
    severity: "info",
  },
  {
    id: 5,
    action: "User Deleted",
    user: "John Doe",
    email: "john@company.com",
    timestamp: "2024-03-09 16:20:00",
    details: "User account removed: Alex Johnson",
    icon: Trash2,
    severity: "error",
  },
  {
    id: 6,
    action: "Impersonation",
    user: "Jane Smith (Admin)",
    email: "jane@company.com",
    timestamp: "2024-03-09 14:00:00",
    details: "Admin accessed as: Mike Johnson for support purposes",
    icon: Shield,
    severity: "warning",
  },
]

export default function AuditPage() {
  const params = useParams()
  const tenantId = params.tenantId as string
  const [searchTerm, setSearchTerm] = useState("")

  const filteredLogs = auditLog.filter(
    (log) =>
      log.action.toLowerCase().includes(searchTerm.toLowerCase()) ||
      log.user.toLowerCase().includes(searchTerm.toLowerCase()) ||
      log.email.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div className="flex flex-col h-screen">
      <DashboardHeader title="Audit Log" subtitle="Track all operations and access events" />

      <div className="flex-1 overflow-auto">
        <div className="p-6 space-y-4">
          {/* Search */}
          <div className="flex items-center gap-2">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Search audit logs..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-input border-border/50"
              />
            </div>
          </div>

          {/* Timeline */}
          <div className="space-y-3">
            {filteredLogs.map((log) => {
              const Icon = log.icon
              const severityColor = {
                info: "bg-primary/10 text-primary border-primary/20",
                warning: "bg-orange-500/10 text-orange-600 border-orange-500/20",
                error: "bg-destructive/10 text-destructive border-destructive/20",
              }[log.severity]

              return (
                <Card key={log.id} className="p-4 border-border/50 hover:bg-secondary/10 transition-colors">
                  <div className="flex gap-4">
                    {/* Icon */}
                    <div
                      className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${severityColor} border`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <h4 className="font-semibold text-foreground">{log.action}</h4>
                          <p className="text-sm text-muted-foreground mt-1">{log.details}</p>
                          <div className="flex gap-4 mt-2 text-xs text-muted-foreground">
                            <span>{log.user}</span>
                            <span className="text-muted-foreground/50">•</span>
                            <span className="font-mono">{log.email}</span>
                          </div>
                        </div>
                        <div className="text-xs text-muted-foreground whitespace-nowrap">{log.timestamp}</div>
                      </div>
                    </div>
                  </div>
                </Card>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
