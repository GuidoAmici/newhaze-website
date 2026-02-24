const API_URL = process.env.NEXT_PUBLIC_API_URL ?? "https://api.newhaze.ar"

// ── Token storage ─────────────────────────────────────────────────────────────
export const tokens = {
  get access(): string | null {
    if (typeof window === "undefined") return null
    return localStorage.getItem("nh_access")
  },
  get refresh(): string | null {
    if (typeof window === "undefined") return null
    return localStorage.getItem("nh_refresh")
  },
  save(access: string, refresh: string) {
    localStorage.setItem("nh_access", access)
    localStorage.setItem("nh_refresh", refresh)
  },
  clear() {
    localStorage.removeItem("nh_access")
    localStorage.removeItem("nh_refresh")
  },
}

// ── Base fetch con auto-refresh ───────────────────────────────────────────────
let refreshing: Promise<void> | null = null // evita múltiples refreshes simultáneos

type FetchOptions = Omit<RequestInit, "headers"> & {
  headers?: Record<string, string>
}

export async function apiFetch<T = unknown>(
  path: string,
  options: FetchOptions = {}
): Promise<T> {
  const headers: Record<string, string> = {
    "Content-Type": "application/json",
    ...(tokens.access ? { Authorization: `Bearer ${tokens.access}` } : {}),
    ...options.headers,
  }

  let res = await fetch(`${API_URL}${path}`, { ...options, headers })

  // Token expirado → refresh y reintento
  if (res.status === 401 && tokens.refresh) {
    if (!refreshing) {
      refreshing = fetch(`${API_URL}/api/auth/refresh`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ refreshToken: tokens.refresh }),
      })
        .then((r) => r.json())
        .then((data: { accessToken?: string; refreshToken?: string }) => {
          if (data.accessToken) tokens.save(data.accessToken, data.refreshToken!)
          else tokens.clear()
        })
        .finally(() => {
          refreshing = null
        })
    }
    await refreshing

    if (!tokens.access) throw new Error("Session expired")

    res = await fetch(`${API_URL}${path}`, {
      ...options,
      headers: { ...headers, Authorization: `Bearer ${tokens.access}` },
    })
  }

  if (!res.ok) {
    const err = await res.json().catch(() => ({ error: res.statusText }))
    throw new Error((err as { error?: string }).error ?? "API error")
  }

  return res.json() as Promise<T>
}
