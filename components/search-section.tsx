"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Search, Mic, MicOff } from "lucide-react"
import { useRouter } from "next/navigation"

export function SearchSection() {
  const [searchQuery, setSearchQuery] = useState("")
  const [isListening, setIsListening] = useState(false)
  const router = useRouter()

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      router.push(`/buscar?q=${encodeURIComponent(searchQuery)}`)
    }
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
        setSearchQuery(transcript)
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

  return (
    <section className="py-16 px-4">
      <div className="max-w-2xl mx-auto">
        <Card className="shadow-lg">
          <CardContent className="p-6">
            <form onSubmit={handleSearch} className="space-y-4">
              <div className="relative">
                <Input
                  type="text"
                  placeholder="Buscar conceptos de IA, algoritmos, herramientas..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
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
                  <Button type="submit" size="sm">
                    <Search className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              {isListening && (
                <div className="text-center text-sm text-blue-600 animate-pulse">🎤 Escuchando... Habla ahora</div>
              )}
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
