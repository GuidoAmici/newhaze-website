"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { BookOpen, Clock, Users, Star, ArrowRight } from "lucide-react"

export default function FeaturedClasses() {
  const featuredClasses = [
    {
      id: 1,
      title: "Fundamentos del Cultivo Hidropónico",
      description: "Aprende los principios básicos de la hidroponía y cómo implementarla en tu espacio.",
      category: "Principiante",
      level: "Nivel 1",
      duration: "4 semanas",
      students: 1245,
      rating: 4.8,
      color: "#00B57C",
      icon: "💧",
      progress: 45,
      relevance: "Alto",
    },
    {
      id: 2,
      title: "Control de Clima y Ambiente",
      description: "Domina las variables ambientales para crear el espacio de cultivo perfecto.",
      category: "Intermedio",
      level: "Nivel 3-5",
      duration: "6 semanas",
      students: 892,
      rating: 4.9,
      color: "#855CF2",
      icon: "🌡️",
      progress: 20,
      relevance: "Alto",
    },
    {
      id: 3,
      title: "Nutrición Avanzada en Cultivos",
      description: "Desarrolla estrategias de nutrición personalizadas para maximizar rendimiento.",
      category: "Avanzado",
      level: "Nivel 5+",
      duration: "8 semanas",
      students: 523,
      rating: 4.95,
      color: "#F18604",
      icon: "🧪",
      progress: 0,
      relevance: "Muy Alto",
    },
  ]

  return (
    <div className="space-y-8">
      <div>
        <h2
          className="text-3xl sm:text-4xl font-bold mb-2"
          style={{ fontFamily: "HVD Poster, sans-serif" }}
        >
          Clases Recomendadas para Ti
        </h2>
        <p className="text-muted-foreground" style={{ fontFamily: "Montserrat, sans-serif" }}>
          Contenido personalizado basado en tu nivel y progreso
        </p>
      </div>

      <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-6">
        {featuredClasses.map((course) => (
          <Card
            key={course.id}
            className="overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col"
          >
            {/* Header with color accent */}
            <div
              className="h-32 relative overflow-hidden"
              style={{ backgroundColor: course.color }}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-6xl opacity-80">{course.icon}</div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>

            {/* Content */}
            <div className="p-6 flex-1 flex flex-col">
              {/* Title and category */}
              <div className="mb-4">
                <div className="flex items-start justify-between gap-3 mb-3">
                  <h3 className="font-bold text-lg flex-1" style={{ fontFamily: "HVD Poster, sans-serif" }}>
                    {course.title}
                  </h3>
                  <Badge variant="secondary" className="shrink-0">
                    {course.category}
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground line-clamp-2">{course.description}</p>
              </div>

              {/* Progress bar */}
              {course.progress > 0 && (
                <div className="mb-4 pb-4 border-b border-border">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs font-semibold text-foreground">Progreso</span>
                    <span className="text-xs text-muted-foreground">{course.progress}%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                    <div
                      className="bg-gradient-to-r from-[#855CF2] to-[#00B57C] h-full rounded-full transition-all"
                      style={{ width: `${course.progress}%` }}
                    ></div>
                  </div>
                </div>
              )}

              {/* Metadata */}
              <div className="grid grid-cols-2 gap-4 mb-4 pb-4 border-b border-border text-xs">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Clock className="w-4 h-4" />
                  {course.duration}
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Users className="w-4 h-4" />
                  {course.students.toLocaleString()}
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <BookOpen className="w-4 h-4" />
                  {course.level}
                </div>
                <div className="flex items-center gap-2 text-[#F18604]">
                  <Star className="w-4 h-4 fill-[#F18604]" />
                  {course.rating}
                </div>
              </div>

              {/* Relevance badge and button */}
              <div className="flex items-center justify-between gap-2">
                <Badge variant="outline" className="text-xs">
                  {course.relevance} relevancia
                </Badge>
                <Button size="sm" variant="ghost" className="gap-1">
                  Iniciar
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
