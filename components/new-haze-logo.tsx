"use client"

import Link from "next/link"

interface NewHazeLogoProps {
  className?: string
  href?: string
}

export default function NewHazeLogo({ className = "h-[70px]", href = "/" }: NewHazeLogoProps) {
  return (
    <Link
      href={href}
      aria-label="Inicio"
      className="inline-flex items-center transition-opacity duration-300 hover:opacity-80"
    >
      <svg
        className={`${className} text-foreground transition-colors duration-300`}
        viewBox="0 0 240 120"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid meet"
      >
        {/* Logo background circle */}
        <circle cx="30" cy="60" r="28" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.3" />

        {/* Logo icon - stylized N and H */}
        <g fill="currentColor">
          {/* N shape */}
          <path
            d="M 15 40 L 15 80 M 45 40 L 45 80 M 15 80 L 45 40"
            strokeWidth="3"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* H shape */}
          <path
            d="M 60 40 L 60 80 M 90 40 L 90 80 M 60 60 L 90 60"
            strokeWidth="3"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>

        {/* Text "New Haze" */}
        <text
          x="110"
          y="70"
          fontSize="24"
          fontWeight="600"
          fill="currentColor"
          fontFamily="Montserrat, sans-serif"
          letterSpacing="-0.5"
        >
          New Haze
        </text>
      </svg>
    </Link>
  )
}
