'use client'

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-12 sm:py-20 relative overflow-hidden bg-black">
      <div className="container mx-auto px-4 sm:px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-center text-4xl sm:text-6xl font-bold mb-6 sm:mb-8 text-white text-balance">
            UNITE A LA
            <br />
            <span className="text-center text-transparent bg-clip-text bg-gradient-to-r from-[#855CF2] to-[#00B57C]">
              REVOLUCIÓN
            </span>
          </h2>
          <p className="text-base sm:text-xl mb-8 sm:mb-12 leading-relaxed text-zinc-300 text-pretty">
            Sé parte de una comunidad que está redefiniendo el cultivo indoor.
            <br />
            Donde la ciencia, la naturaleza y la pasión se encuentran.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button variant="CTA-primary">
              Unirme a la Comunidad
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>

            <Button
              variant="subtle"
              className="border-2 border-[#855CF2] text-[#855CF2] hover:bg-[#855CF2] hover:text-white w-full sm:w-auto"
            >
              Conocer más
            </Button>
          </div>

          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-[#855CF2] mb-2">10K+</div>
              <div className="text-zinc-300">Cultivadores</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#00B57C] mb-2">50+</div>
              <div className="text-white">Productos</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#F18604] mb-2">24/7</div>
              <div className="text-white">Soporte</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#855CF2] mb-2">100%</div>
              <div className="text-white">Innovación</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
