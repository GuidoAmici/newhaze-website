"use client"

import { useParams } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Header from "@/components/header"
import { useEffect, useState } from "react"
import { useBlogNav } from "@/components/blog-nav-provider"

interface GuideDetail {
  title: string
  excerpt: string
  coverImage: string
  slug: string
  content: string
  author?: string
  publishedDate?: string
}

export default function BlogDetailClient() {
  const params = useParams()
  const slug = params.slug as string
  const [guide, setGuide] = useState<GuideDetail | null>(null)
  const [loading, setLoading] = useState(true)
  const { setIsLoading } = useBlogNav()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" })

    const fetchGuide = async () => {
      try {
        const response = await fetch(`/api/guides/${slug}`)
        const data = await response.json()
        setGuide(data)
      } catch (error) {
        console.error("Error fetching guide:", error)
        // Mock data fallback
        setGuide({
          title: "Guía Completa de Cultivo Hidropónico",
          excerpt: "Aprende los fundamentos del cultivo hidropónico y maximiza tus cosechas con técnicas comprobadas.",
          coverImage: "/hydroponic-cultivation-indoor.jpg",
          slug: "guia-cultivo-hidroponico",
          content: `
El cultivo hidropónico es una de las técnicas más efectivas para cultivadores modernos.

## ¿Qué es el cultivo hidropónico?

La hidroponía es un método de cultivo en el que las plantas crecen en una solución nutriente acuosa en lugar de en tierra. Este sistema permite un control preciso de los nutrientes, pH y condiciones ambientales que recibe cada planta.

## Ventajas del cultivo hidropónico

- Mayor rendimiento por metro cuadrado
- Ahorro de agua del 90% comparado con cultivo en tierra
- Control preciso de nutrientes
- Crecimiento más rápido
- Menor incidencia de plagas

## Tipos de sistemas hidropónicos

### Sistema NFT (Nutrient Film Technique)

Las raíces se nutren de una película delgada de solución nutritiva que fluye constantemente.

### Sistema DWC (Deep Water Culture)

Las raíces se sumergen directamente en la solución nutritiva oxigenada.

### Sistema Ebb & Flow

La solución nutritiva inunda y drena cíclicamente el área de raíces.

## Pasos para comenzar

1. Elige el sistema que mejor se adapte a tus necesidades
2. Selecciona un lugar con acceso a electricidad y agua
3. Instala tu sistema siguiendo las instrucciones
4. Prepara la solución nutritiva con la concentración correcta
5. Planta tus semillas o esquejes
6. Monitorea regularmente los niveles de pH y EC

Con dedicación y los conocimientos correctos, lograrás cultivos extraordinarios usando hidroponía.
          `,
          author: "Team New Haze",
          publishedDate: "15 de Octubre, 2024",
        })
      } finally {
        setLoading(false)
      }
    }

    if (slug) {
      fetchGuide()
    }
  }, [slug, setIsLoading])

  const handleBackClick = () => {
    setIsLoading(true)
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-[#0E0E12] flex items-center justify-center">
        <Header />
        <div className="pt-32 text-center">
          <p className="text-white/60 text-lg animate-pulse">Cargando guía…</p>
        </div>
      </div>
    )
  }

  if (!guide) {
    return (
      <div className="min-h-screen bg-[#0E0E12]">
        <Header />
        <div className="pt-32 px-6 text-center">
          <p className="text-white/60 text-lg mb-6">Guía no encontrada</p>
          <Link href="/blog">
            <Button className="bg-[#855CF2] hover:bg-[#7C4CE3]" onClick={handleBackClick}>
              Volver al Blog
            </Button>
          </Link>
        </div>
      </div>
    )
  }

  const parseMarkdown = (content: string) => {
    return content
      .split("\n")
      .filter((line) => line.trim() !== "")
      .map((line) => ({
        type:
          line.startsWith("##") && !line.startsWith("###")
            ? "h2"
            : line.startsWith("###")
              ? "h3"
              : line.startsWith("-")
                ? "li"
                : line.match(/^\d+\./)
                  ? "ol"
                  : "p",
        content: line
          .replace(/^#+\s/, "")
          .replace(/^-\s/, "")
          .replace(/^\d+\.\s/, ""),
      }))
  }

  const blocks = parseMarkdown(guide.content)

  return (
    <div className="min-h-screen bg-[#0E0E12] animate-in fade-in duration-500">
      <Header />

      {/* Back Button */}
      <div className="pt-24 px-6">
        <div className="container mx-auto max-w-3xl">
          <Link href="/blog" onClick={handleBackClick}>
            <Button
              variant="outline"
              className="border border-[#855CF2] text-[#855CF2] hover:bg-[#855CF2] hover:text-white px-6 py-2 rounded-full transition-all duration-300 mb-8 bg-transparent"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Volver al Blog
            </Button>
          </Link>
        </div>
      </div>

      {/* Article Header */}
      <section className="px-6 py-8 sm:py-12 border-b border-white/10">
        <div className="container mx-auto max-w-3xl">
          <h1
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight"

          >
            {guide.title}
          </h1>
          <p
            className="text-lg sm:text-xl text-white/70 mb-4 leading-relaxed"

          >
            {guide.excerpt}
          </p>
          <div
            className="flex flex-col sm:flex-row gap-3 sm:gap-6 text-sm sm:text-base text-white/50"

          >
            {guide.author && <span>Por {guide.author}</span>}
            {guide.publishedDate && <span>{guide.publishedDate}</span>}
          </div>
        </div>
      </section>

      {/* Cover Image */}
      <section className="px-6 py-8 sm:py-12">
        <div className="container mx-auto max-w-3xl">
          <img
            src={guide.coverImage || "/placeholder.svg"}
            alt={guide.title}
            className="w-full h-64 sm:h-80 md:h-96 object-cover rounded-lg shadow-xl border border-white/10 animate-in fade-in duration-700"
          />
        </div>
      </section>

      {/* Article Content */}
      <section className="px-6 py-8 sm:py-12">
        <div className="container mx-auto max-w-3xl">
          <div
            className="prose prose-invert max-w-2xl mx-auto text-white/80 leading-8 space-y-6"
          >
            {blocks.map((block, index) => {
              if (block.type === "h2") {
                return (
                  <h2
                    key={index}
                    className="text-3xl sm:text-4xl font-bold text-white mt-12 mb-4 pt-4 animate-in fade-in"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    {block.content}
                  </h2>
                )
              }
              if (block.type === "h3") {
                return (
                  <h3
                    key={index}
                    className="text-2xl sm:text-3xl font-bold text-[#855CF2] mt-8 mb-3 animate-in fade-in"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    {block.content}
                  </h3>
                )
              }
              if (block.type === "li") {
                return (
                  <ul
                    key={index}
                    className="list-disc list-inside space-y-2 ml-4 animate-in fade-in"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <li className="text-white/80">{block.content}</li>
                  </ul>
                )
              }
              if (block.type === "ol") {
                return (
                  <ol
                    key={index}
                    className="list-decimal list-inside space-y-2 ml-4 animate-in fade-in"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <li className="text-white/80">{block.content}</li>
                  </ol>
                )
              }
              return (
                <p
                  key={index}
                  className="text-white/80 leading-8 animate-in fade-in"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {block.content}
                </p>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-12 sm:py-20 border-t border-white/10">
        <div className="container mx-auto max-w-3xl text-center">
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 leading-tight"

          >
            ¿Listo para llevar tu cultivo al siguiente nivel?
          </h2>
          <Link href="/">
            <Button className="bg-[#F18604] hover:bg-[#E07503] text-white px-8 sm:px-12 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105">
              Explorar Productos
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
