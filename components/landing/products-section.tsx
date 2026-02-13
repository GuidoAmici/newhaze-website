'use client'

import { Card } from "@/components/ui/card"
import { Leaf } from "lucide-react"

export function ProductsSection() {
  const products = [
    {
      title: "Kit Starter Pro",
      description: "Todo lo necesario para comenzar tu primer cultivo indoor con garantía de éxito.",
      color: "#855CF2",
    },
    {
      title: "Nutrientes Avanzados",
      description: "Fórmulas científicamente desarrolladas para maximizar el crecimiento y la calidad.",
      color: "#00B57C",
    },
    {
      title: "Sistema de Monitoreo",
      description: "Tecnología IoT para controlar y optimizar las condiciones de cultivo remotamente.",
      color: "#F18604",
    },
  ]

  return (
    <section className="py-12 sm:py-20 bg-muted relative">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-3xl sm:text-5xl font-bold mb-6 text-foreground text-balance">
            HERRAMIENTAS DE INNOVACIÓN
          </h2>
          <p className="text-base sm:text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Productos diseñados por cultivadores, para cultivadores. Cada herramienta es el resultado de años de
            investigación y feedback de nuestra comunidad.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {products.map((product, index) => (
            <Card
              key={index}
              className="group overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 text-card-foreground bg-card"
            >
              <div className="h-48 relative overflow-hidden" style={{ backgroundColor: product.color }}>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center">
                    <Leaf className="w-12 h-12 text-white" />
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-foreground mb-3">{product.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{product.description}</p>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-muted-foreground">
            Nuestros productos son el medio, no el fin. El verdadero valor está en la comunidad que construimos juntos.
          </p>
        </div>
      </div>
    </section>
  )
}
