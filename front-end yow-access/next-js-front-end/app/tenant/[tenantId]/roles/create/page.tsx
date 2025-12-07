"use client"

import type React from "react"

import { DashboardHeader } from "@/components/dashboard-header"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowLeft, Check } from "lucide-react"
import Link from "next/link"
import { useParams } from "next/navigation"
import { useState } from "react"

const availablePermissions = [
  { id: "create", label: "Create Items" },
  { id: "read", label: "View Items" },
  { id: "update", label: "Edit Items" },
  { id: "delete", label: "Delete Items" },
  { id: "manage_users", label: "Manage Users" },
  { id: "manage_roles", label: "Manage Roles" },
  { id: "view_audit", label: "View Audit Logs" },
  { id: "manage_settings", label: "Manage Settings" },
]

export default function CreateRolePage() {
  const params = useParams()
  const tenantId = params.tenantId as string
  const [roleName, setRoleName] = useState("")
  const [description, setDescription] = useState("")
  const [selectedPermissions, setSelectedPermissions] = useState<string[]>([])
  const [isSubmitting, setIsSubmitting] = useState(false)

  const togglePermission = (permId: string) => {
    setSelectedPermissions((prev) => (prev.includes(permId) ? prev.filter((p) => p !== permId) : [...prev, permId]))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setTimeout(() => {
      window.location.href = `/tenant/${tenantId}/roles`
    }, 1000)
  }

  return (
    <div className="flex flex-col h-screen">
      <DashboardHeader
        title="Create Role"
        subtitle="Define a new role with specific permissions"
        actions={
          <Link href={`/tenant/${tenantId}/roles`}>
            <Button variant="outline" className="gap-2 bg-transparent">
              <ArrowLeft className="w-4 h-4" />
              Back
            </Button>
          </Link>
        }
      />

      <div className="flex-1 overflow-auto">
        <div className="p-6">
          <div className="max-w-2xl">
            <Card className="p-8 border-border/50">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Role Name</label>
                  <Input
                    type="text"
                    placeholder="e.g., Content Manager"
                    value={roleName}
                    onChange={(e) => setRoleName(e.target.value)}
                    required
                    className="bg-input border-border/50"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Description</label>
                  <Input
                    type="text"
                    placeholder="Brief description of this role's responsibilities"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="bg-input border-border/50"
                  />
                </div>

                <div className="border-t border-border/30 pt-6">
                  <h3 className="font-semibold mb-4 text-foreground">Permissions</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {availablePermissions.map((perm) => (
                      <button
                        key={perm.id}
                        onClick={() => togglePermission(perm.id)}
                        className={`p-3 rounded-lg border-2 transition-colors text-left ${
                          selectedPermissions.includes(perm.id)
                            ? "border-primary bg-primary/10"
                            : "border-border/50 bg-secondary/20 hover:border-border"
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          <div
                            className={`w-5 h-5 rounded border-2 flex items-center justify-center ${
                              selectedPermissions.includes(perm.id)
                                ? "bg-primary border-primary"
                                : "border-muted-foreground"
                            }`}
                          >
                            {selectedPermissions.includes(perm.id) && (
                              <Check className="w-3 h-3 text-primary-foreground" />
                            )}
                          </div>
                          <span className="text-sm font-medium">{perm.label}</span>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3">
                  <Button
                    type="submit"
                    disabled={isSubmitting || !roleName || selectedPermissions.length === 0}
                    className="bg-primary hover:bg-primary/90 text-primary-foreground"
                  >
                    {isSubmitting ? "Creating..." : "Create Role"}
                  </Button>
                  <Link href={`/tenant/${tenantId}/roles`}>
                    <Button type="button" variant="outline">
                      Cancel
                    </Button>
                  </Link>
                </div>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
