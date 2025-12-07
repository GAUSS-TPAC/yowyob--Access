"use client"

import type React from "react"

import { Sidebar } from "@/components/sidebar"

export default function SuperAdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex h-screen bg-background">
      <Sidebar isSuperAdmin={true} />
      <main className="flex-1 overflow-auto">{children}</main>
    </div>
  )
}
