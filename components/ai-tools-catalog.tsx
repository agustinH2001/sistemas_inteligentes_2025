"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ExternalLink, Calendar, User, Shield } from "lucide-react"
import { VoiceSearch } from "@/components/voice-search"

const aiTools = {
  "machine-learning": [
    {
      name: "TensorFlow",
      objective: "Biblioteca de código abierto para machine learning y deep learning",
      url: "https://tensorflow.org",
      license: "Apache 2.0",
      year: 2015,
      author: "Google Brain Team",
      category: "Framework ML",
      description: "Plataforma integral para desarrollar y entrenar modelos de ML",
    },
    {
      name: "PyTorch",
      objective: "Framework de deep learning con enfoque en investigación",
      url: "https://pytorch.org",
      license: "BSD-3-Clause",
      year: 2016,
      author: "Meta AI Research",
      category: "Framework ML",
      description: "Biblioteca de Python para computación tensorial y redes neuronales",
    },
    {
      name: "Scikit-learn",
      objective: "Herramientas simples y eficientes para análisis de datos",
      url: "https://scikit-learn.org",
      license: "BSD",
      year: 2007,
      author: "David Cournapeau",
      category: "Biblioteca ML",
      description: "Algoritmos de ML clásicos para clasificación, regresión y clustering",
    },
    {
      name: "Keras",
      objective: "API de alto nivel para redes neuronales",
      url: "https://keras.io",
      license: "MIT",
      year: 2015,
      author: "François Chollet",
      category: "Framework ML",
      description: "Interfaz simplificada para construir y entrenar modelos de deep learning",
    },
  ],
  nlp: [
    {
      name: "OpenAI GPT",
      objective: "Modelo de lenguaje generativo pre-entrenado",
      url: "https://openai.com/gpt-4",
      license: "Propietaria",
      year: 2018,
      author: "OpenAI",
      category: "LLM",
      description: "Modelo de lenguaje para generación y comprensión de texto",
    },
    {
      name: "spaCy",
      objective: "Biblioteca de procesamiento de lenguaje natural",
      url: "https://spacy.io",
      license: "MIT",
      year: 2015,
      author: "Explosion AI",
      category: "NLP Library",
      description: "Herramientas avanzadas para análisis y procesamiento de texto",
    },
    {
      name: "NLTK",
      objective: "Plataforma para trabajar con datos de lenguaje humano",
      url: "https://nltk.org",
      license: "Apache 2.0",
      year: 2001,
      author: "Steven Bird, Edward Loper",
      category: "NLP Library",
      description: "Conjunto de bibliotecas y programas para procesamiento simbólico",
    },
    {
      name: "Hugging Face Transformers",
      objective: "Modelos pre-entrenados de NLP",
      url: "https://huggingface.co/transformers",
      license: "Apache 2.0",
      year: 2019,
      author: "Hugging Face",
      category: "NLP Platform",
      description: "Biblioteca para usar modelos transformer pre-entrenados",
    },
  ],
  "computer-vision": [
    {
      name: "OpenCV",
      objective: "Biblioteca de visión por computadora",
      url: "https://opencv.org",
      license: "Apache 2.0",
      year: 1999,
      author: "Intel Corporation",
      category: "Computer Vision",
      description: "Herramientas para procesamiento de imágenes y visión artificial",
    },
    {
      name: "YOLO",
      objective: "Detección de objetos en tiempo real",
      url: "https://pjreddie.com/darknet/yolo",
      license: "MIT",
      year: 2016,
      author: "Joseph Redmon",
      category: "Object Detection",
      description: "Sistema de detección de objetos rápido y preciso",
    },
    {
      name: "MediaPipe",
      objective: "Framework para pipelines de percepción multimodal",
      url: "https://mediapipe.dev",
      license: "Apache 2.0",
      year: 2019,
      author: "Google",
      category: "Computer Vision",
      description: "Soluciones de ML para análisis de medios en tiempo real",
    },
  ],
  robotics: [
    {
      name: "ROS (Robot Operating System)",
      objective: "Framework para desarrollo de software robótico",
      url: "https://ros.org",
      license: "BSD",
      year: 2007,
      author: "Willow Garage",
      category: "Robotics Framework",
      description: "Sistema operativo para robots con herramientas y bibliotecas",
    },
    {
      name: "Gazebo",
      objective: "Simulador de robots 3D",
      url: "http://gazebosim.org",
      license: "Apache 2.0",
      year: 2004,
      author: "Open Source Robotics Foundation",
      category: "Simulation",
      description: "Simulación física precisa para pruebas de robots",
    },
  ],
  "expert-systems": [
    {
      name: "CLIPS",
      objective: "Herramienta para construir sistemas expertos",
      url: "http://clipsrules.net",
      license: "Dominio Público",
      year: 1985,
      author: "NASA",
      category: "Expert System Shell",
      description: "Entorno de desarrollo para sistemas basados en reglas",
    },
    {
      name: "Drools",
      objective: "Motor de reglas de negocio",
      url: "https://drools.org",
      license: "Apache 2.0",
      year: 2001,
      author: "Red Hat",
      category: "Rule Engine",
      description: "Plataforma para gestión de reglas de negocio y flujos de trabajo",
    },
  ],
  "search-algorithms": [
    {
      name: "AIMA Python",
      objective: "Implementaciones de algoritmos de IA",
      url: "https://github.com/aimacode/aima-python",
      license: "MIT",
      year: 2016,
      author: "Peter Norvig, Stuart Russell",
      category: "Educational",
      description: 'Código del libro "Artificial Intelligence: A Modern Approach"',
    },
    {
      name: "PathFinding.js",
      objective: "Biblioteca de algoritmos de pathfinding",
      url: "https://github.com/qiao/PathFinding.js",
      license: "MIT",
      year: 2012,
      author: "Xueqiao Xu",
      category: "Pathfinding",
      description: "Implementación de algoritmos A*, Dijkstra y otros",
    },
  ],
}

const categories = [
  { id: "machine-learning", name: "Machine Learning", count: aiTools["machine-learning"].length },
  { id: "nlp", name: "Procesamiento de Lenguaje", count: aiTools.nlp.length },
  { id: "computer-vision", name: "Visión Artificial", count: aiTools["computer-vision"].length },
  { id: "robotics", name: "Robótica", count: aiTools.robotics.length },
  { id: "expert-systems", name: "Sistemas Expertos", count: aiTools["expert-systems"].length },
  { id: "search-algorithms", name: "Algoritmos de Búsqueda", count: aiTools["search-algorithms"].length },
]

export function AIToolsCatalog() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("machine-learning")

  const handleVoiceSearch = (query: string) => {
    setSearchTerm(query)
  }

  // Escuchar eventos del Hero para filtrar herramientas
  useEffect(() => {
    const handleHeroSearch = (event: CustomEvent) => {
      const { query } = event.detail
      setSearchTerm(query)
    }

    window.addEventListener("heroSearch", handleHeroSearch as EventListener)

    return () => {
      window.removeEventListener("heroSearch", handleHeroSearch as EventListener)
    }
  }, [])

  const filteredTools =
    aiTools[selectedCategory as keyof typeof aiTools]?.filter(
      (tool) =>
        tool.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        tool.objective.toLowerCase().includes(searchTerm.toLowerCase()) ||
        tool.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
        tool.description.toLowerCase().includes(searchTerm.toLowerCase()),
    ) || []

  return (
    <section id="herramientas" className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Catálogo de Herramientas de IA</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Descubre las principales herramientas, frameworks y bibliotecas utilizadas en cada área de la IA
          </p>
        </div>

        <div className="mb-8">
          <VoiceSearch
            onSearch={handleVoiceSearch}
            placeholder="Buscar herramientas de IA... (Prueba la búsqueda por voz)"
            className="max-w-lg"
            searchType="tools"
            enableAutoScroll={false} // Sin scroll automático
          />
        </div>

        <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="w-full">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-6 mb-8">
            {categories.map((category) => (
              <TabsTrigger key={category.id} value={category.id} className="text-xs lg:text-sm">
                {category.name}
                <Badge variant="secondary" className="ml-2 text-xs">
                  {category.count}
                </Badge>
              </TabsTrigger>
            ))}
          </TabsList>

          {categories.map((category) => (
            <TabsContent key={category.id} value={category.id}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredTools.map((tool, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div>
                          <CardTitle className="text-lg mb-2">{tool.name}</CardTitle>
                          <Badge variant="outline" className="mb-2">
                            {tool.category}
                          </Badge>
                        </div>
                        <Button variant="ghost" size="icon" asChild>
                          <a href={tool.url} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        </Button>
                      </div>
                      <CardDescription>{tool.objective}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-600 mb-4">{tool.description}</p>

                      <div className="space-y-2 text-sm">
                        <div className="flex items-center gap-2">
                          <User className="w-4 h-4 text-gray-400" />
                          <span className="font-medium">Autor:</span>
                          <span>{tool.author}</span>
                        </div>

                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4 text-gray-400" />
                          <span className="font-medium">Año:</span>
                          <span>{tool.year}</span>
                        </div>

                        <div className="flex items-center gap-2">
                          <Shield className="w-4 h-4 text-gray-400" />
                          <span className="font-medium">Licencia:</span>
                          <Badge variant={tool.license === "Propietaria" ? "destructive" : "default"}>
                            {tool.license}
                          </Badge>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {filteredTools.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-gray-500">No se encontraron herramientas que coincidan con "{searchTerm}".</p>
                  <p className="text-sm text-gray-400 mt-2">Intenta con otros términos o usa la búsqueda por voz.</p>
                </div>
              )}
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  )
}
