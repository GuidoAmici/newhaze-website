"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { Moon, Sun, Settings } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "next-themes"
import NewHazeLogo from "@/components/new-haze-logo"
import { SignInButton, SignUpButton, UserButton } from "@clerk/nextjs"
import { useUser } from "@clerk/nextjs"

export default function Header() {
  const [isSettingsOpen, setIsSettingsOpen] = useState(false)
  const { theme, setTheme } = useTheme()
  const { isSignedIn } = useUser()
  const settingsRef = useRef<HTMLDivElement>(null)

  // Close menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (settingsRef.current && !settingsRef.current.contains(event.target as Node)) {
        setIsSettingsOpen(false)
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
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div>
          <NewHazeLogo className="h-[70px]" href="/" />
        </div>

        <nav className="flex items-center gap-4">
          <Link href="/blog">
            <Button
              variant="outline"
              className="border border-primary hover:bg-primary hover:text-primary-foreground px-6 py-2 rounded-full transition-all duration-300 text-foreground bg-muted"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              Blog & Guías
            </Button>
          </Link>

          <div className="flex items-center gap-3">
            {/* Clerk Authentication Buttons */}
            {!isSignedIn ? (
              <>
                <SignInButton mode="modal">
                  <Button
                    variant="outline"
                    className="border border-primary hover:bg-primary hover:text-primary-foreground px-6 py-2 rounded-full transition-all duration-300 text-foreground bg-transparent"
                    style={{ fontFamily: "Montserrat, sans-serif" }}
                  >
                    Iniciar sesión
                  </Button>
                </SignInButton>

                <SignUpButton mode="modal">
                  <Button
                    className="bg-accent hover:bg-accent/90 text-white px-6 py-2 rounded-full transition-all duration-300"
                    style={{ fontFamily: "Montserrat, sans-serif" }}
                  >
                    Registrarse
                  </Button>
                </SignUpButton>
              </>
            ) : (
              <UserButton />
            )}

            {/* Settings Menu */}
            <div className="relative" ref={settingsRef}>
              <button
                onClick={() => setIsSettingsOpen(!isSettingsOpen)}
                className="h-10 w-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:opacity-90 transition-opacity duration-300"
                aria-label="Configuración"
              >
                <Settings className="h-5 w-5" />
              </button>

              {isSettingsOpen && (
                <div className="absolute right-0 mt-2 w-56 bg-background border border-border rounded-lg shadow-lg py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                  <div className="px-4 py-2 text-sm font-semibold text-foreground border-b border-border">
                    Configuración
                  </div>

                  {/* Theme Slider */}
                  <div className="px-4 py-3 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      {theme === "dark" ? (
                        <Moon className="h-4 w-4" />
                      ) : (
                        <Sun className="h-4 w-4" />
                      )}
                      <span className="text-sm text-foreground">
                        {theme === "dark" ? "Tema Oscuro" : "Tema Claro"}
                      </span>
                    </div>

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
