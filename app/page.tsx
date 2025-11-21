import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Leaf, Users, Lightbulb, Heart, ArrowRight, Microscope, Sprout } from "lucide-react"
import Header from "@/components/header"
import Link from "next/link"

export default function NewHazeLanding() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #855CF2 0%, #6B46C1 50%, #4C1D95 100%)",
        }}
      >
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-40 right-32 w-24 h-24 border border-white/20 rotate-45"></div>
          <div className="absolute bottom-32 left-1/4 w-16 h-16 border-2 border-white/25 rounded-full"></div>
          <div className="absolute bottom-20 right-20 w-20 h-20 border border-white/30 rotate-12"></div>
        </div>

        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <h1
              className="text-6xl md:text-8xl font-bold text-white mb-8 leading-tight"
              style={{ fontFamily: "HVD Poster, sans-serif" }}
            >
              CULTIVÁ TU
              <br />
              <span className="bg-clip-text text-[F18604] text-chart-5">FUTURO</span>
            </h1>
            <p
              className="text-xl md:text-2xl text-white/90 mb-12 font-light"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              Innovación, ciencia y naturaleza se encuentran en New Haze.
              <br />
              Donde cada cultivo es una obra de arte.
            </p>
            <Link href="/blog">
              <Button
                size="lg"
                className="bg-[#F18604] hover:bg-[#E07503] text-white px-8 py-4 text-lg font-semibold rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                Descubrí más
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              </Link>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-[#0E0E12] mb-6" style={{ fontFamily: "HVD Poster, sans-serif" }}>
              NUESTRA MISIÓN
            </h2>
            <div className="w-24 h-1 bg-[#855CF2] mx-auto mb-8"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <div className="space-y-8">
              <Card className="p-8 border-l-4 border-l-[#00B57C] shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-start space-x-4">
                  <div className="bg-[#00B57C] p-3 rounded-full">
                    <Lightbulb className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3
                      className="text-2xl font-bold text-[#0E0E12] mb-3"
                      style={{ fontFamily: "HVD Poster, sans-serif" }}
                    >
                      INNOVACIÓN
                    </h3>
                    <p className="text-gray-700 leading-relaxed" style={{ fontFamily: "Montserrat, sans-serif" }}>
                      Revolucionamos el cultivo indoor con tecnología de vanguardia y métodos científicos que maximizan
                      el potencial de cada planta.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-8 border-l-4 border-l-[#855CF2] shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-start space-x-4">
                  <div className="bg-[#855CF2] p-3 rounded-full">
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3
                      className="text-2xl font-bold text-[#0E0E12] mb-3"
                      style={{ fontFamily: "HVD Poster, sans-serif" }}
                    >
                      PASIÓN
                    </h3>
                    <p className="text-gray-700 leading-relaxed" style={{ fontFamily: "Montserrat, sans-serif" }}>
                      Cada producto nace de la pasión por el cultivo perfecto, combinando arte, ciencia y dedicación en
                      cada detalle.
                    </p>
                  </div>
                </div>
              </Card>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-[#855CF2] to-[#6B46C1] p-8 rounded-3xl text-white shadow-2xl">
                <h3 className="text-3xl font-bold mb-6" style={{ fontFamily: "HVD Poster, sans-serif" }}>
                  NUESTRA VISIÓN
                </h3>
                <p className="text-lg leading-relaxed mb-6" style={{ fontFamily: "Montserrat, sans-serif" }}>
                  Ser la marca líder que conecta ciencia y naturaleza, creando una comunidad global de cultivadores que
                  transforman espacios en ecosistemas prósperos.
                </p>
                <div className="flex space-x-4">
                  <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                    Sustentabilidad
                  </Badge>
                  <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                    Comunidad
                  </Badge>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="py-20 bg-gradient-to-br from-[#00B57C] to-[#059669] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-40 h-40 border-2 border-white/30 rounded-full"></div>
          <div className="absolute bottom-10 right-10 w-32 h-32 border border-white/20 rotate-45"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-6" style={{ fontFamily: "HVD Poster, sans-serif" }}>
              COMUNIDAD CULTIVADORA
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto" style={{ fontFamily: "Montserrat, sans-serif" }}>
              Más que productos, creamos conexiones. Somos una familia de cultivadores que comparte conocimiento,
              experiencias y pasión.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="bg-white/95 backdrop-blur-sm p-8 text-center shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="bg-[#855CF2] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#0E0E12] mb-4" style={{ fontFamily: "HVD Poster, sans-serif" }}>
                +10K CULTIVADORES
              </h3>
              <p className="text-gray-700" style={{ fontFamily: "Montserrat, sans-serif" }}>
                Una comunidad activa que comparte tips, técnicas y celebra cada cosecha exitosa.
              </p>
            </Card>

            <Card className="bg-white/95 backdrop-blur-sm p-8 text-center shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="bg-[#F18604] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Lightbulb className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#0E0E12] mb-4" style={{ fontFamily: "HVD Poster, sans-serif" }}>
                INNOVACIÓN CONSTANTE
              </h3>
              <p className="text-gray-700" style={{ fontFamily: "Montserrat, sans-serif" }}>
                Desarrollamos soluciones basadas en las necesidades reales de nuestra comunidad.
              </p>
            </Card>

            <Card className="bg-white/95 backdrop-blur-sm p-8 text-center shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="bg-[#00B57C] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#0E0E12] mb-4" style={{ fontFamily: "HVD Poster, sans-serif" }}>
                SOPORTE 24/7
              </h3>
              <p className="text-gray-700" style={{ fontFamily: "Montserrat, sans-serif" }}>
                Acompañamos cada etapa de tu cultivo con asesoramiento experto y personalizado.
              </p>
            </Card>
          </div>

          <div className="text-center mt-16">
            <blockquote
              className="text-2xl font-light text-white/95 italic max-w-4xl mx-auto"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              "New Haze no solo me dio las herramientas, me dio una familia. Cada cultivo es una nueva aventura
              compartida."
            </blockquote>
            <p className="text-white/80 mt-4 font-semibold">- María, Cultivadora desde 2022</p>
          </div>
        </div>
      </section>

      {/* Products Showcase */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-[#0E0E12] mb-6" style={{ fontFamily: "HVD Poster, sans-serif" }}>
              HERRAMIENTAS DE INNOVACIÓN
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto" style={{ fontFamily: "Montserrat, sans-serif" }}>
              Productos diseñados por cultivadores, para cultivadores. Cada herramienta es el resultado de años de
              investigación y feedback de nuestra comunidad.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: "Kit Starter Pro",
                description: "Todo lo necesario para comenzar tu primer cultivo indoor con garantía de éxito.",
                color: "#855CF2",
              },
              {
                title: "Nutrientes Avanzados",
                description: "Fórmulas científicamente desarrolladas para maximizar el crecimiento y la calidad.",
                color: "#00B57C",
              },
              {
                title: "Sistema de Monitoreo",
                description: "Tecnología IoT para controlar y optimizar las condiciones de cultivo remotamente.",
                color: "#F18604",
              },
            ].map((product, index) => (
              <Card
                key={index}
                className="group overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="h-48 relative overflow-hidden" style={{ backgroundColor: product.color }}>
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center">
                      <Leaf className="w-12 h-12 text-white" />
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3
                    className="text-2xl font-bold text-[#0E0E12] mb-3"
                    style={{ fontFamily: "HVD Poster, sans-serif" }}
                  >
                    {product.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed" style={{ fontFamily: "Montserrat, sans-serif" }}>
                    {product.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-lg text-gray-600 mb-6" style={{ fontFamily: "Montserrat, sans-serif" }}>
              Nuestros productos son el medio, no el fin. El verdadero valor está en la comunidad que construimos
              juntos.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-[#0E0E12] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-32 h-32 border-2 border-[#855CF2]/30 rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-32 w-24 h-24 border border-[#00B57C]/20 rotate-45"></div>
          <div className="absolute bottom-32 left-1/4 w-16 h-16 border-2 border-[#F18604]/25 rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-20 h-20 border border-[#855CF2]/30 rotate-12"></div>
        </div>

        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-center text-6xl font-bold text-white mb-8" style={{ fontFamily: "HVD Poster, sans-serif" }}>
              UNITE A LA
              <br />
              <span className="text-center text-transparent bg-clip-text bg-gradient-to-r from-[#855CF2] to-[#00B57C]">
                REVOLUCIÓN
              </span>
            </h2>
            <p className="text-xl text-white/90 mb-12 leading-relaxed" style={{ fontFamily: "Montserrat, sans-serif" }}>
              Sé parte de una comunidad que está redefiniendo el cultivo indoor.
              <br />
              Donde la ciencia, la naturaleza y la pasión se encuentran.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button
                size="lg"
                className="bg-[#F18604] hover:bg-[#E07503] text-white px-12 py-4 text-lg font-semibold rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                Unirme a la Comunidad
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="border-2 border-[#855CF2] text-[#855CF2] hover:bg-[#855CF2] hover:text-white px-12 py-4 text-lg font-semibold rounded-full transition-all duration-300 bg-transparent"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                Conocer más
              </Button>
            </div>

            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div
                  className="text-3xl font-bold text-[#855CF2] mb-2"
                  style={{ fontFamily: "HVD Poster, sans-serif" }}
                >
                  10K+
                </div>
                <div className="text-white/70" style={{ fontFamily: "Montserrat, sans-serif" }}>
                  Cultivadores
                </div>
              </div>
              <div>
                <div
                  className="text-3xl font-bold text-[#00B57C] mb-2"
                  style={{ fontFamily: "HVD Poster, sans-serif" }}
                >
                  50+
                </div>
                <div className="text-white/70" style={{ fontFamily: "Montserrat, sans-serif" }}>
                  Productos
                </div>
              </div>
              <div>
                <div
                  className="text-3xl font-bold text-[#F18604] mb-2"
                  style={{ fontFamily: "HVD Poster, sans-serif" }}
                >
                  24/7
                </div>
                <div className="text-white/70" style={{ fontFamily: "Montserrat, sans-serif" }}>
                  Soporte
                </div>
              </div>
              <div>
                <div
                  className="text-3xl font-bold text-[#855CF2] mb-2"
                  style={{ fontFamily: "HVD Poster, sans-serif" }}
                >
                  100%
                </div>
                <div className="text-white/70" style={{ fontFamily: "Montserrat, sans-serif" }}>
                  Innovación
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
