"use client"

import Link from "next/link"
import { GraduationCap, Brain } from "lucide-react"
import { Button } from "@/components/ui/button"
import NewHazeLogo from "@/components/new-haze-logo"
import { UserMenu } from "@/components/header/user-menu"
import { AppSettingsMenu } from "@/components/header/app-settings-menu"

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/5 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto px-3 sm:px-6 py-3 sm:py-4 flex items-center justify-between">

        {/* Logo (home button) */}
        <div className="text-foreground shrink-0">
          <NewHazeLogo className="h-[50px] sm:h-[70px]" href="/" />
        </div>

        <div className="flex items-center gap-1.5 sm:gap-3">

          {/* Navigation menu */}
          <nav
            className="flex items-center gap-2"
            aria-label="Navigation menu"
          >

            {/* Learn button*/}
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

            {/* Blog button */}
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
          </nav>

          <nav
            className="flex items-center gap-2"
            aria-label="User menu"
          >
            {/* User Menu */}
            <UserMenu />

            {/* App Settings */}
            <AppSettingsMenu />
          </nav>
        </div>
      </div>
    </header>
  )
}
