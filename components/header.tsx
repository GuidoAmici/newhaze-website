"use client"

import Link from "next/link"
import { ArrowRight, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import NewHazeLogo from "@/components/new-haze-logo"

export default function Header() {
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
              className="border border-[#855CF2] hover:bg-[#855CF2] hover:text-white px-6 py-2 rounded-full transition-all duration-300 text-foreground bg-muted"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              Blog
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>

          <Link href="/auth/login">
            <Button
              variant="outline"
              className="border border-foreground/30 hover:bg-primary hover:text-primary-foreground px-4 py-2 rounded-full transition-all duration-300 text-foreground bg-transparent flex items-center gap-2"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              <User className="h-4 w-4" />
              <span>Ingresar</span>
            </Button>
          </Link>
        </nav>
      </div>
    </header>
  )
}
