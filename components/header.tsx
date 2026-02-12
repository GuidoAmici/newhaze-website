"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { Moon, Sun, Settings, User, GraduationCap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "next-themes"
import NewHazeLogo from "@/components/new-haze-logo"
import { SignInButton, UserButton } from "@clerk/nextjs"
import { useUser } from "@clerk/nextjs"

export default function Header() {
  const [isSettingsOpen, setIsSettingsOpen] = useState(false)
  const [isSettingsClosing, setIsSettingsClosing] = useState(false)
  const { theme, setTheme } = useTheme()
  const { isSignedIn } = useUser()
  const settingsRef = useRef<HTMLDivElement>(null)

  const closeSettings = () => {
    setIsSettingsClosing(true)
    setTimeout(() => {
      setIsSettingsOpen(false)
      setIsSettingsClosing(false)
    }, 200)
  }

  const toggleSettings = () => {
    if (isSettingsOpen) {
      closeSettings()
    } else {
      setIsSettingsOpen(true)
    }
  }

  // Close menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (settingsRef.current && !settingsRef.current.contains(event.target as Node)) {
        closeSettings()
      }
    }

    if (isSettingsOpen) {
      document.addEventListener("mousedown", handleClickOutside)
      return () => document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [isSettingsOpen])

  const handleThemeToggle = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/5 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto px-3 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
        <div className="text-foreground shrink-0">
          <NewHazeLogo className="h-[50px] sm:h-[70px]" href="/" />
        </div>

        <nav className="flex items-center gap-2 sm:gap-4">
          <div className="flex items-center gap-1.5 sm:gap-3">
          <Link href="/learn">
            <button
              variant="outline"
              className="border border-primary hover:bg-primary hover:text-primary-foreground px-3 sm:px-6 py-1.5 sm:py-2 rounded-full transition-all duration-300 text-foreground bg-muted text-xs sm:text-sm flex items-center gap-1.5 sm:gap-2"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              <GraduationCap className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
              <span className="hidden xs:inline">Aprender</span>
            </button>
          </Link>
          </div>

          <Link href="/blog">
            <button
              variant="outline"
              className="border border-primary hover:bg-primary hover:text-primary-foreground px-3 sm:px-6 py-1.5 sm:py-2 rounded-full transition-all duration-300 text-foreground bg-muted text-xs sm:text-sm"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              Blog & Guías
            </button>
          </Link>

          <div className="flex items-center gap-1.5 sm:gap-3">
            {/* Clerk Authentication Buttons */}
            {!isSignedIn ? (
              <SignInButton mode="modal">
                <button
                  className="h-8 w-8 sm:h-10 sm:w-10 rounded-full text-primary-foreground flex items-center justify-center hover:opacity-90 transition-opacity duration-300 bg-muted"
                  aria-label="Iniciar sesión"
                >
                  <User className="h-4 w-4 sm:h-5 sm:w-5" />
                </button>
              </SignInButton>
            ) : (
              <UserButton />
            )}

            {/* Settings Menu */}
            <div className="relative" ref={settingsRef}>
              <button
                onClick={toggleSettings}
                className="h-8 w-8 sm:h-10 sm:w-10 rounded-full text-primary-foreground flex items-center justify-center hover:opacity-90 transition-opacity duration-300 bg-muted"
                aria-label="Configuración"
              >
                <Settings className="h-4 w-4 sm:h-5 sm:w-5" />
              </button>

              {isSettingsOpen && (
                <div className={`absolute right-0 mt-2 w-52 sm:w-56 bg-background border border-border rounded-lg shadow-lg py-2 z-50 transition-all duration-200 ${
                  isSettingsClosing
                    ? "opacity-0 pointer-events-none"
                    : "opacity-100"
                }`}>
                  <div className="px-4 py-2 text-sm font-semibold text-foreground border-b border-border">
                    Configuración
                  </div>

                  {/* Theme Slider */}
                  <div className="px-4 py-3 flex items-center justify-between gap-3">
                    <span className="text-sm text-foreground">Tema Oscuro</span>

                    <div className="flex items-center gap-2">
                      {/* Sun Icon */}
                      <Sun className={`h-4 w-4 transition-colors duration-300 ${
                        theme === "dark" ? "text-muted-foreground" : "text-accent"
                      }`} />

                      {/* Slider Toggle */}
                      <button
                        onClick={handleThemeToggle}
                        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-300 ${
                          theme === "dark" ? "bg-accent" : "bg-muted"
                        }`}
                        aria-label="Cambiar tema"
                      >
                        <span
                          className={`inline-block h-4 w-4 transform rounded-full bg-white shadow-lg transition-transform duration-300 ${
                            theme === "dark" ? "translate-x-6" : "translate-x-1"
                          }`}
                        />
                      </button>

                      {/* Moon Icon */}
                      <Moon className={`h-4 w-4 transition-colors duration-300 ${
                        theme === "dark" ? "text-accent" : "text-muted-foreground"
                      }`} />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </nav>
      </div>
    </header>
  )
}
