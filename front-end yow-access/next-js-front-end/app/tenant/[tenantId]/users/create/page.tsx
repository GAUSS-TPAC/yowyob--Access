"use client"

import type React from "react"

import { DashboardHeader } from "@/components/dashboard-header"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { useParams } from "next/navigation"
import { useState } from "react"

export default function CreateUserPage() {
  const params = useParams()
  const tenantId = params.tenantId as string
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "user",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setTimeout(() => {
      window.location.href = `/tenant/${tenantId}/users`
    }, 1000)
  }

  return (
    <div className="flex flex-col h-screen">
      <DashboardHeader
        title="Add User"
        subtitle="Invite a new team member"
        actions={
          <Link href={`/tenant/${tenantId}/users`}>
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
                  <label className="block text-sm font-medium mb-2">Full Name</label>
                  <Input
                    type="text"
                    name="name"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-input border-border/50"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Email Address</label>
                  <Input
                    type="email"
                    name="email"
                    placeholder="john@company.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-input border-border/50"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Role</label>
                  <select
                    name="role"
                    value={formData.role}
                    onChange={handleChange}
                    className="w-full px-3 py-2 rounded-lg border border-border/50 bg-input text-foreground"
                  >
                    <option value="user">User</option>
                    <option value="manager">Manager</option>
                    <option value="admin">Admin</option>
                  </select>
                </div>

                <div className="flex gap-3">
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-primary hover:bg-primary/90 text-primary-foreground"
                  >
                    {isSubmitting ? "Adding User..." : "Add User"}
                  </Button>
                  <Link href={`/tenant/${tenantId}/users`}>
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
