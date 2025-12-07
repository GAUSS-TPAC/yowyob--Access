"use client"

import { DashboardHeader } from "@/components/dashboard-header"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Plus, Edit2, Trash2 } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

const tenants = [
  {
    id: "tenant-001",
    name: "TechCorp Inc.",
    admin: "John Doe",
    email: "john@techcorp.com",
    users: 24,
    status: "active",
    createdAt: "2024-01-15",
  },
  {
    id: "tenant-002",
    name: "Innovation Labs",
    admin: "Sarah Smith",
    email: "sarah@innovationlabs.com",
    users: 18,
    status: "active",
    createdAt: "2024-02-10",
  },
  {
    id: "tenant-003",
    name: "Digital Solutions",
    admin: "Mike Johnson",
    email: "mike@digital.com",
    users: 32,
    status: "active",
    createdAt: "2024-01-20",
  },
  {
    id: "tenant-004",
    name: "Global Enterprises",
    admin: "Emily Brown",
    email: "emily@global.com",
    users: 56,
    status: "active",
    createdAt: "2023-12-01",
  },
]

export default function TenantsPage() {
  const [searchTerm, setSearchTerm] = useState("")

  const filteredTenants = tenants.filter(
    (tenant) =>
      tenant.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tenant.admin.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div className="flex flex-col h-screen">
      <DashboardHeader
        title="Tenants"
        subtitle="Manage all organizations on the platform"
        actions={
          <Link href="/super-admin/tenants/create">
            <Button className="bg-primary hover:bg-primary/90 gap-2">
              <Plus className="w-4 h-4" />
              Create Tenant
            </Button>
          </Link>
        }
      />

      <div className="flex-1 overflow-auto">
        <div className="p-6 space-y-4">
          {/* Search */}
          <div className="flex items-center gap-2">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Search tenants..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-input border-border/50"
              />
            </div>
          </div>

          {/* Table */}
          <Card className="border-border/50 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border/50 bg-secondary/20">
                    <th className="px-6 py-4 text-left font-semibold text-foreground">Tenant Name</th>
                    <th className="px-6 py-4 text-left font-semibold text-foreground">Admin</th>
                    <th className="px-6 py-4 text-left font-semibold text-foreground">Users</th>
                    <th className="px-6 py-4 text-left font-semibold text-foreground">Status</th>
                    <th className="px-6 py-4 text-left font-semibold text-foreground">Created</th>
                    <th className="px-6 py-4 text-left font-semibold text-foreground">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredTenants.map((tenant) => (
                    <tr key={tenant.id} className="border-b border-border/30 hover:bg-secondary/10 transition-colors">
                      <td className="px-6 py-4">
                        <div>
                          <p className="font-medium text-foreground">{tenant.name}</p>
                          <p className="text-xs text-muted-foreground">{tenant.id}</p>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div>
                          <p className="font-medium text-foreground">{tenant.admin}</p>
                          <p className="text-xs text-muted-foreground">{tenant.email}</p>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-foreground">{tenant.users}</td>
                      <td className="px-6 py-4">
                        <span className="px-3 py-1 rounded-full text-xs font-medium bg-primary/20 text-primary">
                          {tenant.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-muted-foreground text-xs">{tenant.createdAt}</td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <Button variant="ghost" size="sm">
                            <Edit2 className="w-4 h-4" />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <Trash2 className="w-4 h-4 text-destructive" />
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}
