import { Button } from "@/components/ui/button"
import { Brain, Search, Mic, Star } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative py-20 px-4 text-center">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-center mb-6">
          <div className="p-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full">
            <Brain className="w-12 h-12 text-white" />
          </div>
        </div>

        <h1 className="text-5xl font-bold text-gray-900 mb-6">
          Enciclopedia de{" "}
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Sistemas Inteligentes
          </span>
        </h1>

        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Descubre el fascinante mundo de la Inteligencia Artificial. Explora conceptos, herramientas y software de IA
          con búsqueda avanzada y reconocimiento de voz.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button
            asChild
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
          >
            <Link href="/conceptos">
              <Search className="w-5 h-5 mr-2" />
              Explorar Conceptos
            </Link>
          </Button>

          <Button asChild variant="outline" size="lg">
            <Link href="/catalogo">
              <Star className="w-5 h-5 mr-2" />
              Catálogo de Software
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
          <div className="p-6 bg-white rounded-lg shadow-sm border">
            <Search className="w-8 h-8 text-blue-600 mb-3 mx-auto" />
            <h3 className="font-semibold mb-2">Búsqueda Avanzada</h3>
            <p className="text-sm text-gray-600">Encuentra información por múltiples campos y filtros</p>
          </div>

          <div className="p-6 bg-white rounded-lg shadow-sm border">
            <Mic className="w-8 h-8 text-purple-600 mb-3 mx-auto" />
            <h3 className="font-semibold mb-2">Búsqueda por Voz</h3>
            <p className="text-sm text-gray-600">Usa lenguaje natural para encontrar contenido</p>
          </div>

          <div className="p-6 bg-white rounded-lg shadow-sm border">
            <Star className="w-8 h-8 text-green-600 mb-3 mx-auto" />
            <h3 className="font-semibold mb-2">Sistema de Puntuación</h3>
            <p className="text-sm text-gray-600">Califica y revisa el contenido consultado</p>
          </div>
        </div>
      </div>
    </section>
  )
}
