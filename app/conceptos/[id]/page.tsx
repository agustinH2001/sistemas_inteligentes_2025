import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Clock, BookOpen, Star } from "lucide-react"
import Link from "next/link"
import { notFound } from "next/navigation"

// Contenido de ejemplo basado en el archivo snippet.txt
const conceptsContent: Record<string, any> = {
  "que-es-ia": {
    title: "¿Qué es la Inteligencia Artificial?",
    category: "Fundamentos",
    readTime: "8 min",
    difficulty: "Básico",
    rating: 4.7,
    content: `
# ¿Qué es la Inteligencia Artificial?

La **Inteligencia Artificial (IA)** es un área de la informática que se encarga de desarrollar sistemas capaces de realizar tareas que normalmente requieren inteligencia humana. Estas tareas incluyen aprender, razonar, resolver problemas, comprender el lenguaje natural, percibir el entorno, entre otras.

## Ejemplo Práctico
Un asistente como Google Assistant puede entender preguntas, buscar información y responderte como lo haría una persona.

## ¿Qué necesita la IA para funcionar?

Para funcionar, la IA necesita tres elementos fundamentales:

### 1. Adquirir conocimientos
**Ejemplo:** Un sistema que analiza datos médicos para aprender síntomas de enfermedades.

### 2. Almacenar conocimientos  
**Ejemplo:** Un sistema experto guarda reglas médicas y casos clínicos para hacer diagnósticos.

### 3. Usar esos conocimientos para actuar o razonar
**Ejemplo:** Un coche autónomo usa sensores e información previa para frenar ante un peatón.

## Características Principales

- **Aprendizaje:** Capacidad de mejorar el rendimiento con la experiencia
- **Razonamiento:** Aplicación de reglas lógicas para llegar a conclusiones
- **Resolución de problemas:** Encontrar soluciones a situaciones complejas
- **Percepción:** Interpretar información del entorno
- **Interacción:** Comunicarse de manera natural con humanos

La IA representa uno de los avances más significativos de la tecnología moderna, con aplicaciones que van desde asistentes virtuales hasta sistemas de diagnóstico médico.
    `,
  },
  "tipos-ia": {
    title: "Tipos de Inteligencia Artificial",
    category: "Conceptos",
    readTime: "12 min",
    difficulty: "Básico",
    rating: 4.6,
    content: `
# Tipos de Inteligencia Artificial

La Inteligencia Artificial se puede clasificar de diferentes maneras según su capacidad y funcionalidad.

## IA Débil (Estrecha) vs IA Fuerte (General)

### IA Débil (Estrecha)
Es una IA enfocada en **tareas específicas**. No tiene conciencia ni pensamiento general.

**Ejemplos:**
- **Siri:** entiende comandos de voz, pero no puede mantener una conversación profunda
- **Filtros de spam:** detectan correos basura, pero no pueden hacer tareas diferentes

### IA Fuerte (General)
Simula completamente la inteligencia humana. Puede aprender, adaptarse y razonar en múltiples contextos. **Aún no existe**, pero se investiga activamente.

**Ejemplos ficticios:**
- **Jarvis** (Iron Man): Aprende, interactúa, toma decisiones y razona como un humano
- **Samantha** (Her): Asistente de voz con personalidad y sentimientos
- **Ava** (Ex Machina): Robot humanoide con inteligencia, emociones y conciencia

## Niveles Funcionales de IA

### 1. Máquinas Reactivas
- No tienen memoria
- Responden solo al presente
- **Ejemplo:** Deep Blue (IBM) que venció a Kasparov en ajedrez

### 2. Memoria Limitada
- Usan experiencias recientes para tomar decisiones
- **Ejemplo:** Coches autónomos que recuerdan el comportamiento de otros vehículos

### 3. Teoría de la Mente (Futuro)
- Capacidad para comprender emociones e intenciones humanas
- **Ejemplo ficticio:** Robot que detecta tristeza y cambia su comportamiento

### 4. Autoconsciencia (Futuro)
- IA que se reconoce como entidad individual
- **Ejemplo ficticio:** IA de Ex Machina que comprende su propia existencia

## Modelos según Russell y Norvig

### Sistemas que Piensan como Humanos
Intentan replicar el pensamiento humano.

### Sistemas que Actúan como Humanos  
Imitan comportamientos humanos (Test de Turing).

### Sistemas que Piensan Racionalmente
Aplican lógica formal para razonar.

### Sistemas que Actúan Racionalmente
Toman decisiones óptimas según la situación.
    `,
  },
}

export default function ConceptoPage({ params }: { params: { id: string } }) {
  const concept = conceptsContent[params.id]

  if (!concept) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <Button asChild variant="ghost" className="mb-4">
            <Link href="/conceptos">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Volver a Conceptos
            </Link>
          </Button>

          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-2">{concept.title}</h1>
              <div className="flex items-center space-x-4 text-sm text-gray-600">
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-1" />
                  {concept.readTime}
                </div>
                <div className="flex items-center">
                  <BookOpen className="w-4 h-4 mr-1" />
                  {concept.difficulty}
                </div>
                <div className="flex items-center">
                  <Star className="w-4 h-4 mr-1 text-yellow-500 fill-current" />
                  {concept.rating}
                </div>
              </div>
            </div>
            <Badge variant="outline" className="w-fit">
              {concept.category}
            </Badge>
          </div>
        </div>

        {/* Content */}
        <Card>
          <CardContent className="p-8">
            <div
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{
                __html: concept.content
                  .replace(/\n/g, "<br>")
                  .replace(/#{1,6}\s/g, "<h2>")
                  .replace(/<h2>/g, '<h2 class="text-2xl font-bold mt-8 mb-4">')
                  .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>"),
              }}
            />
          </CardContent>
        </Card>

        {/* Rating Section (Placeholder) */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Califica este contenido</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-600">Tu calificación:</span>
              <div className="flex space-x-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Button
                    key={star}
                    variant="ghost"
                    size="sm"
                    className="p-1 opacity-50 cursor-not-allowed"
                    disabled
                    title="Próximamente - Sistema de calificación"
                  >
                    <Star className="w-5 h-5" />
                  </Button>
                ))}
              </div>
              <span className="text-sm text-gray-500">(Próximamente)</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
