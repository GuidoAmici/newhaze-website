import { NextResponse } from "next/server"

export async function GET() {
  // Mock API response - replace with your actual data source
  const guides = [
    {
      title: "Guía Completa de Cultivo Hidropónico",
      excerpt: "Aprende los fundamentos del cultivo hidropónico y maximiza tus cosechas con técnicas comprobadas.",
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
  ]

  return NextResponse.json(guides)
}
