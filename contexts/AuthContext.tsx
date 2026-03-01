"use client"

import { createContext, useContext, useEffect, useState, useCallback } from "react"
import { tokens } from "@/lib/api"
import {
  type AuthUser,
  login as apiLogin,
  loginWithGoogle as apiLoginWithGoogle,
  logout as apiLogout,
  register as apiRegister,
  verifyOtp as apiVerifyOtp,
  resendOtp as apiResendOtp,
  forgotPassword as apiForgotPassword,
  updateUsername as apiUpdateUsername,
  getMe,
} from "@/lib/auth"

interface AuthContextValue {
  user: AuthUser | null
  loading: boolean
  // Auth operations
  login: (email: string, password: string) => Promise<AuthUser>
  loginWithGoogle: (googleToken: string) => Promise<AuthUser>
  logout: () => Promise<void>
  register: (email: string, password: string, role?: string) => Promise<void>
  verifyOtp: (email: string, token: string) => Promise<AuthUser>
  resendOtp: (email: string) => Promise<void>
  forgotPassword: (email: string) => Promise<void>
  updateUsername: (username: string) => Promise<void>
  hasRole: (role: string) => boolean
  // Utils
  setUser: (user: AuthUser | null) => void
}

const AuthContext = createContext<AuthContextValue | null>(null)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<AuthUser | null>(null)
  const [loading, setLoading] = useState(true)

  // Restaurar sesión desde localStorage al montar
  useEffect(() => {
    async function restoreSession() {
      if (!tokens.access) {
        setLoading(false)
        return
      }
      try {
        const me = await getMe()
        setUser(me)
      } catch {
        // Token inválido o expirado y refresh también falló
        tokens.clear()
      } finally {
        setLoading(false)
      }
    }
    restoreSession()
  }, [])

  const login = useCallback(async (email: string, password: string) => {
    const u = await apiLogin(email, password)
    setUser(u)
    return u
  }, [])

  const loginWithGoogle = useCallback(async (googleToken: string) => {
    const u = await apiLoginWithGoogle(googleToken)
    setUser(u)
    return u
  }, [])

  const hasRole = useCallback((role: string) => {
    return user?.roles?.includes(role) ?? false
  }, [user])

  const logout = useCallback(async () => {
    await apiLogout()
    setUser(null)
  }, [])

  const register = useCallback(
    async (email: string, password: string, role?: string) => {
      await apiRegister(email, password, role)
    },
    []
  )

  const verifyOtp = useCallback(async (email: string, token: string) => {
    const u = await apiVerifyOtp(email, token)
    setUser(u)
    return u
  }, [])

  const resendOtp = useCallback(async (email: string) => {
    await apiResendOtp(email)
  }, [])

  const forgotPassword = useCallback(async (email: string) => {
    await apiForgotPassword(email)
  }, [])

  const updateUsername = useCallback(async (username: string) => {
    await apiUpdateUsername(username)
    setUser((prev) => (prev ? { ...prev, username } : prev))
  }, [])

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        login,
        loginWithGoogle,
        logout,
        register,
        verifyOtp,
        resendOtp,
        forgotPassword,
        updateUsername,
        hasRole,
        setUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth(): AuthContextValue {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error("useAuth must be used within AuthProvider")
  return ctx
}
