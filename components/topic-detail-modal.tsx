"use client"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { ExternalLink, Youtube, FileText, Newspaper, BookOpen, Lightbulb, ImageIcon } from "lucide-react"
import Image from "next/image"

interface TopicDetail {
  title: string
  description: string
  imageSrc?: string // Nueva propiedad para la imagen
  imageAlt?: string // Texto alternativo para la imagen
  comparison?: {
    title: string
    items: Array<{
      name: string
      description: string
      characteristics: string[]
    }>
  }
  examples: Array<{
    title: string
    description: string
    type: "real" | "fictional"
  }>
  resources: Array<{
    title: string
    url: string
    type: "video" | "article" | "paper" | "blog" | "news"
    description: string
    year: number
  }>
  keyPoints: string[]
}

const topicDetails: Record<string, TopicDetail> = {
  "IA Débil vs Fuerte": {
    title: "IA Débil vs IA Fuerte",
    description:
      "La distinción fundamental entre sistemas de IA especializados y la inteligencia artificial general que simula completamente la cognición humana.",
    imageSrc: "/images/IA-fuerte-vs-IA-debil-datascientest.jpg", // Placeholder para la imagen que enviarás
    imageAlt: "Comparación visual entre IA débil (específica) e IA fuerte (general)",
    comparison: {
      title: "Comparación entre IA Débil y IA Fuerte",
      items: [
        {
          name: "IA Débil (Estrecha)",
          description: "Sistemas diseñados para tareas específicas sin conciencia general",
          characteristics: [
            "Enfocada en una tarea específica",
            "No tiene conciencia ni comprensión real",
            "Funciona mediante patrones y algoritmos",
            "Existe actualmente en múltiples aplicaciones",
            "Ejemplos: GPT, sistemas de recomendación, reconocimiento facial",
          ],
        },
        {
          name: "IA Fuerte (General)",
          description: "Sistemas que poseen inteligencia general comparable a la humana",
          characteristics: [
            "Capacidad de razonamiento general",
            "Conciencia y comprensión real",
            "Adaptabilidad a múltiples contextos",
            "Aún no existe, solo en investigación",
            "Objetivo de la Inteligencia Artificial General (AGI)",
          ],
        },
      ],
    },
    examples: [
      {
        title: "ChatGPT y GPT-4 (IA Débil Avanzada)",
        description:
          "Aunque muy sofisticados en procesamiento de lenguaje, siguen siendo IA débil: procesan patrones sin comprensión real.",
        type: "real",
      },
      {
        title: "Sistemas de Conducción Autónoma",
        description:
          "Tesla, Waymo y otros sistemas son IA débil muy avanzada, especializados en una tarea específica compleja.",
        type: "real",
      },
      {
        title: "HAL 9000 y Jarvis (IA Fuerte Ficticia)",
        description: "Representaciones ficticias de IA fuerte con razonamiento general, emociones y autoconciencia.",
        type: "fictional",
      },
    ],
    resources: [
      {
        title: "Inteligencia Artificial Débil & Fuerte",
        url: "https://www.youtube.com/watch?v=2INbYLnYI8M",
        type: "video",
        description: "Explicación clara en español de lo que es la IA Débil y Fuerte",
        year: 2023,
      },
      {
        title: "The Difference Between AI, Machine Learning, and Deep Learning",
        url: "https://blogs.uoc.edu/artmatters/ia_debil_fuerte/",
        type: "blog",
        description: "Blog de la Universidad de Catalunya sobre la IA fuerte y débil",
        year: 2019,
      },
    ],
    keyPoints: [
      "La IA actual es principalmente 'débil' o estrecha, incluso los modelos más avanzados",
      "La IA fuerte requiere conciencia, comprensión y razonamiento general",
      "No existe consenso sobre cuándo se logrará la AGI, estimaciones van de 2030 a 2100+",
      "Los riesgos y beneficios de ambos tipos son fundamentalmente diferentes",
    ],
  },
  "Test de Turing": {
    title: "Test de Turing",
    description:
      "Prueba propuesta por Alan Turing en 1950 para determinar si una máquina puede exhibir comportamiento inteligente indistinguible del humano en conversación.",
    imageSrc: "/images/robot-scientist-facing-turing-test-260nw-1651840888.webp", // Placeholder para la imagen que enviarás
    imageAlt: "Representación del Test de Turing con un evaluador humano, una máquina y un humano",
    examples: [
      {
        title: "GPT-4 y el Test de Turing Moderno",
        description:
          "Los modelos de lenguaje actuales como GPT-4 pueden pasar versiones del test, pero esto genera debate sobre si realmente demuestran inteligencia.",
        type: "real",
      },
      {
        title: "Eugene Goostman (2014)",
        description:
          "Chatbot que simulaba ser un niño ucraniano de 13 años y logró engañar al 33% de los jueces en una competencia.",
        type: "real",
      },
      {
        title: "LaMDA y la Controversia de la Conciencia",
        description:
          "El modelo de Google LaMDA generó debate en 2022 cuando un ingeniero afirmó que había desarrollado conciencia.",
        type: "real",
      },
    ],
    resources: [
      {
        title: "¿Que es el Test de Turing? ¡Te lo explico en un minuto!",
        url: "https://www.youtube.com/watch?v=rF8d7XAuAaY",
        type: "video",
        description: "Explicación didáctica en un minuto del test de Turing",
        year: 2018,
      },
      {
        title: "La importancia del Test de Turing",
        url: "https://www.youtube.com/watch?v=AuvHr0OSIvg",
        type: "video",
        description: "Explicación de la importancia del Test de Turing en la IA moderna",
        year: 2022,
      },
    ],
    keyPoints: [
      "Propuesto por Alan Turing en 1950 como 'Juego de Imitación'",
      "Los LLMs modernos pueden pasar versiones del test, generando nuevo debate",
      "No mide inteligencia real, solo capacidad de imitación convincente",
      "Necesitamos nuevos tests para evaluar IA moderna más allá de la conversación",
    ],
  },
  "Agentes Inteligentes": {
    title: "Agentes Inteligentes",
    description:
      "Sistemas que perciben su entorno y actúan de manera autónoma para alcanzar objetivos específicos, adaptándose a cambios en el ambiente.",
    imageSrc: "/images/chatbot-720x420.jpg", // Placeholder para la imagen que enviarás
    imageAlt: "Diagrama de un agente inteligente con sensores, procesamiento y actuadores",
    examples: [
      {
        title: "Vehículos Autónomos",
        description:
          "Tesla FSD, Waymo y Cruise utilizan agentes inteligentes que perciben el entorno y toman decisiones de conducción en tiempo real.",
        type: "real",
      },
      {
        title: "Asistentes de IA Multimodales",
        description:
          "GPT-4V, Claude 3, y Gemini actúan como agentes que procesan texto, imágenes y pueden ejecutar acciones.",
        type: "real",
      },
      {
        title: "Agentes de Trading Algorítmico",
        description:
          "Sistemas que analizan mercados financieros y ejecutan operaciones automáticamente basándose en datos en tiempo real.",
        type: "real",
      },
      {
        title: "NPCs con IA Generativa",
        description:
          "Personajes de videojuegos potenciados por LLMs que pueden mantener conversaciones naturales y adaptar su comportamiento.",
        type: "real",
      },
    ],
    resources: [
      {
        title: "Multi-Agent Reinforcement Learning: A Selective Overview",
        url: "https://arxiv.org/abs/1911.10635",
        type: "paper",
        description: "Revisión completa sobre aprendizaje por refuerzo multi-agente",
        year: 2019,
      },
      {
        title: "Autonomous Agents and Multi-Agent Systems",
        url: "https://link.springer.com/journal/10458",
        type: "paper",
        description: "Journal especializado en sistemas multi-agente con artículos recientes",
        year: 2023,
      },
      {
        title: "The Rise of AI Agents in 2024",
        url: "https://www.mckinsey.com/capabilities/quantumblack/our-insights/the-state-of-ai-in-2023-generative-ais-breakout-year",
        type: "article",
        description: "Reporte de McKinsey sobre el estado actual de los agentes de IA",
        year: 2023,
      },
      {
        title: "Building Autonomous AI Agents with LangChain",
        url: "https://blog.langchain.dev/building-autonomous-agents/",
        type: "blog",
        description: "Guía técnica sobre construcción de agentes autónomos con herramientas modernas",
        year: 2023,
      },
      {
        title: "AutoGPT and the Future of Autonomous AI",
        url: "https://www.nature.com/articles/d41586-023-01295-4",
        type: "news",
        description: "Artículo de Nature sobre AutoGPT y el futuro de los agentes autónomos",
        year: 2023,
      },
    ],
    keyPoints: [
      "Perciben el entorno mediante sensores (cámaras, micrófonos, APIs)",
      "Actúan mediante actuadores para alcanzar objetivos específicos",
      "Pueden ser reactivos, deliberativos, híbridos o basados en aprendizaje",
      "Fundamentales en robótica, finanzas, juegos y asistentes virtuales modernos",
    ],
  },
  "Niveles Funcionales": {
    title: "Niveles Funcionales de IA",
    description:
      "Clasificación de sistemas de IA según su capacidad de procesamiento, memoria, comprensión del entorno y autoconciencia.",
    imageSrc: "/images/ment-4057.jpg", // Placeholder para la imagen que enviarás
    imageAlt: "Diagrama de los cuatro niveles funcionales de la IA: reactiva, memoria limitada, teoría de la mente y autoconciencia",
    comparison: {
      title: "Los 4 Niveles Funcionales",
      items: [
        {
          name: "Máquinas Reactivas",
          description: "Responden solo al presente, sin memoria de experiencias pasadas",
          characteristics: [
            "No tienen memoria a largo plazo",
            "Responden solo a estímulos actuales",
            "Ejemplo: Deep Blue, sistemas de recomendación básicos",
            "Nivel más básico pero aún útil",
          ],
        },
        {
          name: "Memoria Limitada",
          description: "Usan experiencias recientes para tomar mejores decisiones",
          characteristics: [
            "Almacenan información temporal",
            "Aprenden de experiencias recientes",
            "Ejemplo: GPT-4, coches autónomos, sistemas de recomendación modernos",
            "Nivel actual de la mayoría de IA avanzada",
          ],
        },
        {
          name: "Teoría de la Mente",
          description: "Comprenden emociones e intenciones de otros (en desarrollo)",
          characteristics: [
            "Entienden estados mentales ajenos",
            "Predicen comportamientos humanos",
            "En desarrollo con modelos multimodales",
            "Requiere comprensión social y emocional",
          ],
        },
        {
          name: "Autoconsciencia",
          description: "Tienen conciencia de sí mismas como entidades (hipotético)",
          characteristics: [
            "Conciencia de su propia existencia",
            "Comprensión de su lugar en el mundo",
            "Nivel más avanzado teórico",
            "No existe actualmente, objetivo de AGI",
          ],
        },
      ],
    },
    examples: [
      {
        title: "GPT-4 (Memoria Limitada Avanzada)",
        description:
          "Utiliza contexto de conversación y entrenamiento, pero no tiene memoria persistente entre sesiones.",
        type: "real",
      },
      {
        title: "Tesla FSD (Memoria Limitada)",
        description:
          "Recuerda patrones de tráfico y comportamiento, pero cada viaje es independiente sin memoria a largo plazo.",
        type: "real",
      },
      {
        title: "Sistemas de Recomendación de Netflix",
        description: "Usan historial de visualización (memoria limitada) para predecir preferencias futuras.",
        type: "real",
      },
    ],
    resources: [
      {
        title: "Types of Artificial Intelligence: A Comprehensive Guide",
        url: "https://www.ibm.com/cloud/learn/what-is-artificial-intelligence",
        type: "article",
        description: "Guía completa de IBM sobre los diferentes tipos de IA y sus capacidades",
        year: 2023,
      },
      {
        title: "The Four Types of AI: A Framework for Understanding",
        url: "https://hbr.org/2021/11/how-to-choose-your-first-ai-project",
        type: "article",
        description: "Harvard Business Review sobre clasificación de IA y aplicaciones empresariales",
        year: 2021,
      },
      {
        title: "Towards Artificial General Intelligence via a Multimodal Foundation Model",
        url: "https://arxiv.org/abs/2309.10020",
        type: "paper",
        description: "Paper sobre el progreso hacia niveles superiores de IA con modelos multimodales",
        year: 2023,
      },
      {
        title: "The Path to AGI: Memory, Learning, and Consciousness",
        url: "https://www.technologyreview.com/2023/04/19/1071102/ai-consciousness-theory-of-mind/",
        type: "article",
        description: "MIT Technology Review sobre el camino hacia niveles superiores de IA",
        year: 2023,
      },
      {
        title: "Understanding AI Consciousness: Current State and Future Prospects",
        url: "https://www.frontiersin.org/articles/10.3389/frai.2022.951019/full",
        type: "paper",
        description: "Análisis científico sobre conciencia artificial y teoría de la mente en IA",
        year: 2022,
      },
    ],
    keyPoints: [
      "Clasificación basada en capacidades cognitivas y de memoria",
      "Actualmente la mayoría de IA está en el nivel de memoria limitada",
      "Los modelos más avanzados (GPT-4, Claude) muestran indicios de teoría de la mente",
      "La autoconciencia sigue siendo un objetivo teórico de la AGI",
    ],
  },
}

interface TopicDetailModalProps {
  isOpen: boolean
  onClose: () => void
  topicKey: string
}

export function TopicDetailModal({ isOpen, onClose, topicKey }: TopicDetailModalProps) {
  const topic = topicDetails[topicKey]

  if (!topic) return null

  const getResourceIcon = (type: string) => {
    switch (type) {
      case "video":
        return <Youtube className="w-4 h-4 text-red-600" />
      case "article":
        return <FileText className="w-4 h-4 text-blue-600" />
      case "paper":
        return <BookOpen className="w-4 h-4 text-green-600" />
      case "blog":
        return <Lightbulb className="w-4 h-4 text-orange-600" />
      case "news":
        return <Newspaper className="w-4 h-4 text-purple-600" />
      default:
        return <ExternalLink className="w-4 h-4" />
    }
  }

  const getResourceColor = (type: string) => {
    switch (type) {
      case "video":
        return "border-red-200 bg-red-50"
      case "article":
        return "border-blue-200 bg-blue-50"
      case "paper":
        return "border-green-200 bg-green-50"
      case "blog":
        return "border-orange-200 bg-orange-50"
      case "news":
        return "border-purple-200 bg-purple-50"
      default:
        return "border-gray-200 bg-gray-50"
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-gray-900">{topic.title}</DialogTitle>
          <DialogDescription className="text-lg text-gray-600 mt-2">{topic.description}</DialogDescription>
        </DialogHeader>

        <div className="space-y-6 mt-6">
          {/* Imagen destacada */}
          {topic.imageSrc && (
            <div className="flex justify-center">
              <div className="relative w-full max-w-2xl h-64 md:h-80 overflow-hidden rounded-lg shadow-md">
                <Image
                  src={topic.imageSrc || "/placeholder.svg"}
                  alt={topic.imageAlt || topic.title}
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute bottom-0 right-0 bg-black bg-opacity-60 text-white text-xs px-2 py-1 rounded-tl-md flex items-center gap-1">
                  <ImageIcon className="w-3 h-3" />
                  <span>Imagen ilustrativa</span>
                </div>
              </div>
            </div>
          )}
          {/* Comparison Section */}
          {topic.comparison && (
            <div>
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <span className="w-2 h-6 bg-blue-600 rounded"></span>
                {topic.comparison.title}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {topic.comparison.items.map((item, index) => (
                  <div key={index} className="border rounded-lg p-4 bg-gray-50">
                    <h4 className="font-semibold text-lg mb-2 text-blue-700">{item.name}</h4>
                    <p className="text-gray-600 mb-3">{item.description}</p>
                    <ul className="space-y-1">
                      {item.characteristics.map((char, charIndex) => (
                        <li key={charIndex} className="text-sm text-gray-700 flex items-start gap-2">
                          <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                          {char}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Key Points */}
          <div>
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <span className="w-2 h-6 bg-green-600 rounded"></span>
              Puntos Clave
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {topic.keyPoints.map((point, index) => (
                <div key={index} className="flex items-start gap-3 p-3 bg-green-50 rounded-lg">
                  <span className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                    {index + 1}
                  </span>
                  <span className="text-gray-700">{point}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Examples */}
          <div>
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <span className="w-2 h-6 bg-purple-600 rounded"></span>
              Ejemplos Actuales
            </h3>
            <div className="space-y-3">
              {topic.examples.map((example, index) => (
                <div key={index} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="font-semibold text-lg text-purple-700">{example.title}</h4>
                    <Badge variant={example.type === "real" ? "default" : "secondary"}>
                      {example.type === "real" ? "Real" : "Ficticio"}
                    </Badge>
                  </div>
                  <p className="text-gray-600">{example.description}</p>
                </div>
              ))}
            </div>
          </div>

          <Separator />

          {/* Resources */}
          <div>
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <span className="w-2 h-6 bg-orange-600 rounded"></span>
              Recursos Académicos y Técnicos
            </h3>
            <div className="grid grid-cols-1 gap-4">
              {topic.resources.map((resource, index) => (
                <div key={index} className={`border rounded-lg p-4 ${getResourceColor(resource.type)}`}>
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-center gap-2">
                      {getResourceIcon(resource.type)}
                      <h4 className="font-semibold text-gray-900">{resource.title}</h4>
                      <Badge variant="outline" className="text-xs">
                        {resource.year}
                      </Badge>
                    </div>
                    <Button variant="ghost" size="sm" asChild>
                      <a
                        href={resource.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Abrir
                      </a>
                    </Button>
                  </div>
                  <p className="text-gray-600 text-sm">{resource.description}</p>
                  <div className="flex gap-2 mt-2">
                    <Badge variant="outline" className="text-xs">
                      {resource.type.charAt(0).toUpperCase() + resource.type.slice(1)}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
