import { NextResponse } from "next/server"

const API_URL = process.env.NEXT_PUBLIC_API_URL ?? "https://api.newhaze.ar"

export const revalidate = 300 // 5 minutos de caché

export async function GET() {
  try {
    const res = await fetch(`${API_URL}/api/Blog`, {
      next: { revalidate: 300 },
    })

    if (!res.ok) {
      throw new Error(`API returned ${res.status}`)
    }

    const data = await res.json()
    return NextResponse.json(data)
  } catch (err) {
    console.error("[guides/route] Error fetching blog posts:", err)
    return NextResponse.json(
      { error: "No se pudo cargar el blog" },
      { status: 503 }
    )
  }
}
