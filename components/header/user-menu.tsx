"use client"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import { GraduationCap, LogOut, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useAuth } from "@/contexts/AuthContext"

export function UserMenu() {
  const { user, logout } = useAuth()
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  // Cerrar al hacer click fuera
  useEffect(() => {
    const handleOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener("mousedown", handleOutside)
    return () => document.removeEventListener("mousedown", handleOutside)
  }, [])

  if (!user) {
    return (
      <Link href="/auth/login">
        <Button
          variant="subtle"
          className="h-8 w-8 sm:h-10 sm:w-10 text-xs sm:text-sm flex items-center"
          aria-label="Ingresar"
        >
          <GraduationCap className="h-4 w-4 sm:h-5 sm:w-5" />
          <span className="hidden xs:inline">Ingresar</span>
        </Button>
      </Link>
    )
  }

  return (
    <div ref={ref} className="relative">
      <Button
        variant="subtle"
        className="h-8 w-8 sm:h-10 sm:w-10 text-xs sm:text-sm flex items-center gap-1"
        aria-label="Menú de usuario"
        onClick={() => setOpen((v) => !v)}
      >
        <User className="h-4 w-4 sm:h-5 sm:w-5" />
        <span className="hidden xs:inline max-w-[80px] truncate">
          {user.username ?? user.email.split("@")[0]}
        </span>
      </Button>

      {open && (
        <div className="absolute right-0 mt-2 w-48 z-50 bg-card border border-border rounded-md shadow-lg overflow-hidden">
          <div className="px-3 py-2 border-b border-border">
            <p className="text-xs text-muted-foreground truncate">{user.email}</p>
          </div>
          <Link
            href="/perfil"
            onClick={() => setOpen(false)}
            className="flex items-center gap-2 px-3 py-2 text-sm hover:bg-accent transition-colors"
          >
            <User className="h-4 w-4" />
            Mi perfil
          </Link>
          <div className="border-t border-border" />
          <button
            onClick={() => { setOpen(false); logout() }}
            className="flex items-center gap-2 w-full px-3 py-2 text-sm text-destructive hover:bg-destructive/10 transition-colors"
          >
            <LogOut className="h-4 w-4" />
            Cerrar sesión
          </button>
        </div>
      )}
    </div>
  )
}
