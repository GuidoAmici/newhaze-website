"use client"

import { GraduationCap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SignInButton, UserButton } from "@clerk/nextjs"
import { useUser } from "@clerk/nextjs"

export function UserMenu() {
  const { isSignedIn } = useUser()

  return (
    <>
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
        <UserButton />
      )}
    </>
  )
}
