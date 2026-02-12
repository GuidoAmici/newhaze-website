"use client"

import Header from "@/components/header"
import StudentProfile from "@/components/learn/student-profile"
import FeaturedClasses from "@/components/learn/featured-classes"
import StudyPathMap from "@/components/learn/study-path-map"
import ChatbotWidget from "@/components/learn/chatbot-widget"

export default function LearnPage() {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Header />

      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-[#855CF2] to-[#6B46C1] relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <h1
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 text-balance"
            style={{ fontFamily: "HVD Poster, sans-serif" }}
          >
            Aprende, Cultiva, Crece
          </h1>
          <p
            className="text-base sm:text-lg text-white/80 max-w-2xl mx-auto text-pretty"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            Tu camino personalizado hacia el dominio del cultivo indoor. Clases, desafíos y comunidad que te acompañan.
          </p>
        </div>
      </section>

      {/* Student Profile Section */}
      <section className="py-12 sm:py-16 bg-card">
        <div className="container mx-auto px-4 sm:px-6">
          <StudentProfile />
        </div>
      </section>

      {/* Featured Classes Section */}
      <section className="py-12 sm:py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6">
          <FeaturedClasses />
        </div>
      </section>

      {/* Study Path Map Section */}
      <section className="py-12 sm:py-16 bg-muted">
        <div className="container mx-auto px-4 sm:px-6">
          <StudyPathMap />
        </div>
      </section>

      {/* Chatbot Widget */}
      <ChatbotWidget />
    </div>
  )
}
