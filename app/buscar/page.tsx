"use client"

import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Search, Filter, Mic, MicOff } from "lucide-react"
import Link from "next/link"

// Datos de ejemplo para la búsqueda
const searchData = [
  {
    id: "que-es-ia",
    title: "¿Qué es la Inteligencia Artificial?",
    type: "concepto",
    category: "Fundamentos",
    content:
      "La Inteligencia Artificial es un área de la informática que desarrolla sistemas capaces de realizar tareas que requieren inteligencia humana...",
    tags: ["IA", "definición", "fundamentos", "sistemas inteligentes"],
  },
  {
    id: "machine-learning",
    title: "Aprendizaje Automático",
    type: "concepto",
    category: "Técnicas",
    content: "El Machine Learning permite que los sistemas aprendan de los datos sin ser programados explícitamente...",
    tags: ["ML", "aprendizaje", "datos", "algoritmos"],
  },
  {
    id: "tensorflow",
    title: "TensorFlow",
    type: "software",
    category: "Framework ML",
    content: "Plataforma de código abierto para machine learning desarrollada por Google...",
    tags: ["Google", "framework", "deep learning", "código abierto"],
  },
  {
    id: "redes-neuronales",
    title: "Redes Neuronales",
    type: "concepto",
    category: "Avanzado",
    content: "Sistemas computacionales inspirados en el cerebro humano para deep learning...",
    tags: ["neuronas", "deep learning", "cerebro", "capas"],
  },
]

export default function BuscarPage() {
  const searchParams = useSearchParams()
  const [query, setQuery] = useState(searchParams.get("q") || "")
  const [results, setResults] = useState(searchData)
  const [isListening, setIsListening] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState("Todos")

  const categories = ["Todos", "Fundamentos", "Técnicas", "Avanzado", "Framework ML"]

  useEffect(() => {
    if (query) {
      performSearch(query)
    } else {
      setResults(searchData)
    }
  }, [query])

  const performSearch = (searchQuery: string) => {
    const filtered = searchData.filter((item) => {
      const matchesQuery =
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()))

      const matchesCategory = selectedCategory === "Todos" || item.category === selectedCategory

      return matchesQuery && matchesCategory
    })
    setResults(filtered)
  }

  const startVoiceSearch = () => {
    if ("webkitSpeechRecognition" in window || "SpeechRecognition" in window) {
      const SpeechRecognition = (window as any).webkitSpeechRecognition || (window as any).SpeechRecognition
      const recognition = new SpeechRecognition()

      recognition.lang = "es-ES"
      recognition.continuous = false
      recognition.interimResults = false

      recognition.onstart = () => {
        setIsListening(true)
      }

      recognition.onresult = (event: any) => {
        const transcript = event.results[0][0].transcript
        setQuery(transcript)
        setIsListening(false)
      }

      recognition.onerror = () => {
        setIsListening(false)
      }

      recognition.onend = () => {
        setIsListening(false)
      }

      recognition.start()
    } else {
      alert("Tu navegador no soporta reconocimiento de voz")
    }
  }

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category)
    if (query) {
      performSearch(query)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Buscar en IA Wiki</h1>
          <p className="text-xl text-gray-600">
            Encuentra conceptos, herramientas y información sobre Inteligencia Artificial
          </p>
        </div>

        {/* Barra de búsqueda */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="flex flex-col space-y-4">
              <div className="relative">
                <Input
                  type="text"
                  placeholder="Buscar conceptos, algoritmos, herramientas..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="pr-24 h-12 text-lg"
                />
                <div className="absolute right-2 top-1/2 -translate-y-1/2 flex gap-2">
                  <Button
                    type="button"
                    size="sm"
                    variant={isListening ? "destructive" : "outline"}
                    onClick={startVoiceSearch}
                    disabled={isListening}
                  >
                    {isListening ? <MicOff className="w-4 h-4" /> : <Mic className="w-4 h-4" />}
                  </Button>
                  <Button size="sm">
                    <Search className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              {isListening && (
                <div className="text-center text-sm text-blue-600 animate-pulse">🎤 Escuchando... Habla ahora</div>
              )}

              {/* Filtros por categoría */}
              <div className="flex flex-wrap gap-2">
                <Filter className="w-5 h-5 text-gray-500 mt-1" />
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    size="sm"
                    onClick={() => handleCategoryChange(category)}
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Resultados */}
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-semibold text-gray-900">Resultados ({results.length})</h2>
          </div>

          {results.length === 0 ? (
            <Card>
              <CardContent className="p-8 text-center">
                <p className="text-gray-500">No se encontraron resultados para tu búsqueda.</p>
              </CardContent>
            </Card>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {results.map((result) => (
                <Link
                  key={result.id}
                  href={result.type === "concepto" ? `/conceptos/${result.id}` : `/catalogo#${result.id}`}
                >
                  <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer">
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <CardTitle className="text-lg">{result.title}</CardTitle>
                        <Badge variant={result.type === "concepto" ? "default" : "secondary"}>
                          {result.type === "concepto" ? "Concepto" : "Software"}
                        </Badge>
                      </div>
                      <Badge variant="outline" className="w-fit">
                        {result.category}
                      </Badge>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 text-sm mb-3 line-clamp-3">{result.content}</p>
                      <div className="flex flex-wrap gap-1">
                        {result.tags.slice(0, 3).map((tag, index) => (
                          <Badge key={index} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                        {result.tags.length > 3 && (
                          <Badge variant="secondary" className="text-xs">
                            +{result.tags.length - 3}
                          </Badge>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
