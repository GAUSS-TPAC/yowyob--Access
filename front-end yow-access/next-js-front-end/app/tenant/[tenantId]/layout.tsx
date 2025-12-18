"use client"

import type React from "react"

import { Sidebar } from "@/components/sidebar"

export default function TenantLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { tenantId: string }
}) {
  return (
    <div className="flex h-screen bg-background">
      <Sidebar isSuperAdmin={false} tenantId={params.tenantId} />
      <main className="flex-1 overflow-auto">{children}</main>
    </div>
  )
}
