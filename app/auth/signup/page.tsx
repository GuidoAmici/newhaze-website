"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import NewHazeLogo from "@/components/new-haze-logo"
import { useAuth } from "@/contexts/AuthContext"

type Step = "form" | "otp" | "username"

const ROLE_OPTIONS = [
  { value: "consumer",    label: "Cultivador",   description: "Uso personal / hobby" },
  { value: "growshop",    label: "Growshop",     description: "Vendo insumos a cultivadores" },
  { value: "distribuidor", label: "Distribuidor", description: "Distribuyo productos New Haze" },
]

export default function SignupPage() {
  const router = useRouter()
  const { register, verifyOtp, resendOtp, updateUsername } = useAuth()

  const [step, setStep] = useState<Step>("form")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [role, setRole] = useState("consumer")
  const [otp, setOtp] = useState("")
  const [username, setUsername] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [resendCooldown, setResendCooldown] = useState(false)

  // Paso 1: registro → envía OTP
  const handleRegister = async () => {
    if (!email || !password) return
    if (password !== confirmPassword) {
      setError("Las contraseñas no coinciden")
      return
    }
    if (password.length < 6) {
      setError("La contraseña debe tener al menos 6 caracteres")
      return
    }
    setLoading(true)
    setError(null)
    try {
      await register(email, password, role)
      setStep("otp")
    } catch (e: unknown) {
      setError(e instanceof Error ? e.message : "Error al crear la cuenta")
    } finally {
      setLoading(false)
    }
  }

  // Paso 2: verificar OTP
  const handleVerifyOtp = async () => {
    if (!otp) return
    setLoading(true)
    setError(null)
    try {
      await verifyOtp(email, otp)
      setStep("username")
    } catch (e: unknown) {
      setError(e instanceof Error ? e.message : "Código inválido o expirado")
    } finally {
      setLoading(false)
    }
  }

  // Reenviar OTP con cooldown de 30s
  const handleResendOtp = async () => {
    if (resendCooldown) return
    setResendCooldown(true)
    try {
      await resendOtp(email)
    } catch {
      // silencioso
    }
    setTimeout(() => setResendCooldown(false), 30_000)
  }

  // Paso 3: username (opcional — puede saltar)
  const handleSetUsername = async () => {
    setLoading(true)
    setError(null)
    try {
      if (username.trim()) {
        await updateUsername(username.trim())
      }
      router.push("/")
    } catch (e: unknown) {
      setError(e instanceof Error ? e.message : "Error al guardar el nombre")
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

          {/* ── Paso 1: Datos de registro ── */}
          {step === "form" && (
            <>
              <h1 className="text-2xl font-bold text-foreground mb-2 text-center">Crear cuenta</h1>
              <p className="text-muted-foreground text-center mb-6 text-sm">
                Únete a la comunidad de New Haze
              </p>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                  <Input
                    type="email"
                    placeholder="tu@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Contraseña</label>
                  <Input
                    type="password"
                    placeholder="Mínimo 6 caracteres"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Confirmar contraseña
                  </label>
                  <Input
                    type="password"
                    placeholder="••••••••"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handleRegister()}
                    className="w-full"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-3">
                    ¿Cómo vas a usar New Haze?
                  </label>
                  <div className="space-y-2">
                    {ROLE_OPTIONS.map((opt) => (
                      <button
                        key={opt.value}
                        onClick={() => setRole(opt.value)}
                        className={`w-full text-left px-4 py-3 rounded-md border transition-colors ${
                          role === opt.value
                            ? "border-primary bg-primary/10 text-foreground"
                            : "border-border hover:border-primary/50 text-muted-foreground hover:text-foreground"
                        }`}
                      >
                        <span className="font-medium text-sm">{opt.label}</span>
                        <span className="text-xs block text-muted-foreground mt-0.5">
                          {opt.description}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                {error && <p className="text-sm text-destructive">{error}</p>}

                <Button
                  onClick={handleRegister}
                  disabled={loading || !email || !password || !confirmPassword}
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium rounded-full py-2 transition-colors"
                >
                  {loading ? "Creando cuenta..." : "Crear cuenta"}
                </Button>
              </div>

              <div className="mt-6 text-center text-sm text-muted-foreground">
                ¿Ya tienes cuenta?{" "}
                <Link
                  href="/auth/login"
                  className="text-primary hover:text-primary/90 font-medium transition-colors"
                >
                  Inicia sesión
                </Link>
              </div>
            </>
          )}

          {/* ── Paso 2: Verificar OTP ── */}
          {step === "otp" && (
            <>
              <h1 className="text-2xl font-bold text-foreground mb-2 text-center">
                Verificar email
              </h1>
              <p className="text-muted-foreground text-center mb-1 text-sm">
                Enviamos un código a
              </p>
              <p className="text-foreground text-center font-medium mb-6 text-sm">{email}</p>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Código de verificación
                  </label>
                  <Input
                    type="text"
                    inputMode="numeric"
                    placeholder="123456"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value.replace(/\D/g, "").slice(0, 6))}
                    onKeyDown={(e) => e.key === "Enter" && handleVerifyOtp()}
                    className="w-full text-center text-lg tracking-widest"
                    maxLength={6}
                  />
                </div>

                {error && <p className="text-sm text-destructive">{error}</p>}

                <Button
                  onClick={handleVerifyOtp}
                  disabled={loading || otp.length < 6}
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium rounded-full py-2 transition-colors"
                >
                  {loading ? "Verificando..." : "Verificar"}
                </Button>

                <div className="text-center">
                  <button
                    onClick={handleResendOtp}
                    disabled={resendCooldown}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors disabled:opacity-50"
                  >
                    {resendCooldown ? "Código enviado — esperá 30s" : "Reenviar código"}
                  </button>
                </div>
              </div>
            </>
          )}

          {/* ── Paso 3: Username ── */}
          {step === "username" && (
            <>
              <h1 className="text-2xl font-bold text-foreground mb-2 text-center">
                ¡Cuenta creada! 🌱
              </h1>
              <p className="text-muted-foreground text-center mb-6 text-sm">
                ¿Cómo querés que te llamemos? (podés cambiarlo después)
              </p>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Nombre de usuario
                  </label>
                  <Input
                    type="text"
                    placeholder="Tu alias"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handleSetUsername()}
                    className="w-full"
                    maxLength={32}
                  />
                </div>

                {error && <p className="text-sm text-destructive">{error}</p>}

                <Button
                  onClick={handleSetUsername}
                  disabled={loading}
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium rounded-full py-2 transition-colors"
                >
                  {loading ? "Guardando..." : username.trim() ? "Continuar" : "Saltar por ahora"}
                </Button>
              </div>
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
