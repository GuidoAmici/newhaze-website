import { NextResponse } from "next/server"

const API_URL = process.env.NEXT_PUBLIC_API_URL ?? "https://api.newhaze.ar"

export async function GET(
  _request: Request,
  { params }: { params: { slug: string } }
) {
  try {
    const res = await fetch(`${API_URL}/api/Blog/${params.slug}`, {
      next: { revalidate: 300 }, // cache 5 minutos
    })

    if (res.status === 404) {
      return NextResponse.json({ error: "Artículo no encontrado" }, { status: 404 })
    }

    if (!res.ok) throw new Error(`API responded ${res.status}`)

    const data = await res.json()
    return NextResponse.json(data)
  } catch (err) {
    console.error(`[/api/guides/${params.slug}] Error fetching from newhaze-api:`, err)
    return NextResponse.json(
      { error: "No se pudo obtener el artículo" },
      { status: 503 }
    )
  }
}
