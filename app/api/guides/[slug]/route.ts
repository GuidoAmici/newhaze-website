import { NextResponse } from "next/server"

const API_URL = process.env.NEXT_PUBLIC_API_URL ?? "https://api.newhaze.ar"

export const revalidate = 300 // 5 minutos de caché

export async function GET(
  _request: Request,
  { params }: { params: { slug: string } }
) {
  try {
    const res = await fetch(`${API_URL}/api/Blog/${encodeURIComponent(params.slug)}`, {
      next: { revalidate: 300 },
    })

    if (res.status === 404) {
      return NextResponse.json({ error: "Post no encontrado" }, { status: 404 })
    }

    if (!res.ok) {
      throw new Error(`API returned ${res.status}`)
    }

    const data = await res.json()
    return NextResponse.json(data)
  } catch (err) {
    console.error("[guides/[slug]/route] Error fetching post:", err)
    return NextResponse.json(
      { error: "No se pudo cargar el post" },
      { status: 503 }
    )
  }
}
