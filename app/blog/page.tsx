"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Card } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"
import Header from "@/components/header"
import { useBlogNav } from "@/components/blog-nav-provider"

interface Guide {
  title: string
  excerpt: string
  coverImage: string
  slug: string
}

export default function BlogPage() {
  const [guides, setGuides] = useState<Guide[]>([])
  const [loading, setLoading] = useState(true)
  const { setIsLoading } = useBlogNav()

  useEffect(() => {
    const fetchGuides = async () => {
      try {
        const response = await fetch("/api/guides")
        const data = await response.json()
        setGuides(data)
      } catch (error) {
        console.error("Error fetching guides:", error)
        setGuides([
          {
            title: "Guía Completa de Cultivo Hidropónico",
            excerpt:
              "Aprende los fundamentos del cultivo hidropónico y maximiza tus cosechas con técnicas comprobadas.",
            coverImage: "/hydroponic-cultivation-indoor.jpg",
            slug: "guia-cultivo-hidroponico",
          },
          {
            title: "Optimización de Luz LED para Máximo Rendimiento",
            excerpt: "Descubre cómo elegir y posicionar luces LED para obtener los mejores resultados en tu cultivo.",
            coverImage: "/led-lights-indoor-growing.jpg",
            slug: "optimizacion-luz-led",
          },
          {
            title: "Control de pH y Nutrientes: Ciencia Exacta",
            excerpt: "Domina el control de pH y la nutrición para plantas sanas y cosechas de calidad excepcional.",
            coverImage: "/nutrient-solutions-ph-control.jpg",
            slug: "control-ph-nutrientes",
          },
          {
            title: "Gestión de Plagas en Cultivos Indoor",
            excerpt: "Estrategias naturales y efectivas para prevenir y controlar plagas sin químicos dañinos.",
            coverImage: "/pest-control-indoor-gardening.jpg",
            slug: "gestion-plagas-indoor",
          },
        ])
      } finally {
        setLoading(false)
      }
    }

    fetchGuides()
  }, [])

  const handleGuideClick = () => {
    setIsLoading(true)
  }

  return (
    <div className="min-h-screen bg-[#0E0E12]">
      <Header />

      {/* Blog Header Section with Banner */}
      <section className="pt-32 pb-16 px-6 border-b bg-gradient-to-b from-[#855CF2]/5 to-transparent animate-in fade-in duration-500 bg-background border-muted-foreground text-foreground">
        <div className="container mx-auto max-w-4xl">
          <h1
            className="text-5xl md:text-6xl font-bold mb-6 leading-tight text-foreground"
            style={{ fontFamily: "HVD Poster, sans-serif" }}
          >
            Blog & Guías
          </h1>
          <div className="bg-[#855CF2]/10 border border-[#855CF2]/30 rounded-lg p-6 mb-8">
            <p className="text-lg leading-relaxed text-foreground" style={{ fontFamily: "Montserrat, sans-serif" }}>
              Explorá nuestras guías y artículos pensados para cultivadores que buscan precisión, innovación y
              resultados reales.
            </p>
          </div>
          <p className="leading-relaxed text-muted-foreground" style={{ fontFamily: "Montserrat, sans-serif" }}>
            Desde técnicas avanzadas hasta soluciones prácticas, aquí encontrarás todo lo necesario para maximizar tu
            cultivo indoor.
          </p>
        </div>
      </section>

      {/* Guides Grid */}
      <section className="py-20 px-6 border-foreground bg-background text-foreground">
        <div className="container mx-auto max-w-6xl">
          {loading ? (
            <div className="text-center text-white/60 text-lg animate-pulse">Cargando guías...</div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
              {guides.map((guide, index) => (
                <Link key={guide.slug} href={`/blog/${guide.slug}`} onClick={handleGuideClick}>
                  <Card
                    className="group overflow-hidden bg-white/5 border border-white/10 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:border-[#855CF2]/50 cursor-pointer h-full animate-in fade-in slide-in-from-bottom-4 duration-700"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {/* Cover Image */}
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={guide.coverImage || "/placeholder.svg"}
                        alt={guide.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors duration-300"></div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h3
                        className="text-2xl font-bold mb-3 group-hover:text-[#855CF2] transition-colors duration-300 line-clamp-2 text-foreground"
          
                      >
                        {guide.title}
                      </h3>
                      <p
                        className="mb-6 leading-relaxed line-clamp-3 text-muted-foreground"
          
                      >
                        {guide.excerpt}
                      </p>

                      {/* Read More Button */}
                      <div className="flex items-center gap-2 text-[#855CF2] group-hover:text-[#F18604] transition-colors duration-300 font-semibold">
                        Leer más
                        <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                      </div>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
