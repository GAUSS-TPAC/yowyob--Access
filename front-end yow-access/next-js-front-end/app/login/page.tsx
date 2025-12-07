"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { AlertCircle, LogIn } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { translations } from "@/lib/i18n"
import { LanguageSwitcher } from "@/components/language-switcher"

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const { language } = useLanguage()
  const t = translations[language]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setIsLoading(true)

    if (email && password) {
      setTimeout(() => {
        if (email === "admin@platform.com") {
          window.location.href = "/super-admin/dashboard"
        } else {
          window.location.href = "/tenant/tenant-001/dashboard"
        }
        setIsLoading(false)
      }, 1000)
    } else {
      setError(language === "en" ? "Please enter email and password" : "Veuillez entrer l'email et le mot de passe")
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary flex flex-col items-center justify-center p-4 relative">
      <div className="absolute top-6 right-6">
        <LanguageSwitcher />
      </div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="relative w-full max-w-md">
        <Card className="border-2 border-border/50 shadow-2xl">
          <div className="p-8 space-y-6">
            {/* Header */}
            <div className="space-y-2 text-center">
              <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/20 mx-auto mb-4">
                <LogIn className="w-6 h-6 text-primary" />
              </div>
              <h1 className="text-2xl font-bold text-balance">AdminHub</h1>
              <p className="text-sm text-muted-foreground">{t.auth.subtitle}</p>
            </div>

            {/* Error Alert */}
            {error && (
              <div className="flex gap-3 p-3 bg-destructive/10 border border-destructive/30 rounded-lg">
                <AlertCircle className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                <p className="text-sm text-destructive">{error}</p>
              </div>
            )}

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">{t.auth.email}</label>
                <Input
                  type="email"
                  placeholder="admin@platform.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={isLoading}
                  className="bg-input border-border/50"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">{t.auth.password}</label>
                <Input
                  type="password"
                  placeholder={language === "en" ? "Enter your password" : "Entrez votre mot de passe"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  disabled={isLoading}
                  className="bg-input border-border/50"
                />
              </div>

              <Button
                type="submit"
                disabled={isLoading}
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                {isLoading ? (language === "en" ? "Authenticating..." : "Authentification...") : t.auth.login}
              </Button>
            </form>

            {/* Demo Credentials */}
            <div className="p-3 bg-secondary/50 border border-border/30 rounded-lg space-y-1 text-xs">
              <p className="font-semibold text-foreground">{t.auth.demo}:</p>
              <p className="text-muted-foreground">
                <span className="font-mono text-primary">admin@platform.com</span> (Super Admin)
              </p>
              <p className="text-muted-foreground">
                <span className="font-mono text-accent">user@company.com</span> (Tenant Admin)
              </p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}
