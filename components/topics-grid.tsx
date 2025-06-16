"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Brain, Search, Cpu, MessageSquare, Eye, Gamepad2, Network, BookOpen } from "lucide-react"
import { TopicDetailModal } from "@/components/topic-detail-modal"
import { VoiceSearch } from "@/components/voice-search"

const topics = [
  {
    id: "fundamentos",
    title: "Fundamentos de IA",
    description: "Historia, definiciones, tipos de IA y conceptos básicos",
    icon: Brain,
    color: "bg-blue-100 text-blue-600",
    concepts: ["IA Débil vs Fuerte", "Test de Turing", "Agentes Inteligentes", "Niveles Funcionales"],
  },
  {
    id: "busqueda",
    title: "Búsqueda y Resolución",
    description: "Algoritmos de búsqueda y resolución de problemas",
    icon: Search,
    color: "bg-green-100 text-green-600",
    concepts: ["Espacio de Estados", "A*", "BFS/DFS", "Heurísticas"],
  },
  {
    id: "aprendizaje",
    title: "Machine Learning",
    description: "Aprendizaje automático y redes neuronales",
    icon: Cpu,
    color: "bg-purple-100 text-purple-600",
    concepts: ["Supervisado", "No Supervisado", "Refuerzo", "Deep Learning"],
  },
  {
    id: "lenguaje",
    title: "Procesamiento de Lenguaje",
    description: "PLN y comprensión del lenguaje natural",
    icon: MessageSquare,
    color: "bg-orange-100 text-orange-600",
    concepts: ["NLP", "Chatbots", "Traducción", "Análisis de Sentimientos"],
  },
  {
    id: "vision",
    title: "Visión Artificial",
    description: "Reconocimiento de patrones e imágenes",
    icon: Eye,
    color: "bg-red-100 text-red-600",
    concepts: ["CNN", "Reconocimiento Facial", "Detección de Objetos", "Segmentación"],
  },
  {
    id: "juegos",
    title: "IA en Juegos",
    description: "Algoritmos para juegos y entretenimiento",
    icon: Gamepad2,
    color: "bg-yellow-100 text-yellow-600",
    concepts: ["Minimax", "Monte Carlo", "Pathfinding", "NPCs Inteligentes"],
  },
  {
    id: "sistemas",
    title: "Sistemas Expertos",
    description: "Sistemas basados en conocimiento",
    icon: Network,
    color: "bg-indigo-100 text-indigo-600",
    concepts: ["Base de Conocimiento", "Motor de Inferencia", "Reglas", "Ontologías"],
  },
  {
    id: "representacion",
    title: "Representación del Conocimiento",
    description: "Formas de representar y estructurar el conocimiento",
    icon: BookOpen,
    color: "bg-teal-100 text-teal-600",
    concepts: ["Lógica", "Frames", "Redes Semánticas", "Taxonomías"],
  },
]

export function TopicsGrid() {
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleConceptClick = (concept: string) => {
    setSelectedTopic(concept)
    setIsModalOpen(true)
  }

  const handleVoiceConceptFound = (concept: string) => {
    // Abrir modal directamente sin scroll
    setSelectedTopic(concept)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedTopic(null)
  }

  // Escuchar eventos del Hero para abrir modales de conceptos
  useEffect(() => {
    const handleOpenConceptModal = (event: CustomEvent) => {
      const { concept } = event.detail
      setSelectedTopic(concept)
      setIsModalOpen(true)
    }

    window.addEventListener("openConceptModal", handleOpenConceptModal as EventListener)

    return () => {
      window.removeEventListener("openConceptModal", handleOpenConceptModal as EventListener)
    }
  }, [])

  return (
    <section id="fundamentos" className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Áreas de Conocimiento en IA</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6">
            Explora los principales campos de estudio y aplicación de la Inteligencia Artificial
          </p>

          {/* Búsqueda por voz específica para conceptos - SIN scroll automático */}
          <VoiceSearch
            onSearch={() => {}} // No usamos búsqueda normal aquí
            onConceptFound={handleVoiceConceptFound}
            placeholder="Busca conceptos de IA... (ej: 'IA débil', 'Test de Turing')"
            searchType="concepts"
            className="max-w-lg"
            enableAutoScroll={false} // Deshabilitamos el scroll automático
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {topics.map((topic) => {
            const IconComponent = topic.icon
            return (
              <Card key={topic.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className={`w-12 h-12 rounded-lg ${topic.color} flex items-center justify-center mb-4`}>
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <CardTitle className="text-lg">{topic.title}</CardTitle>
                  <CardDescription>{topic.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {topic.concepts.map((concept) => (
                      <Badge
                        key={concept}
                        variant="secondary"
                        className="text-xs cursor-pointer hover:bg-blue-100 hover:text-blue-700 transition-colors"
                        onClick={() => handleConceptClick(concept)}
                      >
                        {concept}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {selectedTopic && <TopicDetailModal isOpen={isModalOpen} onClose={closeModal} topicKey={selectedTopic} />}
      </div>
    </section>
  )
}
