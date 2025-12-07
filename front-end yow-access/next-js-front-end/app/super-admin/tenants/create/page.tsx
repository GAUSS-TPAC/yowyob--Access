"use client"

import type React from "react"

import { DashboardHeader } from "@/components/dashboard-header"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function CreateTenantPage() {
  const [formData, setFormData] = useState({
    tenantName: "",
    adminName: "",
    adminEmail: "",
    adminPassword: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate API call
    setTimeout(() => {
      window.location.href = "/super-admin/tenants"
    }, 1000)
  }

  return (
    <div className="flex flex-col h-screen">
      <DashboardHeader
        title="Create Tenant"
        subtitle="Set up a new organization"
        actions={
          <Link href="/super-admin/tenants">
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
                  <label className="block text-sm font-medium mb-2">Tenant Name</label>
                  <Input
                    type="text"
                    name="tenantName"
                    placeholder="Enter tenant name (e.g., Acme Corporation)"
                    value={formData.tenantName}
                    onChange={handleChange}
                    required
                    className="bg-input border-border/50"
                  />
                </div>

                <div className="border-t border-border/30 pt-6">
                  <h3 className="font-semibold mb-4 text-foreground">Initial Admin Account</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Admin Name</label>
                      <Input
                        type="text"
                        name="adminName"
                        placeholder="Full name"
                        value={formData.adminName}
                        onChange={handleChange}
                        required
                        className="bg-input border-border/50"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Admin Email</label>
                      <Input
                        type="email"
                        name="adminEmail"
                        placeholder="admin@company.com"
                        value={formData.adminEmail}
                        onChange={handleChange}
                        required
                        className="bg-input border-border/50"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Initial Password</label>
                      <Input
                        type="password"
                        name="adminPassword"
                        placeholder="Strong password"
                        value={formData.adminPassword}
                        onChange={handleChange}
                        required
                        className="bg-input border-border/50"
                      />
                    </div>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-primary hover:bg-primary/90 text-primary-foreground"
                  >
                    {isSubmitting ? "Creating..." : "Create Tenant"}
                  </Button>
                  <Link href="/super-admin/tenants">
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
