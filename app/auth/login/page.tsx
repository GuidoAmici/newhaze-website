"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import NewHazeLogo from "@/components/new-haze-logo"
import { useAuth } from "@/contexts/AuthContext"

type View = "login" | "forgot" | "forgot-sent"

export default function LoginPage() {
  const router = useRouter()
  const { login, forgotPassword } = useAuth()

  const [view, setView] = useState<View>("login")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleLogin = async () => {
    if (!email || !password) return
    setLoading(true)
    setError(null)
    try {
      await login(email, password)
      router.push("/")
    } catch (e: unknown) {
      setError(e instanceof Error ? e.message : "Error al ingresar")
    } finally {
      setLoading(false)
    }
  }

  const handleForgot = async () => {
    if (!email) return
    setLoading(true)
    setError(null)
    try {
      await forgotPassword(email)
      setView("forgot-sent")
    } catch (e: unknown) {
      setError(e instanceof Error ? e.message : "Error al enviar el email")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center px-4 pt-20">
      <div className="w-full max-w-md">
        <div className="mb-8 flex justify-center">
          <NewHazeLogo className="h-16" href="/" />
        </div>

        <div className="bg-card rounded-lg border border-border p-8 shadow-lg">

          {/* ── Login ── */}
          {view === "login" && (
            <>
              <h1 className="text-2xl font-bold text-foreground mb-2 text-center">Ingresar</h1>
              <p className="text-muted-foreground text-center mb-6 text-sm">
                Accede a tu cuenta de New Haze
              </p>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                  <Input
                    type="email"
                    placeholder="tu@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handleLogin()}
                    className="w-full"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Contraseña
                  </label>
                  <Input
                    type="password"
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handleLogin()}
                    className="w-full"
                  />
                </div>

                {error && <p className="text-sm text-destructive">{error}</p>}

                <Button
                  onClick={handleLogin}
                  disabled={loading || !email || !password}
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium rounded-full py-2 transition-colors"
                >
                  {loading ? "Ingresando..." : "Ingresar"}
                </Button>
              </div>

              <div className="mt-4 text-center">
                <button
                  onClick={() => { setView("forgot"); setError(null) }}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  ¿Olvidaste tu contraseña?
                </button>
              </div>

              <div className="mt-6 text-center text-sm text-muted-foreground">
                ¿No tienes cuenta?{" "}
                <Link
                  href="/auth/signup"
                  className="text-primary hover:text-primary/90 font-medium transition-colors"
                >
                  Regístrate aquí
                </Link>
              </div>
            </>
          )}

          {/* ── Forgot password ── */}
          {view === "forgot" && (
            <>
              <h1 className="text-2xl font-bold text-foreground mb-2 text-center">
                Recuperar contraseña
              </h1>
              <p className="text-muted-foreground text-center mb-6 text-sm">
                Te enviamos un link para resetear tu contraseña
              </p>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                  <Input
                    type="email"
                    placeholder="tu@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handleForgot()}
                    className="w-full"
                  />
                </div>

                {error && <p className="text-sm text-destructive">{error}</p>}

                <Button
                  onClick={handleForgot}
                  disabled={loading || !email}
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium rounded-full py-2 transition-colors"
                >
                  {loading ? "Enviando..." : "Enviar link"}
                </Button>
              </div>

              <div className="mt-4 text-center">
                <button
                  onClick={() => { setView("login"); setError(null) }}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Volver al login
                </button>
              </div>
            </>
          )}

          {/* ── Forgot sent ── */}
          {view === "forgot-sent" && (
            <>
              <h1 className="text-2xl font-bold text-foreground mb-2 text-center">
                Email enviado ✓
              </h1>
              <p className="text-muted-foreground text-center mb-6 text-sm">
                Revisá tu casilla de correo. El link expira en 1 hora.
              </p>
              <Button
                onClick={() => setView("login")}
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium rounded-full py-2 transition-colors"
              >
                Volver al login
              </Button>
            </>
          )}

        </div>

        <div className="mt-6 text-center">
          <Link href="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Continuar como invitado (づ￣ 3￣)づ
          </Link>
        </div>
      </div>
    </div>
  )
}
