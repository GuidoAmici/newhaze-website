"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { Moon, Sun, Settings, User, GraduationCap, Brain } from "lucide-react"
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

        {/* Logo */}
        <div className="text-foreground shrink-0">
          <NewHazeLogo className="h-[50px] sm:h-[70px]" href="/" />
        </div>

        <div className="flex items-center gap-1.5 sm:gap-3">

          <nav className="flex items-center gap-2">

            {/* Learn */}
            <Link href="/learn">
              <Button
                variant="subtle"
                className="h-8 w-8 sm:h-10 sm:w-10 text-xs sm:text-sm flex items-center"
                aria-label="Learn"
              >
                <GraduationCap className="h-4 w-4 sm:h-5 sm:w-5" />
                <span className="hidden xs:inline">Aprender</span>
              </Button>
            </Link>

            {/* Blog */}
            <Link href="/blog">
              <Button
                variant="subtle"
                className="h-8 w-8 sm:h-10 sm:w-10 text-xs sm:text-sm flex items-center"
                aria-label="Blog"
              >
                <Brain className="h-4 w-4 sm:h-5 sm:w-5" />
                <span className="hidden xs:inline">Blog</span>
              </Button>
            </Link>

            {/* Clerk Authentication Button */}
            {!isSignedIn ? (
              <SignInButton mode="modal">
                <Button
                  variant="subtle"
                  className="h-8 w-8 sm:h-10 sm:w-10 text-xs sm:text-sm flex items-center"
                  aria-label="Sign in"
                >
                  <GraduationCap className="h-4 w-4 sm:h-5 sm:w-5" />
                  <span className="hidden xs:inline">Usuario</span>
                </Button>
              </SignInButton>
            ) : (
              <UserButton/>
            )}
          </nav>


          {/* Settings Menu */}
          <div className="relative" ref={settingsRef}>
            <Button
              variant="subtle"
              className="h-8 w-8 sm:h-10 sm:w-10 text-xs sm:text-sm flex items-center"
              onClick={toggleSettings}
              aria-label="Settings"
            >
              <Settings 
                className={`h-4 w-4 sm:h-5 sm:w-5 transition-transform duration-300 ${
                  isSettingsOpen ? "-rotate-60" : "rotate-0"
                }`}
              />
            </Button>

            {isSettingsOpen && (
              <div 
                className="absolute right-0 mt-2 w-52 sm:w-56 bg-background border border-border rounded-lg shadow-lg py-2 z-50"
                style={{
                  transform: isSettingsClosing ? "scale(0.95)" : "scale(1)",
                  opacity: isSettingsClosing ? 0 : 1,
                  transition: "all 0.2s ease-in-out",
                  transformOrigin: "top right",
                  pointerEvents: isSettingsClosing ? "none" : "auto"
                }}
              >
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
                      aria-label="Cambiar tema" >
                      <span
                        className={`inline-block h-4 w-4 transform rounded-full bg-white shadow-lg transition-transform duration-300 ${
                          theme === "dark" ? "translate-x-5" : "translate-x-0.5"
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
    </header>
  )
}
