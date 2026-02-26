# Contexto — Frontend Website (Next.js)

**App:** `newhaze.ar` | **Stack:** Next.js 15 + React 19 + TypeScript + shadcn/ui + Tailwind v4
**Deploy:** Vercel | **Preview:** `preview.newhaze.ar`

> Las reglas universales del ecosistema están en el `CLAUDE.md` del directorio padre.

---

## ⚠️ CLERK NO ESTÁ INSTALADO

A diferencia de lo que puede indicar documentación antigua, **Clerk NO está en este proyecto**.
El website tiene su propio sistema de auth completo usando `newhaze-api` (email + OTP + JWT).
No agregar Clerk ni ninguna otra solución de auth de terceros.

---

## ⛔ Restricciones específicas del website

1. **Nunca llamar a Supabase directamente.** Todo pasa por la API.
2. **La URL de la API viene de `NEXT_PUBLIC_API_URL`.** Production: `https://api.newhaze.ar`. Preview: `https://dev.api.newhaze.ar`.
3. **Todos los fetch al backend van por `apiFetch` en `lib/api.ts`.** Nunca `fetch` directo con la URL hardcodeada.
4. **Tokens en localStorage — keys `nh_access` y `nh_refresh`.** Nunca en cookies ni server-side.
5. **No extender Clerk** — no está instalado y no debe instalarse.

---

## Estructura del proyecto

```
app/
  layout.tsx                    ← providers globales (AuthProvider)
  page.tsx                      ← homepage
  api/
    guides/route.ts             ← proxy → GET /api/Blog (real API)
    guides/[slug]/route.ts      ← proxy → GET /api/Blog/{slug} (real API)
  (auth)/
    login/page.tsx              ← pantalla de login
    register/page.tsx           ← pantalla de registro
    verify/page.tsx             ← verificación de OTP
  blog/
    page.tsx                    ← lista de posts (usa /api/guides)
    [slug]/page.tsx             ← post individual (usa /api/guides/[slug])
contexts/
  AuthContext.tsx               ← AuthProvider + useAuthContext
lib/
  api.ts                        ← apiFetch + tokens (localStorage)
  auth.ts                       ← login, register, verifyOtp, getMe, etc.
components/
  ui/                           ← componentes shadcn/ui
```

---

## Auth — cómo funciona

```ts
// lib/api.ts — tokens en localStorage
tokens.access   // localStorage.getItem("nh_access")
tokens.refresh  // localStorage.getItem("nh_refresh")
tokens.save(access, refresh)  // guarda ambos
tokens.clear()                // logout

// apiFetch — inyecta Authorization: Bearer automáticamente
const data = await apiFetch<MyType>("/api/users/me")
```

```tsx
// contexts/AuthContext.tsx
const { user, loading, login, logout, register, verifyOtp, updateUsername } = useAuthContext()
// user → AuthUser | null
// AuthUser: { id, email, username, avatarUrl, xp, level, role, earlyAccess }
```

**Flujo completo de registro:**
1. `POST /api/auth/register` → dispara OTP por email
2. `POST /api/auth/verify-otp` → devuelve access + refresh tokens + user
3. Si `user.username === null` → pedir completar perfil (`PUT /api/users/me`)

**Flujo de login:**
1. `POST /api/auth/login` → devuelve access + refresh tokens + user

---

## Blog — datos reales

Los routes `app/api/guides/` proxean hacia `newhaze-api`:
- `GET /api/guides` → `GET https://api.newhaze.ar/api/Blog`
- `GET /api/guides/[slug]` → `GET https://api.newhaze.ar/api/Blog/{slug}`

No hay mock data en el blog. Si el blog no muestra posts, es porque la tabla `blog_posts` en Supabase está vacía.

---

## Variables de entorno

| Variable | Production | Preview |
|---|---|---|
| `NEXT_PUBLIC_API_URL` | `https://api.newhaze.ar` *(default)* | `https://dev.api.newhaze.ar` |

El `NEXT_PUBLIC_API_URL` en preview debe estar seteado en Vercel → Settings → Environment Variables → Preview.

---

## Pendientes de desarrollo

- [ ] Conectar páginas de productos al catálogo de la API (post-migración Sheets)
- [ ] Formulario de waitlist / captura de leads
- [ ] Integración Mercado Pago (futuro)
- [ ] Mapa de growshops (post-sistema de Organizaciones)

---

## Convenciones

- Componentes: PascalCase + TypeScript interfaces para props
- Estilos: Tailwind v4 + shadcn/ui (no CSS modules, no styled-components)
- Server Components por default — `"use client"` solo donde se necesite interactividad
- No usar `<form>` sin `action` de server o `onSubmit` controlado
- No lanzar errores en componentes — usar `error.tsx` o estados de error locales
