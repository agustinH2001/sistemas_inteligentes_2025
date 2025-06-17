import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Star, Calendar, User, Shield } from "lucide-react"

const softwareList = [
  {
    id: "tensorflow",
    name: "TensorFlow",
    description: "Plataforma de código abierto para machine learning desarrollada por Google",
    category: "Framework ML",
    license: "Apache 2.0",
    year: 2015,
    author: "Google",
    url: "https://tensorflow.org",
    rating: 4.8,
    objectives: ["Deep Learning", "Redes Neuronales", "Investigación", "Producción"],
  },
  {
    id: "pytorch",
    name: "PyTorch",
    description: "Framework de deep learning con enfoque en flexibilidad y velocidad",
    category: "Framework ML",
    license: "BSD-3-Clause",
    year: 2016,
    author: "Meta (Facebook)",
    url: "https://pytorch.org",
    rating: 4.7,
    objectives: ["Deep Learning", "Investigación", "Prototipado Rápido"],
  },
  {
    id: "openai-gpt",
    name: "OpenAI GPT",
    description: "Modelo de lenguaje generativo para procesamiento de texto",
    category: "LLM",
    license: "Propietaria",
    year: 2018,
    author: "OpenAI",
    url: "https://openai.com",
    rating: 4.9,
    objectives: ["Generación de Texto", "Conversación", "Asistencia"],
  },
  {
    id: "scikit-learn",
    name: "Scikit-learn",
    description: "Biblioteca de machine learning para Python, simple y eficiente",
    category: "Biblioteca ML",
    license: "BSD",
    year: 2007,
    author: "David Cournapeau",
    url: "https://scikit-learn.org",
    rating: 4.6,
    objectives: ["Clasificación", "Regresión", "Clustering", "Análisis"],
  },
  {
    id: "opencv",
    name: "OpenCV",
    description: "Biblioteca de visión por computadora y machine learning",
    category: "Visión Artificial",
    license: "Apache 2.0",
    year: 1999,
    author: "Intel",
    url: "https://opencv.org",
    rating: 4.5,
    objectives: ["Procesamiento de Imágenes", "Visión Artificial", "Detección de Objetos"],
  },
  {
    id: "huggingface",
    name: "Hugging Face",
    description: "Plataforma para modelos de NLP y transformers",
    category: "NLP",
    license: "Apache 2.0",
    year: 2016,
    author: "Hugging Face",
    url: "https://huggingface.co",
    rating: 4.8,
    objectives: ["NLP", "Transformers", "Modelos Preentrenados"],
  },
]

const categories = ["Todos", "Framework ML", "LLM", "Biblioteca ML", "Visión Artificial", "NLP"]

export default function CatalogoPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Catálogo de Software de IA</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Descubre las mejores herramientas, frameworks y plataformas de Inteligencia Artificial
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {softwareList.map((software) => (
            <Card key={software.id} className="h-full hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-xl mb-2">{software.name}</CardTitle>
                    <Badge variant="outline" className="mb-2">
                      {software.category}
                    </Badge>
                  </div>
                  <div className="flex items-center space-x-1 text-yellow-500">
                    <Star className="w-4 h-4 fill-current" />
                    <span className="text-sm font-medium">{software.rating}</span>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-gray-600 text-sm">{software.description}</p>

                <div className="space-y-2">
                  <div className="flex items-center space-x-2 text-sm text-gray-500">
                    <User className="w-4 h-4" />
                    <span>{software.author}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-500">
                    <Calendar className="w-4 h-4" />
                    <span>{software.year}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-500">
                    <Shield className="w-4 h-4" />
                    <span>{software.license}</span>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-sm mb-2">Objetivos principales:</h4>
                  <div className="flex flex-wrap gap-1">
                    {software.objectives.map((objective, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {objective}
                      </Badge>
                    ))}
                  </div>
                </div>

                <Button asChild className="w-full" variant="outline">
                  <a href={software.url} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Visitar Sitio Web
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
