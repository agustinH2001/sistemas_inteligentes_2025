"use client"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { ExternalLink, Youtube, FileText, Newspaper, BookOpen, Lightbulb } from "lucide-react"

interface TopicDetail {
  title: string
  description: string
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
  }>
  keyPoints: string[]
}

const topicDetails: Record<string, TopicDetail> = {
  "IA Débil vs Fuerte": {
    title: "IA Débil vs IA Fuerte",
    description:
      "La distinción fundamental entre sistemas de IA especializados y la inteligencia artificial general que simula completamente la cognición humana.",
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
            "Ejemplos: Siri, filtros de spam, recomendaciones de Netflix",
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
            "Ejemplos ficticios: HAL 9000, Jarvis, Data de Star Trek",
          ],
        },
      ],
    },
    examples: [
      {
        title: "Asistente Virtual (IA Débil)",
        description:
          "Alexa puede responder preguntas específicas y controlar dispositivos, pero no comprende realmente el contexto ni tiene conciencia.",
        type: "real",
      },
      {
        title: "HAL 9000 (IA Fuerte)",
        description:
          "El computador de '2001: Odisea del Espacio' que muestra razonamiento general, emociones y toma decisiones complejas.",
        type: "fictional",
      },
      {
        title: "GPT-4 (IA Débil Avanzada)",
        description:
          "Aunque muy sofisticado, sigue siendo IA débil: procesa lenguaje pero no tiene comprensión real ni conciencia.",
        type: "real",
      },
    ],
    resources: [
      {
        title: "¿Qué es la Inteligencia Artificial? - DotCSV",
        url: "https://www.youtube.com/watch?v=KytW151dpqU",
        type: "video",
        description: "Canal español especializado en IA que explica los conceptos básicos de manera clara",
      },
      {
        title: "Inteligencia Artificial Débil vs Fuerte - Platzi",
        url: "https://platzi.com/blog/inteligencia-artificial-debil-vs-fuerte/",
        type: "blog",
        description: "Blog educativo en español sobre las diferencias entre IA débil y fuerte",
      },
      {
        title: "¿Qué es la Inteligencia Artificial General? - Xataka",
        url: "https://www.xataka.com/basics/que-inteligencia-artificial-general-agi-cuando-llegara",
        type: "article",
        description: "Artículo explicativo sobre la Inteligencia Artificial General y sus implicaciones",
      },
      {
        title: "IA Débil vs IA Fuerte: Conceptos Clave",
        url: "https://www.iic.uam.es/inteligencia/que-es-inteligencia-artificial/",
        type: "article",
        description: "Recurso académico del Instituto de Ingeniería del Conocimiento de la UAM",
      },
      {
        title: "El Futuro de la IA: ¿Cuándo Llegará la Superinteligencia?",
        url: "https://www.bbvaopenmind.com/tecnologia/inteligencia-artificial/el-futuro-de-la-inteligencia-artificial/",
        type: "article",
        description: "Análisis profundo de BBVA OpenMind sobre el futuro de la IA",
      },
    ],
    keyPoints: [
      "La IA actual es principalmente 'débil' o estrecha",
      "La IA fuerte requiere conciencia y comprensión real",
      "No existe consenso sobre cuándo se logrará la IA fuerte",
      "Ambos tipos tienen aplicaciones y riesgos diferentes",
    ],
  },
  "Test de Turing": {
    title: "Test de Turing",
    description:
      "Prueba propuesta por Alan Turing en 1950 para determinar si una máquina puede exhibir comportamiento inteligente indistinguible del humano.",
    examples: [
      {
        title: "Chatbot Eugene Goostman",
        description:
          "En 2014, este chatbot que simulaba ser un niño ucraniano de 13 años logró engañar al 33% de los jueces en una prueba de Turing.",
        type: "real",
      },
      {
        title: "ELIZA (1966)",
        description:
          "Uno de los primeros programas en simular conversación humana, imitando a un psicoterapeuta con respuestas simples pero efectivas.",
        type: "real",
      },
      {
        title: "Blade Runner - Test Voight-Kampff",
        description: "Versión ficticia del Test de Turing para distinguir entre humanos y replicantes androides.",
        type: "fictional",
      },
    ],
    resources: [
      {
        title: "El Test de Turing Explicado - Date un Voltio",
        url: "https://www.youtube.com/watch?v=OpA3hCILILc",
        type: "video",
        description: "Canal de divulgación científica español que explica el Test de Turing",
      },
      {
        title: "¿Qué es el Test de Turing? - Muy Interesante",
        url: "https://www.muyinteresante.es/tecnologia/articulo/que-es-el-test-de-turing-y-para-que-sirve",
        type: "article",
        description: "Artículo divulgativo sobre el Test de Turing y su importancia",
      },
      {
        title: "Alan Turing y la Inteligencia Artificial - National Geographic España",
        url: "https://www.nationalgeographic.com.es/ciencia/alan-turing-padre-inteligencia-artificial_15398",
        type: "article",
        description: "Biografía y legado de Alan Turing en el desarrollo de la IA",
      },
      {
        title: "¿Ha Superado ChatGPT el Test de Turing? - El Confidencial",
        url: "https://www.elconfidencial.com/tecnologia/2023-03-15/chatgpt-test-turing-inteligencia-artificial_3593847/",
        type: "news",
        description: "Análisis sobre si los modelos de lenguaje actuales superan el Test de Turing",
      },
      {
        title: "Test de Turing: Historia y Aplicaciones - OpenMind BBVA",
        url: "https://www.bbvaopenmind.com/ciencia/matematicas/alan-turing-el-genio-que-descifro-enigma/",
        type: "article",
        description: "Artículo sobre Alan Turing y sus contribuciones a la computación",
      },
    ],
    keyPoints: [
      "Propuesto por Alan Turing en 1950",
      "Evalúa si una máquina puede imitar conversación humana",
      "No mide inteligencia real, solo imitación convincente",
      "Sigue siendo relevante pero con limitaciones reconocidas",
    ],
  },
  "Agentes Inteligentes": {
    title: "Agentes Inteligentes",
    description:
      "Sistemas que perciben su entorno y actúan de manera autónoma para alcanzar objetivos específicos, adaptándose a cambios en el ambiente.",
    examples: [
      {
        title: "Robot Aspiradora Roomba",
        description:
          "Percibe obstáculos, mapea el espacio, planifica rutas y limpia de forma autónoma, adaptándose a diferentes entornos.",
        type: "real",
      },
      {
        title: "Agentes de Trading Algorítmico",
        description:
          "Sistemas que analizan mercados financieros en tiempo real y ejecutan operaciones automáticamente según estrategias predefinidas.",
        type: "real",
      },
      {
        title: "NPCs en Videojuegos",
        description:
          "Personajes no jugables que reaccionan al comportamiento del jugador y toman decisiones basadas en el estado del juego.",
        type: "real",
      },
      {
        title: "WALL-E",
        description:
          "Robot ficticio que muestra características de agente inteligente: percibe su entorno, tiene objetivos y se adapta a situaciones nuevas.",
        type: "fictional",
      },
    ],
    resources: [
      {
        title: "¿Qué son los Agentes Inteligentes? - Aprende Machine Learning",
        url: "https://www.youtube.com/watch?v=mKpzOVKjIps",
        type: "video",
        description: "Video educativo en español sobre agentes inteligentes y sus características",
      },
      {
        title: "Agentes Inteligentes en IA - Platzi",
        url: "https://platzi.com/blog/que-son-agentes-inteligentes/",
        type: "blog",
        description: "Explicación completa sobre agentes inteligentes y sus tipos",
      },
      {
        title: "Sistemas Multi-Agente - Universidad de Málaga",
        url: "https://www.lcc.uma.es/~ppgg/SMA/SMA.html",
        type: "article",
        description: "Recurso académico sobre sistemas multi-agente y sus aplicaciones",
      },
      {
        title: "Robótica e Inteligencia Artificial - El País",
        url: "https://elpais.com/tecnologia/2023-01-20/robots-inteligentes-el-futuro-ya-esta-aqui.html",
        type: "news",
        description: "Artículo periodístico sobre el desarrollo de robots inteligentes",
      },
      {
        title: "Agentes Autónomos: Definición y Ejemplos - Tokio School",
        url: "https://www.tokioschool.com/noticias/agentes-autonomos-inteligencia-artificial/",
        type: "blog",
        description: "Blog educativo sobre agentes autónomos y sus aplicaciones prácticas",
      },
    ],
    keyPoints: [
      "Perciben el entorno mediante sensores",
      "Actúan mediante actuadores para alcanzar objetivos",
      "Pueden ser reactivos, deliberativos o híbridos",
      "Fundamentales en robótica, juegos y sistemas autónomos",
    ],
  },
  "Niveles Funcionales": {
    title: "Niveles Funcionales de IA",
    description:
      "Clasificación de sistemas de IA según su capacidad de procesamiento, memoria y comprensión del entorno y de sí mismos.",
    comparison: {
      title: "Los 4 Niveles Funcionales",
      items: [
        {
          name: "Máquinas Reactivas",
          description: "Responden solo al presente, sin memoria de experiencias pasadas",
          characteristics: [
            "No tienen memoria a largo plazo",
            "Responden solo a estímulos actuales",
            "Ejemplo: Deep Blue (ajedrez)",
            "Nivel más básico de IA",
          ],
        },
        {
          name: "Memoria Limitada",
          description: "Usan experiencias recientes para tomar mejores decisiones",
          characteristics: [
            "Almacenan información temporal",
            "Aprenden de experiencias recientes",
            "Ejemplo: Coches autónomos",
            "Nivel actual de la mayoría de IA",
          ],
        },
        {
          name: "Teoría de la Mente",
          description: "Comprenden emociones e intenciones de otros (futuro)",
          characteristics: [
            "Entienden estados mentales ajenos",
            "Predicen comportamientos humanos",
            "Aún en desarrollo",
            "Requiere comprensión social",
          ],
        },
        {
          name: "Autoconsciencia",
          description: "Tienen conciencia de sí mismas como entidades (hipotético)",
          characteristics: [
            "Conciencia de su propia existencia",
            "Comprensión de su lugar en el mundo",
            "Nivel más avanzado teórico",
            "No existe actualmente",
          ],
        },
      ],
    },
    examples: [
      {
        title: "Deep Blue (Reactiva)",
        description:
          "Supercomputadora de IBM que venció a Kasparov en ajedrez, pero solo analizaba posiciones actuales sin aprender.",
        type: "real",
      },
      {
        title: "Tesla Autopilot (Memoria Limitada)",
        description:
          "Sistema que recuerda patrones de tráfico y comportamiento de otros vehículos para mejorar la conducción.",
        type: "real",
      },
      {
        title: "Samantha en 'Her' (Teoría de la Mente)",
        description: "IA ficticia que comprende emociones humanas y desarrolla relaciones empáticas complejas.",
        type: "fictional",
      },
    ],
    resources: [
      {
        title: "Tipos de Inteligencia Artificial - QuantumFracture",
        url: "https://www.youtube.com/watch?v=_tA5cinv0U8",
        type: "video",
        description: "Canal de divulgación científica que explica los diferentes tipos de IA",
      },
      {
        title: "Clasificación de la IA por Capacidades - IEBS",
        url: "https://www.iebschool.com/blog/tipos-inteligencia-artificial-big-data/",
        type: "blog",
        description: "Artículo educativo sobre los tipos de IA según sus capacidades",
      },
      {
        title: "¿Cuándo Tendremos IA Consciente? - Hipertextual",
        url: "https://hipertextual.com/2023/02/inteligencia-artificial-consciente-cuando",
        type: "article",
        description: "Análisis sobre el futuro de la IA consciente y autoconsciente",
      },
      {
        title: "Los Niveles de la Inteligencia Artificial - Muy Computer",
        url: "https://www.muycomputer.com/2023/03/15/niveles-inteligencia-artificial/",
        type: "article",
        description: "Explicación técnica de los diferentes niveles funcionales de IA",
      },
      {
        title: "IA Reactiva vs IA con Memoria - Computing España",
        url: "https://www.computing.es/inteligencia-artificial/noticias/1121456046601/tipos-inteligencia-artificial-diferencias.1.html",
        type: "news",
        description: "Artículo técnico sobre las diferencias entre tipos de IA",
      },
    ],
    keyPoints: [
      "Clasificación basada en capacidades cognitivas",
      "Actualmente estamos en el nivel de memoria limitada",
      "Los niveles superiores son objetivos de investigación",
      "Cada nivel requiere avances tecnológicos significativos",
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
              Ejemplos Prácticos
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
              Recursos de Aprendizaje
            </h3>
            <div className="grid grid-cols-1 gap-4">
              {topic.resources.map((resource, index) => (
                <div key={index} className={`border rounded-lg p-4 ${getResourceColor(resource.type)}`}>
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-center gap-2">
                      {getResourceIcon(resource.type)}
                      <h4 className="font-semibold text-gray-900">{resource.title}</h4>
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
                  <Badge variant="outline" className="mt-2 text-xs">
                    {resource.type.charAt(0).toUpperCase() + resource.type.slice(1)}
                  </Badge>
                </div>
              ))}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
