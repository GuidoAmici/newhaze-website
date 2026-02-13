'use client'

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Lightbulb, Heart } from "lucide-react"

export function MissionVisionSection() {
  return (
    <section className="py-20 bg-card relative overflow-hidden">
      <div className="absolute inset-0 opacity-5 bg-background"></div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-3xl sm:text-5xl font-bold mb-6 text-foreground text-balance">
            NUESTRA MISIÓN
          </h2>
          <div className="w-24 h-1 bg-[#855CF2] mx-auto mb-8"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center max-w-6xl mx-auto">
          <div className="space-y-6 sm:space-y-8">
            <Card className="p-4 sm:p-8 border-l-4 border-l-[#00B57C] shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-start space-x-4">
                <div className="bg-[#00B57C] p-3 rounded-full">
                  <Lightbulb className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-3">INNOVACIÓN</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Revolucionamos el cultivo indoor con tecnología de vanguardia y métodos científicos que maximizan
                    el potencial de cada planta.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-4 sm:p-8 border-l-4 border-l-[#855CF2] shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-start space-x-4">
                <div className="bg-[#855CF2] p-3 rounded-full">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-3">PASIÓN</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Cada producto nace de la pasión por el cultivo perfecto, combinando arte, ciencia y dedicación en
                    cada detalle.
                  </p>
                </div>
              </div>
            </Card>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-[#855CF2] to-[#6B46C1] p-5 sm:p-8 rounded-3xl text-white shadow-2xl">
              <h3 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">NUESTRA VISIÓN</h3>
              <p className="text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
                Ser la marca líder que conecta ciencia y naturaleza, creando una comunidad global de cultivadores que
                transforman espacios en ecosistemas prósperos.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                  Sustentabilidad
                </Badge>
                <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                  Comunidad
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
