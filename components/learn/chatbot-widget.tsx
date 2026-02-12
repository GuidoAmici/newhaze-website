"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { MessageCircle, X, Send, Loader } from "lucide-react"
import { ScrollArea } from "@/components/ui/scroll-area"

interface Message {
  id: string
  type: "user" | "bot"
  content: string
  timestamp: Date
}

export default function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      type: "bot",
      content: "¡Hola! Soy tu asistente de aprendizaje. Puedo ayudarte con dudas sobre cultivo, evaluarte en temas específicos o guiarte en tu camino de estudio. ¿En qué puedo ayudarte?",
      timestamp: new Date(),
    },
  ])
  const [inputValue, setInputValue] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const scrollRef = useRef<HTMLDivElement>(null)

  // Auto-scroll to latest message
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: "smooth" })
    }
  }, [messages])

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!inputValue.trim()) return

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      type: "user",
      content: inputValue,
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInputValue("")
    setIsLoading(true)

    // Simulate bot response delay
    setTimeout(() => {
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: "bot",
        content: generateBotResponse(inputValue),
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, botMessage])
      setIsLoading(false)
    }, 800)
  }

  const generateBotResponse = (userInput: string): string => {
    const input = userInput.toLowerCase()

    if (input.includes("nivel") || input.includes("progreso")) {
      return "Tu progreso actual es de nivel 5 con 2450 XP. ¡Casi alcanzas el siguiente nivel! Completa la clase de 'Control de Clima' para ganar 300 XP más."
    } else if (input.includes("próxima clase") || input.includes("qué debo estudiar")) {
      return "Basado en tu nivel, te recomiendo continuar con 'Control de Clima y Ambiente'. Ya has completado el 20% del módulo. ¿Quieres retomar donde dejaste?"
    } else if (input.includes("ayuda") || input.includes("cómo")) {
      return "Puedo ayudarte a:\n• Explicar conceptos de cultivo\n• Evaluarte en temas específicos\n• Recomendarte clases\n• Resolver dudas técnicas\n\n¿Hay algún tema específico sobre el que quieras aprender?"
    } else if (input.includes("dudas") || input.includes("pregunta")) {
      return "¡Claro! Adelante, cuéntame tu duda sobre cultivo, nutrición, control de clima o cualquier otro aspecto del cultivo indoor. Haré mi mejor esfuerzo para ayudarte."
    } else if (input.includes("evalúa") || input.includes("test") || input.includes("examen")) {
      return "¿Quieres ser evaluado? Puedo hacerte un test rápido (5 preguntas) o uno completo (20 preguntas) sobre:\n• Fundamentos de Hidroponía\n• Control de Clima\n• Nutrición de Plantas\n\n¿Cuál prefieres?"
    } else {
      return "Esa es una gran pregunta. Para ayudarte mejor, ¿puedes darme más detalles? Estoy aquí para resolver tus dudas, evaluarte o guiarte en tu camino de aprendizaje."
    }
  }

  return (
    <>
      {/* Chatbot Button */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 rounded-full w-14 h-14 p-0 shadow-lg hover:shadow-xl transition-all duration-300 z-40 bg-[#855CF2] hover:bg-[#6B46C1]"
        aria-label="Abrir chat"
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
      </Button>

      {/* Chatbot Widget */}
      {isOpen && (
        <Card className="fixed bottom-24 right-6 w-96 max-w-[calc(100vw-2rem)] h-96 shadow-2xl z-40 flex flex-col border-none overflow-hidden animate-in slide-in-from-bottom-2 fade-in duration-300">
          {/* Header */}
          <div className="bg-gradient-to-r from-[#855CF2] to-[#6B46C1] px-4 py-4 text-white flex items-center justify-between">
            <div>
              <h3 className="font-bold" style={{ fontFamily: "HVD Poster, sans-serif" }}>
                Asistente Educativo
              </h3>
              <p className="text-xs opacity-90">Siempre disponible para ayudarte</p>
            </div>
          </div>

          {/* Messages */}
          <ScrollArea className="flex-1 p-4 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.type === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-xs px-4 py-2 rounded-lg text-sm ${
                    message.type === "user"
                      ? "bg-[#855CF2] text-white rounded-br-none"
                      : "bg-muted text-foreground rounded-bl-none"
                  }`}
                >
                  <p className="whitespace-pre-wrap">{message.content}</p>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-muted px-4 py-2 rounded-lg flex items-center gap-2">
                  <Loader className="w-4 h-4 animate-spin text-[#855CF2]" />
                  <span className="text-xs text-muted-foreground">Escribiendo...</span>
                </div>
              </div>
            )}
            <div ref={scrollRef} />
          </ScrollArea>

          {/* Input */}
          <div className="border-t border-border p-4">
            <form onSubmit={handleSendMessage} className="flex gap-2">
              <Input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Escribe tu pregunta..."
                className="flex-1 text-sm h-9"
                disabled={isLoading}
              />
              <Button
                type="submit"
                size="sm"
                disabled={isLoading || !inputValue.trim()}
                className="bg-[#855CF2] hover:bg-[#6B46C1] w-9 h-9 p-0"
              >
                <Send className="w-4 h-4" />
              </Button>
            </form>
          </div>
        </Card>
      )}
    </>
  )
}
