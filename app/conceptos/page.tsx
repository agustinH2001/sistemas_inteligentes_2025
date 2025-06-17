import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Brain, Cpu, Network, Zap, History, Search, Bot, Gamepad2 } from "lucide-react"
import Link from "next/link"

const concepts = [
  {
    id: "que-es-ia",
    title: "¿Qué es la Inteligencia Artificial?",
    description: "Definición, características y ejemplos de la IA",
    category: "Fundamentos",
    difficulty: "Básico",
    icon: Brain,
    readTime: "8 min",
  },
  {
    id: "tipos-ia",
    title: "Tipos de Inteligencia Artificial",
    description: "IA Débil vs IA Fuerte, clasificaciones y niveles",
    category: "Conceptos",
    difficulty: "Básico",
    icon: Cpu,
    readTime: "12 min",
  },
  {
    id: "historia-ia",
    title: "Historia de la IA",
    description: "Evolución desde Turing hasta la actualidad",
    category: "Historia",
    difficulty: "Básico",
    icon: History,
    readTime: "10 min",
  },
  {
    id: "machine-learning",
    title: "Aprendizaje Automático",
    description: "Supervisado, no supervisado y por refuerzo",
    category: "Técnicas",
    difficulty: "Intermedio",
    icon: Network,
    readTime: "15 min",
  },
  {
    id: "redes-neuronales",
    title: "Redes Neuronales",
    description: "Deep Learning y sistemas inspirados en el cerebro",
    category: "Avanzado",
    difficulty: "Avanzado",
    icon: Zap,
    readTime: "18 min",
  },
  {
    id: "busqueda-ia",
    title: "Búsqueda en IA",
    description: "Algoritmos de búsqueda y resolución de problemas",
    category: "Algoritmos",
    difficulty: "Intermedio",
    icon: Search,
    readTime: "14 min",
  },
  {
    id: "agentes-inteligentes",
    title: "Agentes Inteligentes",
    description: "Sistemas que perciben y actúan en su entorno",
    category: "Conceptos",
    difficulty: "Intermedio",
    icon: Bot,
    readTime: "12 min",
  },
  {
    id: "ia-juegos",
    title: "IA en Juegos",
    description: "Aplicación de IA en videojuegos y estrategia",
    category: "Aplicaciones",
    difficulty: "Básico",
    icon: Gamepad2,
    readTime: "10 min",
  },
]

const categories = [
  "Todos",
  "Fundamentos",
  "Conceptos",
  "Técnicas",
  "Algoritmos",
  "Historia",
  "Aplicaciones",
  "Avanzado",
]
const difficulties = ["Todos", "Básico", "Intermedio", "Avanzado"]

export default function ConceptosPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Conceptos de Inteligencia Artificial</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explora los fundamentos, técnicas y aplicaciones de la IA desde conceptos básicos hasta temas avanzados
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {concepts.map((concept) => {
            const IconComponent = concept.icon
            return (
              <Link key={concept.id} href={`/conceptos/${concept.id}`}>
                <Card className="h-full hover:shadow-lg transition-all duration-200 cursor-pointer group hover:scale-105">
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between mb-3">
                      <div className="p-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg group-hover:from-blue-200 group-hover:to-purple-200 transition-colors">
                        <IconComponent className="w-6 h-6 text-blue-600" />
                      </div>
                      <Badge variant="secondary" className="text-xs">
                        {concept.readTime}
                      </Badge>
                    </div>
                    <CardTitle className="text-lg leading-tight group-hover:text-blue-600 transition-colors">
                      {concept.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-sm text-gray-600 mb-4 line-clamp-2">{concept.description}</p>
                    <div className="flex justify-between items-center">
                      <Badge variant="outline" className="text-xs">
                        {concept.category}
                      </Badge>
                      <Badge
                        variant={
                          concept.difficulty === "Básico"
                            ? "default"
                            : concept.difficulty === "Intermedio"
                              ? "secondary"
                              : "destructive"
                        }
                        className="text-xs"
                      >
                        {concept.difficulty}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}
