import type { Metadata } from "next"
import BlogDetailClient from "./client"

async function getGuideData(slug: string) {
  try {
    const response = await fetch(
      `${process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000"}/api/guides/${slug}`,
      {
        cache: "revalidate",
        next: { revalidate: 3600 },
      },
    )
    if (!response.ok) return null
    return response.json()
  } catch (error) {
    return null
  }
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const guide = await getGuideData(params.slug)

  if (!guide) {
    return {
      title: "New Haze - Blog | Guía no encontrada",
      description: "La guía que buscas no existe o fue removida.",
    }
  }

  // Extract first 150 characters for description
  const description = guide.excerpt || guide.content?.substring(0, 150) + "..."

  return {
    title: `${guide.title} | New Haze Blog`,
    description: description,
    openGraph: {
      title: guide.title,
      description: guide.excerpt,
      images: guide.coverImage ? [{ url: guide.coverImage }] : [],
    },
  }
}

export default function BlogDetailPage() {
  return <BlogDetailClient />
}
