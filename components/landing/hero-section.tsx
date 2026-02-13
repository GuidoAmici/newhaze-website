'use client'

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-primary"
      style={{
        background: "linear-gradient(135deg, #855CF2 0%, #6B46C1 50%, #4C1D95 100%)",
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl sm:text-6xl md:text-8xl font-bold text-white mb-6 sm:mb-8 leading-tight text-balance">
            CULTIVÁ TU
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#F18604] to-[#FF9F1C]">FUTURO</span>
          </h1>
          <p className="text-base sm:text-xl md:text-2xl text-white/90 mb-8 sm:mb-12 font-light text-pretty">
            Innovación, ciencia y naturaleza se encuentran en New Haze.
            <br />
            Donde cada cultivo es una obra de arte.
          </p>
          <div>
            <Link href="/blog">
              <Button variant="CTA-primary">
                Descubrí más
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}
