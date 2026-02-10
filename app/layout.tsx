import type React from "react"
import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { BlogNavProvider } from "@/components/blog-nav-provider"
import { ClerkProvider } from "@clerk/nextjs"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"

import { Heebo, Rubik as V0_Font_Rubik, Oxanium as V0_Font_Oxanium, Source_Serif_4 as V0_Font_Source_Serif_4 } from 'next/font/google'

// Initialize fonts
const _rubik = V0_Font_Rubik({ subsets: ['latin'], weight: ["300","400","500","600","700","800","900"] })
const _oxanium = V0_Font_Oxanium({ subsets: ['latin'], weight: ["200","300","400","500","600","700","800"] })
const _sourceSerif_4 = V0_Font_Source_Serif_4({ subsets: ['latin'], weight: ["200","300","400","500","600","700","800","900"] })

const heebo = Heebo({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-heebo",
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
      <body className={`font-sans ${heebo.variable}`}>
        <ClerkProvider>
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
