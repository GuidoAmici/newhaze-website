import type React from "react"
import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { BlogNavProvider } from "@/components/blog-nav-provider"
import { ClerkProvider } from "@clerk/nextjs"
import { dark } from '@clerk/themes'
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"

import { Rubik, Roboto_Slab, Rubik_Mono_1 } from 'next/font/google'

// Initialize fonts
const _heebo = V0_Font_Heebo({ subsets: ['latin'], weight: ["100","200","300","400","500","600","700","800","900"] })
const _geistMono = V0_Font_Geist_Mono({ subsets: ['latin'], weight: ["100","200","300","400","500","600","700","800","900"] })
const _sourceSerif_4 = V0_Font_Source_Serif_4({ subsets: ['latin'], weight: ["200","300","400","500","600","700","800","900"] })

// Initialize System Design fonts
const rubik = Rubik({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
})

const robotoSlab = Roboto_Slab({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-serif",
  display: "swap",
})

const rubikMono = Rubik_Mono_1({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-mono",
  display: "swap",
})

export const metadata: Metadata = {
  title: "New Haze - Cultivá tu Futuro",
  description: "Marca innovadora en cultivo indoor. Ciencia, naturaleza y comunidad cultivadora.",
  generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme') || 'dark';
                  if (theme === 'dark') {
                    document.documentElement.classList.add('dark');
                    document.documentElement.style.colorScheme = 'dark';
                  } else {
                    document.documentElement.classList.remove('dark');
                    document.documentElement.style.colorScheme = 'light';
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className={`font-sans ${rubik.variable} ${robotoSlab.variable} ${rubikMono.variable}`}>
        <ClerkProvider
          appearance={{
            theme: dark,
          }}
        >
          <ThemeProvider 
            attribute="class" 
            defaultTheme="dark" 
            enableSystem={false}
            storageKey="theme"
            disableTransitionOnChange
          >
            <BlogNavProvider>
              {children}
            </BlogNavProvider>
          </ThemeProvider>
        </ClerkProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
