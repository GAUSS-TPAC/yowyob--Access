"use client"

import { DashboardHeader } from "@/components/dashboard-header"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Plus, Edit2, Trash2, Check } from "lucide-react"
import Link from "next/link"
import { useParams } from "next/navigation"
import { useState } from "react"

const roles = [
  {
    id: 1,
    name: "Admin",
    description: "Full access to all features",
    permissions: ["create", "read", "update", "delete", "manage_users"],
    userCount: 2,
  },
  {
    id: 2,
    name: "Manager",
    description: "Can manage users and view reports",
    permissions: ["create", "read", "update", "manage_users"],
    userCount: 5,
  },
  {
    id: 3,
    name: "User",
    description: "Can view and edit assigned items",
    permissions: ["read", "update"],
    userCount: 17,
  },
]

export default function RolesPage() {
  const params = useParams()
  const tenantId = params.tenantId as string
  const [searchTerm, setSearchTerm] = useState("")

  const filteredRoles = roles.filter((role) => role.name.toLowerCase().includes(searchTerm.toLowerCase()))

  return (
    <div className="flex flex-col h-screen">
      <DashboardHeader
        title="Roles & Permissions"
        subtitle="Manage roles and access control"
        actions={
          <Link href={`/tenant/${tenantId}/roles/create`}>
            <Button className="bg-primary hover:bg-primary/90 gap-2">
              <Plus className="w-4 h-4" />
              Create Role
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
                placeholder="Search roles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-input border-border/50"
              />
            </div>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredRoles.map((role) => (
              <Card key={role.id} className="p-6 border-border/50">
                <div className="space-y-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-semibold text-lg text-foreground">{role.name}</h3>
                      <p className="text-sm text-muted-foreground">{role.description}</p>
                    </div>
                    <div className="text-xs font-medium bg-secondary/50 px-2 py-1 rounded">{role.userCount} users</div>
                  </div>

                  <div>
                    <p className="text-xs font-semibold text-muted-foreground mb-2">Permissions:</p>
                    <div className="flex flex-wrap gap-2">
                      {role.permissions.map((perm) => (
                        <span
                          key={perm}
                          className="flex items-center gap-1 text-xs px-2 py-1 rounded-full bg-primary/10 text-primary"
                        >
                          <Check className="w-3 h-3" />
                          {perm}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="flex-1 gap-2 bg-transparent">
                      <Edit2 className="w-4 h-4" />
                      Edit
                    </Button>
                    <Button variant="outline" size="sm" className="gap-2 bg-transparent">
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
