import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Brain, Cpu, Network, Zap } from "lucide-react"
import Link from "next/link"

const featuredTopics = [
  {
    id: "que-es-ia",
    title: "¿Qué es la Inteligencia Artificial?",
    description: "Introducción completa a los conceptos fundamentales de la IA",
    icon: Brain,
    category: "Fundamentos",
    readTime: "8 min",
  },
  {
    id: "tipos-ia",
    title: "Tipos de Inteligencia Artificial",
    description: "IA Débil vs IA Fuerte, niveles funcionales y clasificaciones",
    icon: Cpu,
    category: "Conceptos",
    readTime: "12 min",
  },
  {
    id: "machine-learning",
    title: "Aprendizaje Automático",
    description: "Supervisado, no supervisado y por refuerzo explicado",
    icon: Network,
    category: "Técnicas",
    readTime: "15 min",
  },
  {
    id: "redes-neuronales",
    title: "Redes Neuronales",
    description: "Sistemas inspirados en el cerebro humano para deep learning",
    icon: Zap,
    category: "Avanzado",
    readTime: "18 min",
  },
]

export function FeaturedContent() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Contenido Destacado</h2>
          <p className="text-lg text-gray-600">Explora los temas más importantes de la Inteligencia Artificial</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredTopics.map((topic) => {
            const IconComponent = topic.icon
            return (
              <Link key={topic.id} href={`/conceptos/${topic.id}`}>
                <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer group">
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between mb-2">
                      <div className="p-2 bg-blue-100 rounded-lg group-hover:bg-blue-200 transition-colors">
                        <IconComponent className="w-6 h-6 text-blue-600" />
                      </div>
                      <Badge variant="secondary" className="text-xs">
                        {topic.readTime}
                      </Badge>
                    </div>
                    <CardTitle className="text-lg leading-tight">{topic.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-sm text-gray-600 mb-3">{topic.description}</p>
                    <Badge variant="outline" className="text-xs">
                      {topic.category}
                    </Badge>
                  </CardContent>
                </Card>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
