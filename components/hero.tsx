"use client"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { Brain, Cpu, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { GuidedTour } from "@/components/guided-tour"
import { VoiceSearch } from "@/components/voice-search"

export function Hero() {
  const router = useRouter()
  const [showTour, setShowTour] = useState(false)

  const handleExploreClick = () => {
    setShowTour(true)
  }

  const handleHeroSearch = (query: string) => {
    // Solo buscar herramientas SIN hacer scroll automático
    // Disparar evento para que el catálogo de herramientas filtre los resultados
    const event = new CustomEvent("heroSearch", { detail: { query } })
    window.dispatchEvent(event)
  }

  const handleHeroConceptFound = (concept: string) => {
    // Solo abrir modal de concepto SIN hacer scroll automático
    // Disparar evento para abrir el modal directamente
    const event = new CustomEvent("openConceptModal", { detail: { concept } })
    window.dispatchEvent(event)
  }

  return (
    <section className="py-20 px-4 text-center">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-center mb-6">
          <div className="p-4 bg-blue-600 rounded-full">
            <Brain className="w-12 h-12 text-white" />
          </div>
        </div>
        <h1 className="text-5xl font-bold text-gray-900 mb-6">Enciclopedia de Inteligencia Artificial</h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Explora el fascinante mundo de la IA: desde sus fundamentos teóricos hasta las herramientas más avanzadas del
          mercado
        </p>

        {/* Voice Search in Hero - SIN scroll automático */}
        <div className="mb-8">
          <VoiceSearch
            onSearch={handleHeroSearch}
            onConceptFound={handleHeroConceptFound}
            placeholder="Busca herramientas o conceptos de IA... (ej: 'TensorFlow', 'IA débil')"
            searchType="both"
            className="max-w-xl"
            enableAutoScroll={false} // ← DESHABILITADO completamente
          />
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
            <Cpu className="w-5 h-5 text-blue-600" />
            <span className="text-sm font-medium">Machine Learning</span>
          </div>
          <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
            <Zap className="w-5 h-5 text-green-600" />
            <span className="text-sm font-medium">Deep Learning</span>
          </div>
          <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
            <Brain className="w-5 h-5 text-purple-600" />
            <span className="text-sm font-medium">Redes Neuronales</span>
          </div>
        </div>
        <Button size="lg" className="bg-blue-600 hover:bg-blue-700" onClick={handleExploreClick}>
          Comenzar Exploración
        </Button>
        <GuidedTour isOpen={showTour} onClose={() => setShowTour(false)} />
      </div>
    </section>
  )
}
