"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import NewHazeLogo from "@/components/new-haze-logo"

export default function LoginPage() {
  const [isLoading, setIsLoading] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    // TODO: Implement login logic
    setTimeout(() => setIsLoading(false), 1000)
  }

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center px-4 pt-20">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="mb-8 flex justify-center">
          <NewHazeLogo className="h-16" href="/" />
        </div>

        {/* Login Form */}
        <div className="bg-card rounded-lg border border-border p-8 shadow-lg">
          <h1
            className="text-2xl font-bold text-foreground mb-2 text-center"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            Ingresar
          </h1>
          <p className="text-muted-foreground text-center mb-6 text-sm">Accede a tu cuenta de New Haze</p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                Email
              </label>
              <Input
                id="email"
                type="email"
                placeholder="tu@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-foreground mb-2">
                Contraseña
              </label>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full"
              />
            </div>

            <Button
              type="submit"
              disabled={isLoading}
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium rounded-full py-2 transition-colors"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              {isLoading ? "Ingresando..." : "Ingresar"}
            </Button>
          </form>

          <div className="mt-6 text-center text-sm text-muted-foreground">
            ¿No tienes cuenta?{" "}
            <Link href="/auth/signup" className="text-primary hover:text-primary/90 font-medium transition-colors">
              Regístrate aquí
            </Link>
          </div>
        </div>

        {/* Back to home */}
        <div className="mt-6 text-center">
          <Link href="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            ← Volver al inicio
          </Link>
        </div>
      </div>
    </div>
  )
}
