"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Mic, MicOff } from "lucide-react"
import { cn } from "@/lib/utils"

// Declaraciones de tipos para Web Speech API
declare global {
  interface Window {
    SpeechRecognition: typeof SpeechRecognition
    webkitSpeechRecognition: typeof SpeechRecognition
  }
}

// Definir SpeechGrammarList primero
interface SpeechGrammarList {
  readonly length: number
  addFromString(string: string, weight?: number): void
  addFromURI(src: string, weight?: number): void
  item(index: number): SpeechGrammar
  [index: number]: SpeechGrammar
}

interface SpeechGrammar {
  src: string
  weight: number
}

interface SpeechRecognitionResultList {
  readonly length: number
  item(index: number): SpeechRecognitionResult
  [index: number]: SpeechRecognitionResult
}

interface SpeechRecognitionResult {
  readonly isFinal: boolean
  readonly length: number
  item(index: number): SpeechRecognitionAlternative
  [index: number]: SpeechRecognitionAlternative
}

interface SpeechRecognitionAlternative {
  readonly confidence: number
  readonly transcript: string
}

interface SpeechRecognitionEvent extends Event {
  readonly resultIndex: number
  readonly results: SpeechRecognitionResultList
}

interface SpeechRecognitionErrorEvent extends Event {
  readonly error: string
  readonly message: string
}

interface SpeechRecognition extends EventTarget {
  continuous: boolean
  grammars: SpeechGrammarList
  interimResults: boolean
  lang: string
  maxAlternatives: number
  serviceURI: string
  start(): void
  stop(): void
  abort(): void
  onaudioend: ((this: SpeechRecognition, ev: Event) => any) | null
  onaudiostart: ((this: SpeechRecognition, ev: Event) => any) | null
  onend: ((this: SpeechRecognition, ev: Event) => any) | null
  onerror: ((this: SpeechRecognition, ev: SpeechRecognitionErrorEvent) => any) | null
  onnomatch: ((this: SpeechRecognition, ev: SpeechRecognitionEvent) => any) | null
  onresult: ((this: SpeechRecognition, ev: SpeechRecognitionEvent) => any) | null
  onsoundend: ((this: SpeechRecognition, ev: Event) => any) | null
  onsoundstart: ((this: SpeechRecognition, ev: Event) => any) | null
  onspeechend: ((this: SpeechRecognition, ev: Event) => any) | null
  onspeechstart: ((this: SpeechRecognition, ev: Event) => any) | null
  onstart: ((this: SpeechRecognition, ev: Event) => any) | null
}

declare var SpeechRecognition: {
  prototype: SpeechRecognition
  new (): SpeechRecognition
}

interface VoiceSearchProps {
  onSearch: (query: string) => void
  onConceptFound?: (concept: string) => void
  placeholder?: string
  className?: string
  searchType?: "tools" | "concepts" | "both"
  enableAutoScroll?: boolean
}

// Mapeo de conceptos con sinónimos y variaciones
const conceptMappings: Record<string, string[]> = {
  "IA Débil vs Fuerte": [
    "ia débil",
    "ia fuerte",
    "inteligencia artificial débil",
    "inteligencia artificial fuerte",
    "ia estrecha",
    "ia general",
    "artificial general intelligence",
    "agi",
    "débil versus fuerte",
    "débil contra fuerte",
  ],
  "Test de Turing": [
    "test de turing",
    "prueba de turing",
    "test turing",
    "alan turing",
    "turing test",
    "máquina de turing",
  ],
  "Agentes Inteligentes": [
    "agentes inteligentes",
    "agente inteligente",
    "agentes autónomos",
    "agente autónomo",
    "sistemas multi agente",
    "multiagente",
  ],
  "Niveles Funcionales": [
    "niveles funcionales",
    "niveles de ia",
    "tipos de inteligencia artificial",
    "clasificación de ia",
    "máquinas reactivas",
    "memoria limitada",
    "teoría de la mente",
    "autoconsciencia",
  ],
  "Espacio de Estados": ["espacio de estados", "estados", "búsqueda en estados"],
  "A*": ["a estrella", "algoritmo a estrella", "a star", "algoritmo a*"],
  "BFS/DFS": ["bfs", "dfs", "búsqueda en anchura", "búsqueda en profundidad", "breadth first", "depth first"],
  Heurísticas: ["heurísticas", "heurística", "función heurística"],
  Supervisado: ["aprendizaje supervisado", "supervisado", "machine learning supervisado"],
  "No Supervisado": ["aprendizaje no supervisado", "no supervisado", "unsupervised learning"],
  Refuerzo: ["aprendizaje por refuerzo", "refuerzo", "reinforcement learning"],
  "Deep Learning": ["deep learning", "aprendizaje profundo", "redes neuronales profundas"],
}

export function VoiceSearch({
  onSearch,
  onConceptFound,
  placeholder = "Buscar...",
  className,
  searchType = "both",
  enableAutoScroll = true,
}: VoiceSearchProps) {
  const [isListening, setIsListening] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [status, setStatus] = useState("Presiona el micrófono para buscar por voz")
  const [isSupported, setIsSupported] = useState(true)
  const recognitionRef = useRef<any>(null)

  // Función para encontrar conceptos en el texto
  const findMatchingConcept = (text: string): string | null => {
    const lowerText = text.toLowerCase()

    for (const [concept, variations] of Object.entries(conceptMappings)) {
      for (const variation of variations) {
        if (lowerText.includes(variation.toLowerCase())) {
          return concept
        }
      }
    }
    return null
  }

  // Función para manejar conceptos encontrados (con o sin scroll)
  const handleConceptFound = (concept: string, shouldScroll = true) => {
    if (onConceptFound) {
      if (shouldScroll && enableAutoScroll) {
        // Solo hacer scroll si está habilitado
        const fundamentosSection = document.getElementById("fundamentos")
        if (fundamentosSection) {
          fundamentosSection.scrollIntoView({ behavior: "smooth", block: "center" })
        }
        // Delay para que termine el scroll antes de abrir el modal
        setTimeout(() => {
          onConceptFound(concept)
        }, 500)
      } else {
        // Abrir modal inmediatamente sin scroll
        onConceptFound(concept)
      }
    }
  }

  useEffect(() => {
    // Verificar si el navegador soporta Web Speech API
    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition

    if (!SpeechRecognition) {
      setIsSupported(false)
      setStatus("Tu navegador no soporta búsqueda por voz")
      return
    }

    const recognition = new SpeechRecognition()
    recognition.lang = "es-ES"
    recognition.interimResults = false
    recognition.maxAlternatives = 1
    recognition.continuous = false

    recognition.onstart = () => {
      setIsListening(true)
      setStatus("Escuchando... Habla ahora")
    }

    recognition.onresult = (event: any) => {
      const speechResult = event.results[0][0].transcript
      setSearchQuery(speechResult)

      // Buscar conceptos primero si está habilitado
      if ((searchType === "concepts" || searchType === "both") && onConceptFound) {
        const matchingConcept = findMatchingConcept(speechResult)
        if (matchingConcept) {
          // Para búsqueda por voz, siempre hacer scroll si está habilitado
          handleConceptFound(matchingConcept, enableAutoScroll)
          setStatus(`Concepto encontrado: "${matchingConcept}"`)
          return
        }
      }

      // Si no se encuentra concepto, hacer búsqueda normal
      if (searchType === "tools" || searchType === "both") {
        onSearch(speechResult)
        setStatus(`Búsqueda: "${speechResult}"`)
      }
    }

    recognition.onspeechend = () => {
      recognition.stop()
    }

    recognition.onend = () => {
      setIsListening(false)
      setStatus("Presiona el micrófono para buscar por voz")
    }

    recognition.onerror = (event: any) => {
      setIsListening(false)
      if (event.error === "no-speech") {
        setStatus("No se detectó voz. Inténtalo de nuevo")
      } else if (event.error === "not-allowed") {
        setStatus("Permiso de micrófono denegado")
      } else {
        setStatus(`Error: ${event.error}`)
      }
    }

    recognitionRef.current = recognition

    return () => {
      if (recognitionRef.current) {
        recognitionRef.current.stop()
      }
    }
  }, [onSearch, onConceptFound, searchType, enableAutoScroll])

  const startListening = () => {
    if (recognitionRef.current && !isListening) {
      recognitionRef.current.start()
    }
  }

  const stopListening = () => {
    if (recognitionRef.current && isListening) {
      recognitionRef.current.stop()
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setSearchQuery(value)

    // Buscar conceptos en tiempo real mientras se escribe, pero SIN scroll automático
    if ((searchType === "concepts" || searchType === "both") && onConceptFound) {
      const matchingConcept = findMatchingConcept(value)
      if (matchingConcept) {
        // Para escritura manual, NO hacer scroll automático
        handleConceptFound(matchingConcept, false)
        return
      }
    }

    if (searchType === "tools" || searchType === "both") {
      onSearch(value)
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      const matchingConcept = findMatchingConcept(searchQuery)
      if (matchingConcept && onConceptFound) {
        // Al presionar Enter, SÍ hacer scroll si está habilitado
        handleConceptFound(matchingConcept, enableAutoScroll)
      } else {
        onSearch(searchQuery)
      }
    }
  }

  return (
    <div className={cn("w-full max-w-md mx-auto", className)}>
      <div className="relative">
        <Input
          type="text"
          placeholder={placeholder}
          value={searchQuery}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
          className="pr-14 text-base"
        />
        <Button
          type="button"
          size="icon"
          variant="ghost"
          className={cn(
            "absolute right-1 top-1/2 -translate-y-1/2 h-8 w-8 rounded-full",
            isListening && "bg-red-100 text-red-600 animate-pulse",
            !isSupported && "opacity-50 cursor-not-allowed",
          )}
          onClick={isListening ? stopListening : startListening}
          disabled={!isSupported}
          title={isSupported ? (isListening ? "Detener grabación" : "Buscar por voz") : "No soportado"}
        >
          {isListening ? <MicOff className="h-4 w-4" /> : <Mic className="h-4 w-4" />}
        </Button>
      </div>

      {/* Status indicator */}
      <p className="text-xs text-gray-500 mt-2 text-center h-4">{status}</p>

      {/* Sugerencias de comandos de voz */}
      {searchType !== "tools" && (
        <div className="mt-2 text-xs text-gray-400 text-center">
          <p>Prueba: "IA débil", "Test de Turing", "Agentes inteligentes"</p>
        </div>
      )}
    </div>
  )
}
