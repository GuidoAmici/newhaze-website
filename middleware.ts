import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'

// Define las rutas que son públicas (no requieren autenticación)
const isPublicRoute = createRouteMatcher([
  '/',
  '/auth/login(.*)',
  '/auth/signup(.*)',
  '/blog(.*)',
  '/api/guides(.*)',
])

export default clerkMiddleware(async (auth, request) => {
  // Si la ruta NO es pública, protégela
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
