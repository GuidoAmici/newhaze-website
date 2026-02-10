import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'

// Define qué rutas son públicas (NO requieren login)
const isPublicRoute = createRouteMatcher([
  '/',           // Página principal
  '/blog(.*)',   // Blog y todas sus subpáginas
  '/auth(.*)',   // Páginas de autenticación
  '/api/guides(.*)', // API pública
])

export default clerkMiddleware(async (auth, request) => {
  // Si NO es una ruta pública, requiere autenticación
  if (!isPublicRoute(request)) {
    await auth.protect()
  }
})

export const config = {
  matcher: [
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    '/(api|trpc)(.*)',
  ],
}
