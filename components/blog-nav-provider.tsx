"use client"

import type React from "react"

import { createContext, useContext, useState } from "react"

interface BlogNavContextType {
  isLoading: boolean
  setIsLoading: (loading: boolean) => void
}

const BlogNavContext = createContext<BlogNavContextType | undefined>(undefined)

export function BlogNavProvider({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(false)

  return <BlogNavContext.Provider value={{ isLoading, setIsLoading }}>{children}</BlogNavContext.Provider>
}

export function useBlogNav() {
  const context = useContext(BlogNavContext)
  if (!context) {
    throw new Error("useBlogNav must be used within BlogNavProvider")
  }
  return context
}
