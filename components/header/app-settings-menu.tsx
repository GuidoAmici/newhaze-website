"use client"

import { useState, useEffect, useRef } from "react"
import { Moon, Sun, Settings } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "next-themes"

export function AppSettingsMenu() {
  const [isOpen, setIsOpen] = useState(false)
  const [isClosing, setIsClosing] = useState(false)
  const { theme, setTheme } = useTheme()
  const menuRef = useRef<HTMLDivElement>(null)

  const closeMenu = () => {
    setIsClosing(true)
    setTimeout(() => {
      setIsOpen(false)
      setIsClosing(false)
    }, 200)
  }

  const toggleMenu = () => {
    if (isOpen) {
      closeMenu()
    } else {
      setIsOpen(true)
    }
  }

  // Close menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        closeMenu()
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside)
      return () => document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [isOpen])

  const handleThemeToggle = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  return (
    <div className="relative" ref={menuRef}>
      <Button
        variant="subtle"
        className="h-8 w-8 sm:h-10 sm:w-10 text-xs sm:text-sm flex items-center"
        onClick={toggleMenu}
        aria-label="App Settings"
      >
        <Settings 
          className={`h-4 w-4 sm:h-5 sm:w-5 transition-transform duration-300 ${
            isOpen ? "-rotate-60" : "rotate-0"
          }`}
        />
      </Button>

      {isOpen && (
        <div 
          className="absolute right-0 mt-2 w-52 sm:w-56 bg-background border border-border rounded-lg shadow-lg py-2 z-50"
          style={{
            transform: isClosing ? "scale(0.95)" : "scale(1)",
            opacity: isClosing ? 0 : 1,
            transition: "all 0.2s ease-in-out",
            transformOrigin: "top right",
            pointerEvents: isClosing ? "none" : "auto"
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
                aria-label="Toggle theme"
              >
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
  )
}
