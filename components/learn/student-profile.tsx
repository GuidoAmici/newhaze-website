"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Award, Trophy, Zap } from "lucide-react"

export default function StudentProfile() {
  // Mock data - en producción esto vendría de una API/database
  const studentData = {
    name: "Alex",
    level: 5,
    currentXP: 2450,
    nextLevelXP: 3000,
    medals: [
      { name: "Cultivador Principiante", icon: "🌱", color: "#00B57C" },
      { name: "Coleccionista de Plantas", icon: "🌿", color: "#855CF2" },
    ],
    trophies: [
      { name: "Primera Cosecha", achieved: true },
      { name: "Experto en Nutrientes", achieved: true },
      { name: "Maestro del Control de Clima", achieved: false },
      { name: "Comunicador", achieved: true },
    ],
    stats: {
      coursesCompleted: 8,
      streakDays: 12,
      communityHelped: 24,
    },
  }

  const xpPercentage = (studentData.currentXP / studentData.nextLevelXP) * 100

  return (
    <div className="space-y-8">
      {/* Level Card */}
      <Card className="overflow-hidden bg-gradient-to-r from-[#855CF2] to-[#6B46C1] border-none text-white shadow-lg">
        <div className="p-6 sm:p-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Left: Level Badge */}
            <div className="flex flex-col items-center justify-center md:items-start">
              <div className="relative w-32 h-32 flex items-center justify-center mb-6">
                <div className="absolute inset-0 bg-white/20 rounded-full"></div>
                <div className="text-6xl font-bold z-10">
                  {studentData.level}
                </div>
              </div>
              <h2
                className="text-2xl sm:text-3xl font-bold text-center md:text-left text-balance"
    
              >
                {studentData.name}
              </h2>
              <p className="text-white/80 mt-2">Cultivador Nivel {studentData.level}</p>
            </div>

            {/* Right: Stats and Progress */}
            <div className="space-y-6">
              {/* XP Progress */}
              <div>
                <div className="flex justify-between items-center mb-3">
                  <span className="text-sm font-semibold flex items-center gap-2">
                    <Zap className="w-4 h-4" />
                    Experiencia
                  </span>
                  <span className="text-sm">
                    {studentData.currentXP} / {studentData.nextLevelXP} XP
                  </span>
                </div>
                <div className="w-full bg-white/20 rounded-full h-3 overflow-hidden">
                  <div
                    className="bg-white h-full rounded-full transition-all duration-300"
                    style={{ width: `${xpPercentage}%` }}
                  ></div>
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-3 gap-4 pt-4 border-t border-white/20">
                <div>
                  <div className="text-2xl font-bold">{studentData.stats.coursesCompleted}</div>
                  <div className="text-xs text-white/70">Cursos</div>
                </div>
                <div>
                  <div className="text-2xl font-bold">{studentData.stats.streakDays}</div>
                  <div className="text-xs text-white/70">Día de racha</div>
                </div>
                <div>
                  <div className="text-2xl font-bold">{studentData.stats.communityHelped}</div>
                  <div className="text-xs text-white/70">Ayudas</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Card>

      {/* Medals and Trophies */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Medals */}
        <Card className="p-6 sm:p-8">
          <h3 className="text-xl font-bold mb-6 flex items-center gap-2" style={{ fontFamily: "HVD Poster, sans-serif" }}>
            <Award className="w-5 h-5 text-[#855CF2]" />
            Medallas Obtenidas
          </h3>
          <div className="grid grid-cols-2 gap-4">
            {studentData.medals.map((medal, index) => (
              <div key={index} className="flex flex-col items-center text-center p-4 rounded-lg bg-card hover:bg-muted transition-colors">
                <div className="text-4xl mb-2">{medal.icon}</div>
                <p className="text-sm font-semibold text-foreground">{medal.name}</p>
              </div>
            ))}
          </div>
        </Card>

        {/* Trophies */}
        <Card className="p-6 sm:p-8">
          <h3 className="text-xl font-bold mb-6 flex items-center gap-2" style={{ fontFamily: "HVD Poster, sans-serif" }}>
            <Trophy className="w-5 h-5 text-[#F18604]" />
            Logros Desbloqueados
          </h3>
          <div className="space-y-3">
            {studentData.trophies.map((trophy, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-3 rounded-lg bg-card hover:bg-muted transition-colors"
              >
                <div className={`w-2 h-2 rounded-full ${trophy.achieved ? "bg-[#00B57C]" : "bg-muted-foreground/30"}`}></div>
                <span className={`text-sm ${trophy.achieved ? "text-foreground font-medium" : "text-muted-foreground"}`}>
                  {trophy.name}
                </span>
                {trophy.achieved && <Badge variant="secondary" className="ml-auto text-xs">Desbloqueado</Badge>}
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  )
}
