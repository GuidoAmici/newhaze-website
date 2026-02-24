import { NextResponse } from "next/server"

const API_URL = process.env.NEXT_PUBLIC_API_URL ?? "https://api.newhaze.ar"

export async function GET() {
  try {
    const res = await fetch(`${API_URL}/api/Blog`, {
      next: { revalidate: 300 }, // cache 5 minutos
    })

    if (!res.ok) throw new Error(`API responded ${res.status}`)

    const data = await res.json()
    return NextResponse.json(data)
  } catch (err) {
    console.error("[/api/guides] Error fetching from newhaze-api:", err)
    return NextResponse.json(
      { error: "No se pudieron obtener los artículos" },
      { status: 503 }
    )
  }
}
