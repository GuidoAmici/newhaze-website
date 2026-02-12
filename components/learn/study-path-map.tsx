"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2, Circle, Lock } from "lucide-react"

export default function StudyPathMap() {
  const studyPaths = [
    {
      name: "Camino Esencial",
      description: "Fundamentos necesarios para todo cultivador",
      color: "#00B57C",
      modules: [
        { title: "Inicio en Hidroponía", status: "completed" },
        { title: "Fundamentos de Plantas", status: "completed" },
        { title: "Introducción a Sistemas", status: "in-progress" },
        { title: "Primeros Pasos Prácticos", status: "locked" },
      ],
    },
    {
      name: "Especialización Ambiental",
      description: "Domina el control de clima y medio ambiente",
      color: "#855CF2",
      modules: [
        { title: "Conceptos de Clima", status: "completed" },
        { title: "Control de Temperatura", status: "in-progress" },
        { title: "Humedad y CO2", status: "locked" },
        { title: "Diseño de Sistemas Climáticos", status: "locked" },
        { title: "Optimización Avanzada", status: "locked" },
      ],
    },
    {
      name: "Especialización Nutricional",
      description: "Experto en nutrición y salud de plantas",
      color: "#F18604",
      modules: [
        { title: "Bases de Nutrición", status: "completed" },
        { title: "Macronutrientes", status: "locked" },
        { title: "Micronutrientes", status: "locked" },
        { title: "Ajuste de pH y EC", status: "locked" },
        { title: "Nutrición Avanzada", status: "locked" },
      ],
    },
  ]

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircle2 className="w-5 h-5 text-[#00B57C]" />
      case "in-progress":
        return <Circle className="w-5 h-5 text-[#F18604] fill-[#F18604]" />
      case "locked":
        return <Lock className="w-5 h-5 text-muted-foreground" />
      default:
        return null
    }
  }

  const getStatusText = (status: string) => {
    switch (status) {
      case "completed":
        return "Completado"
      case "in-progress":
        return "En progreso"
      case "locked":
        return "Bloqueado"
      default:
        return ""
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-[#00B57C]/10 text-[#00B57C]"
      case "in-progress":
        return "bg-[#F18604]/10 text-[#F18604]"
      case "locked":
        return "bg-muted text-muted-foreground"
      default:
        return ""
    }
  }

  return (
    <div className="space-y-8">
      <div>
        <h2
          className="text-3xl sm:text-4xl font-bold mb-2"
          style={{ fontFamily: "HVD Poster, sans-serif" }}
        >
          Mapa de Caminos de Estudio
        </h2>
        <p className="text-muted-foreground" >
          Estructura tu aprendizaje en caminos temáticos. Elige especialidades opcionales para profundizar.
        </p>
      </div>

      <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-6">
        {studyPaths.map((path, pathIndex) => (
          <Card key={pathIndex} className="overflow-hidden">
            {/* Header */}
            <div
              className="px-6 py-4 text-white"
              style={{ backgroundColor: path.color }}
            >
              <h3
                className="text-lg sm:text-xl font-bold mb-1"
    
              >
                {path.name}
              </h3>
              <p className="text-sm opacity-90">{path.description}</p>
            </div>

            {/* Modules */}
            <div className="p-6 space-y-3">
              {path.modules.map((module, moduleIndex) => (
                <div key={moduleIndex} className="flex items-start gap-3">
                  <div className="pt-0.5 flex-shrink-0">
                    {getStatusIcon(module.status)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-sm text-foreground line-clamp-2">
                      {module.title}
                    </p>
                    <p className={`text-xs mt-1 font-medium ${getStatusColor(module.status)}`}>
                      {getStatusText(module.status)}
                    </p>
                  </div>
                </div>
              ))}

              {/* Progress bar */}
              <div className="pt-4 border-t border-border">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs font-semibold text-foreground">Progreso del camino</span>
                  <span className="text-xs text-muted-foreground">
                    {Math.round(
                      (path.modules.filter((m) => m.status === "completed").length /
                        path.modules.length) *
                        100
                    )}
                    %
                  </span>
                </div>
                <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all"
                    style={{
                      width: `${
                        (path.modules.filter((m) => m.status === "completed").length /
                          path.modules.length) *
                        100
                      }%`,
                      backgroundColor: path.color,
                    }}
                  ></div>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Legend */}
      <Card className="p-6 bg-muted/50 border-muted">
        <h4 className="font-semibold mb-4">Leyenda de Estados</h4>
        <div className="grid sm:grid-cols-3 gap-4">
          <div className="flex items-center gap-3">
            <CheckCircle2 className="w-5 h-5 text-[#00B57C]" />
            <span className="text-sm text-foreground">Completado</span>
          </div>
          <div className="flex items-center gap-3">
            <Circle className="w-5 h-5 text-[#F18604] fill-[#F18604]" />
            <span className="text-sm text-foreground">En progreso</span>
          </div>
          <div className="flex items-center gap-3">
            <Lock className="w-5 h-5 text-muted-foreground" />
            <span className="text-sm text-foreground">Bloqueado</span>
          </div>
        </div>
      </Card>
    </div>
  )
}
