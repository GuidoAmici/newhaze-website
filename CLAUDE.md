# Contexto — Website (Next.js)

**App:** `newhaze.ar` | **Stack:** Next.js 15 + React 19 + TypeScript | **Deploy:** Vercel
**UI:** shadcn/ui (Radix UI + Tailwind CSS v4) | **Generado con:** V0 (Vercel)

> Las reglas universales del ecosistema y el roadmap completo están en el `CLAUDE.md` del directorio padre.

---

## Propósito del website

`newhaze.ar` es el medio principal por el que un cliente potencial conoce New Haze. Su función es comunicar con claridad:
- **Qué es New Haze** — filosofía, identidad, posicionamiento ("Dejá de improvisar. Empezá a decidir con datos.")
- **Qué productos ofrece** — herramientas de medición para cultivo indoor (pH, EC, temperatura, humedad)
- **Qué valor entrega** — no solo instrumentos, sino el criterio para usarlos (vínculo con Learn)
- **Por qué confiar en la marca** — educación, comunidad, trayectoria

**El contenido actual es placeholder.** No representa correctamente la identidad, filosofía ni propuesta de valor de New Haze. Antes de agregar features nuevas, el contenido y la identidad visual deben estar a la altura de la marca.

---

## Identidad visual — aplicar en todos los cambios

El website usa actualmente la paleta impresa de la marca. La dirección a futuro es alinearse a la estética digital de Learn (más oscura, más sobria):

| Token | Actual (website) | Referencia digital (Learn) |
|---|---|---|
| Fondo | `#0E0E12` | `#0b0810` |
| Primario | `#855CF2` | `#9b6fd4` |
| Secundario | `#00B57C` | `#00B57C` |
| Acento | `#F18604` | `#F18604` |
| Fuente | **Rubik** | **Rubik** |

No mezclar los dos sets de colores en un mismo componente. No introducir nuevas fuentes. Ver `newhaze-wiki/identidad/identidad-visual.md` para el sistema completo.

**Tono visual:** laboratorio, virtual, futurista, sobrio. Nunca formal ni corporativo.

---

## Estado de la app

El website es mayormente público (landing, blog, precios). Fue creado como prototipo funcional y tiene partes pendientes de conectar a la API real y de migrar el auth.

| Feature | Estado |
|---|---|
| Landing page | ✅ Funcional |
| Blog (lista y posts) | ⚠️ Funcional con mock data — pendiente conectar a API real |
| Auth (login/registro) | ⚠️ Usa Clerk — **Clerk es temporal, debe ser removido** |
| Lista de precios | 🔲 Pendiente (consume `/api/PriceList`) |
| Waitlist / captura de leads | 🔲 Planificado |
| Integración Mercado Pago | 🔲 Planificado (depende del auth unificado) |
| **Mapa de Growshops** | 🔲 Planificado (depende del sistema de organizaciones) |

---

## Mapa de Growshops (feature futuro — planificado)

Sección pública en `newhaze.ar/mapa` (o similar) que muestra las organizaciones verificadas geográficamente. Los consumidores pueden:
- Ver growshops y distribuidoras en un mapa interactivo
- Filtrar por tipo, nivel mínimo de empleados, proximidad
- Ver el perfil de cada organización: nombre, descripción, logo, empleados visibles con su nivel en Learn

**No requiere login.** Consume `GET /api/organizations` con filtros geográficos.

Ver diseño completo en `newhaze-wiki/proyectos/organizaciones.md`.

---

## ⚠️ Clerk es temporal — no extender

El website tiene Clerk instalado como auth provisional del prototipo. **No agregar nuevas features que dependan de Clerk.**

**El objetivo:** Reemplazar Clerk por el mismo sistema de auth que ya usa Learn — email + OTP + JWT de `newhaze-api`. La mayoría del website es público y no requiere auth; Clerk es solo para features futuras (waitlist, perfil de usuario, Mercado Pago).

Cuando se migre, los archivos a eliminar son:
- `middleware.ts` (reemplazar por middleware propio o sin middleware)
- `app/auth/login/page.tsx` y `app/auth/signup/page.tsx` (reemplazar con flow propio)
- `components/header/user-menu.tsx` (reemplazar con componente de usuario propio)
- Dependencia `@clerk/nextjs` del `package.json`

---

## Estructura del proyecto

```
app/
  page.tsx                  ← Landing principal
  layout.tsx                ← Layout raíz con providers
  blog/
    page.tsx                ← Lista de posts del blog ("use client")
    [slug]/
      page.tsx              ← Post individual
      client.tsx            ← Componente cliente del post
  learn/
    page.tsx                ← Página de presentación de Learn
  auth/
    login/page.tsx          ← Login con Clerk (TEMPORAL — reemplazar)
    signup/page.tsx         ← Registro con Clerk (TEMPORAL — reemplazar)
  api/
    guides/route.ts         ← Route handler local (actualmente con mock data)
    guides/[slug]/route.ts  ← Route handler local (actualmente con mock data)
components/
  header.tsx               ← Navegación principal
  header/
    user-menu.tsx           ← Menú de usuario (Clerk — TEMPORAL)
    app-settings-menu.tsx   ← Configuración de la app
  landing/                 ← Secciones del landing page
    hero-section.tsx
    products-section.tsx
    mission-vision-section.tsx
    community-section.tsx
    cta-section.tsx
  learn/                   ← Preview/demo de la plataforma Learn
    study-path-map.tsx
    featured-classes.tsx
    student-profile.tsx
    chatbot-widget.tsx
  ui/                      ← Componentes shadcn/ui
  theme-provider.tsx
  blog-nav-provider.tsx
lib/
  utils.ts                 ← cn() helper de shadcn
middleware.ts              ← Clerk middleware (TEMPORAL — todo público por ahora)
```

---

## Blog — migración de mock data a API real

**Estado actual:** El blog llama a route handlers locales (`/api/guides`) que retornan datos hardcodeados.

**Objetivo:** Los route handlers deben actuar como proxy y llamar a la API real:

| Route local | Llama a | Método |
|---|---|---|
| `/api/guides` | `api.newhaze.ar/api/Blog` | GET |
| `/api/guides/[slug]` | `api.newhaze.ar/api/Blog/{slug}` | GET |

Variable de entorno: `NEXT_PUBLIC_API_URL` (no hardcodear la URL de la API).

---

## UI — shadcn/ui

- Componentes en `components/ui/` generados por shadcn
- Estilos con Tailwind CSS v4
- Acento: `#855CF2` (diferente al `#9b6fd4` de Learn)
- Fondo oscuro: `#0E0E12`
- Tema gestionado por `next-themes` vía `ThemeProvider`
- No usar `cn()` desde ningún lugar que no sea `lib/utils.ts`

---

## Convenciones

- TypeScript estricto en todo el proyecto
- Componentes de servidor por defecto — agregar `"use client"` solo cuando es necesario
- Imágenes en `public/` referenciadas con rutas absolutas (`/nombre-imagen.jpg`)
- Los route handlers en `app/api/` son proxies hacia la API externa — no contienen lógica de negocio
- El proyecto fue generado con V0 — mantener el estilo visual existente al hacer cambios
