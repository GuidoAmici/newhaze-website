import { apiFetch, tokens } from "./api"

export interface AuthUser {
  id: string
  email: string
  username: string | null
  avatarUrl: string | null
  xp: number
  level: number
  roles: string[]
  earlyAccess: boolean
}

// Registro: crea cuenta y dispara OTP — no devuelve tokens
export async function register(email: string, password: string, role?: string): Promise<void> {
  await apiFetch("/api/auth/register", {
    method: "POST",
    body: JSON.stringify({ email, password, role }),
  })
}

// Verificar OTP: confirma email y abre sesión
export async function verifyOtp(email: string, token: string): Promise<AuthUser> {
  const data = await apiFetch<{ accessToken: string; refreshToken: string; user: AuthUser }>(
    "/api/auth/verify-otp",
    {
      method: "POST",
      body: JSON.stringify({ email, token }),
    }
  )
  tokens.save(data.accessToken, data.refreshToken)
  return data.user
}

// Reenviar OTP
export async function resendOtp(email: string): Promise<void> {
  await apiFetch("/api/auth/resend-otp", {
    method: "POST",
    body: JSON.stringify({ email }),
  })
}

// Login con email + password
export async function login(email: string, password: string): Promise<AuthUser> {
  const data = await apiFetch<{ accessToken: string; refreshToken: string; user: AuthUser }>(
    "/api/auth/login",
    {
      method: "POST",
      body: JSON.stringify({ email, password }),
    }
  )
  tokens.save(data.accessToken, data.refreshToken)
  return data.user
}

// Logout
export async function logout(): Promise<void> {
  try {
    await apiFetch("/api/auth/logout", { method: "POST" })
  } finally {
    tokens.clear()
  }
}

// Solicitar reset de contraseña
export async function forgotPassword(email: string): Promise<void> {
  await apiFetch("/api/auth/forgot-password", {
    method: "POST",
    body: JSON.stringify({ email }),
  })
}

// Obtener perfil del usuario autenticado
export async function getMe(): Promise<AuthUser> {
  return apiFetch<AuthUser>("/api/users/me")
}

// Actualizar username
export async function updateUsername(username: string): Promise<void> {
  await apiFetch("/api/users/me", {
    method: "PUT",
    body: JSON.stringify({ username }),
  })
}

// Google OAuth: envía el id_token de Google al backend
export async function loginWithGoogle(googleToken: string): Promise<AuthUser> {
  const data = await apiFetch<{ accessToken: string; refreshToken: string; user: AuthUser }>(
    "/api/auth/google",
    {
      method: "POST",
      body: JSON.stringify({ googleToken }),
    }
  )
  tokens.save(data.accessToken, data.refreshToken)
  return data.user
}
