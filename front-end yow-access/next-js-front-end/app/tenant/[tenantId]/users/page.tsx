"use client"

import { DashboardHeader } from "@/components/dashboard-header"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Plus, Edit2, Trash2 } from "lucide-react"
import Link from "next/link"
import { useParams } from "next/navigation"
import { useState } from "react"

const users = [
  { id: 1, name: "John Doe", email: "john@company.com", role: "Admin", status: "active", joinedAt: "2024-01-10" },
  { id: 2, name: "Jane Smith", email: "jane@company.com", role: "Manager", status: "active", joinedAt: "2024-01-15" },
  { id: 3, name: "Mike Johnson", email: "mike@company.com", role: "User", status: "active", joinedAt: "2024-02-01" },
  {
    id: 4,
    name: "Emily Brown",
    email: "emily@company.com",
    role: "Manager",
    status: "inactive",
    joinedAt: "2024-01-20",
  },
]

export default function UsersPage() {
  const params = useParams()
  const tenantId = params.tenantId as string
  const [searchTerm, setSearchTerm] = useState("")

  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div className="flex flex-col h-screen">
      <DashboardHeader
        title="Users"
        subtitle="Manage team members and their access"
        actions={
          <Link href={`/tenant/${tenantId}/users/create`}>
            <Button className="bg-primary hover:bg-primary/90 gap-2">
              <Plus className="w-4 h-4" />
              Add User
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
                placeholder="Search users..."
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
                    <th className="px-6 py-4 text-left font-semibold text-foreground">Name</th>
                    <th className="px-6 py-4 text-left font-semibold text-foreground">Email</th>
                    <th className="px-6 py-4 text-left font-semibold text-foreground">Role</th>
                    <th className="px-6 py-4 text-left font-semibold text-foreground">Status</th>
                    <th className="px-6 py-4 text-left font-semibold text-foreground">Joined</th>
                    <th className="px-6 py-4 text-left font-semibold text-foreground">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredUsers.map((user) => (
                    <tr key={user.id} className="border-b border-border/30 hover:bg-secondary/10 transition-colors">
                      <td className="px-6 py-4 font-medium text-foreground">{user.name}</td>
                      <td className="px-6 py-4 text-muted-foreground">{user.email}</td>
                      <td className="px-6 py-4 text-foreground">{user.role}</td>
                      <td className="px-6 py-4">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-medium ${
                            user.status === "active"
                              ? "bg-primary/20 text-primary"
                              : "bg-muted/50 text-muted-foreground"
                          }`}
                        >
                          {user.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-xs text-muted-foreground">{user.joinedAt}</td>
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
