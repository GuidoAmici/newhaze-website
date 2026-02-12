'use client'

import { Card } from "@/components/ui/card"
import { Users, Lightbulb, Heart } from "lucide-react"

export function CommunitySection() {
  return (
    <section className="py-12 sm:py-20 bg-gradient-to-br from-[#00B57C] to-[#059669] relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-3xl sm:text-5xl font-bold mb-6 text-foreground text-balance">
            COMUNIDAD CULTIVADORA
          </h2>
          <p className="text-base sm:text-xl max-w-3xl mx-auto text-white text-pretty">
            Más que productos, creamos conexiones. Somos una familia de cultivadores que comparte conocimiento,
            experiencias y pasión.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
          <Card className="backdrop-blur-sm p-5 sm:p-8 text-center shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-card">
            <div className="bg-[#855CF2] w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
              <Users className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-4">+10K CULTIVADORES</h3>
            <p className="text-muted-foreground">
              Una comunidad activa que comparte tips, técnicas y celebra cada cosecha exitosa.
            </p>
          </Card>

          <Card className="backdrop-blur-sm p-5 sm:p-8 text-center shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-card">
            <div className="bg-[#F18604] w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
              <Lightbulb className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-4">INNOVACIÓN CONSTANTE</h3>
            <p className="text-muted-foreground">
              Desarrollamos soluciones basadas en las necesidades reales de nuestra comunidad.
            </p>
          </Card>

          <Card className="backdrop-blur-sm p-5 sm:p-8 text-center shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-card">
            <div className="bg-[#00B57C] w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
              <Heart className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-4">SOPORTE 24/7</h3>
            <p className="text-muted-foreground">
              Acompañamos cada etapa de tu cultivo con asesoramiento experto y personalizado.
            </p>
          </Card>
        </div>

        <div className="text-center mt-10 sm:mt-16">
          <blockquote className="text-lg sm:text-2xl font-light italic max-w-4xl mx-auto text-white text-pretty">
            "New Haze no solo me dio las herramientas, me dio una familia. Cada cultivo es una nueva aventura compartida."
          </blockquote>
          <p className="mt-4 font-semibold text-white">- María, Cultivadora desde 2022</p>
        </div>
      </div>
    </section>
  )
}
