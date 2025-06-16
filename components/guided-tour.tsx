"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { X, ArrowRight, ArrowLeft, MapPin } from "lucide-react"

interface TourStep {
  id: string
  title: string
  description: string
  target: string
  position: "top" | "bottom" | "left" | "right"
}

const tourSteps: TourStep[] = [
  {
    id: "step1",
    title: "Navegación Principal",
    description: "Usa este menú para moverte entre las diferentes secciones de la enciclopedia.",
    target: "nav",
    position: "bottom",
  },
  {
    id: "step2",
    title: "Áreas de Conocimiento",
    description: "Explora los 8 campos principales de la IA. Cada tarjeta contiene conceptos clave del área.",
    target: "fundamentos",
    position: "top",
  },
  {
    id: "step3",
    title: "Catálogo de Herramientas",
    description: "Descubre más de 15 herramientas de IA organizadas por categorías con información detallada.",
    target: "herramientas",
    position: "top",
  },
  {
    id: "step4",
    title: "Búsqueda Inteligente",
    description: "Usa el buscador para encontrar herramientas específicas por nombre, objetivo o autor.",
    target: "search-input",
    position: "bottom",
  },
]

interface GuidedTourProps {
  isOpen: boolean
  onClose: () => void
}

export function GuidedTour({ isOpen, onClose }: GuidedTourProps) {
  const [currentStep, setCurrentStep] = useState(0)
  const [highlightedElement, setHighlightedElement] = useState<HTMLElement | null>(null)

  useEffect(() => {
    if (isOpen && tourSteps[currentStep]) {
      const element =
        document.getElementById(tourSteps[currentStep].target) ||
        document.querySelector(`[data-tour="${tourSteps[currentStep].target}"]`)

      if (element) {
        setHighlightedElement(element as HTMLElement)
        element.scrollIntoView({ behavior: "smooth", block: "center" })
      }
    }
  }, [isOpen, currentStep])

  const nextStep = () => {
    if (currentStep < tourSteps.length - 1) {
      setCurrentStep(currentStep + 1)
    } else {
      onClose()
    }
  }

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

  const skipTour = () => {
    onClose()
  }

  if (!isOpen) return null

  const currentTourStep = tourSteps[currentStep]

  return (
    <>
      {/* Overlay */}
      <div className="fixed inset-0 bg-black bg-opacity-60 z-40" onClick={skipTour} />

      {/* Highlight effect */}
      {highlightedElement && (
        <div
          className="fixed z-50 pointer-events-none border-4 border-blue-500 rounded-lg shadow-lg"
          style={{
            top: highlightedElement.offsetTop - 8,
            left: highlightedElement.offsetLeft - 8,
            width: highlightedElement.offsetWidth + 16,
            height: highlightedElement.offsetHeight + 16,
          }}
        />
      )}

      {/* Tour Card */}
      <div
        className="fixed z-50 max-w-sm mx-4"
        style={{
          top: highlightedElement
            ? currentTourStep.position === "bottom"
              ? highlightedElement.offsetTop + highlightedElement.offsetHeight + 20
              : highlightedElement.offsetTop - 200
            : "50%",
          left: highlightedElement ? highlightedElement.offsetLeft : "50%",
          transform: !highlightedElement ? "translate(-50%, -50%)" : "none",
        }}
      >
        <Card className="shadow-2xl border-2 border-blue-200">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-blue-600" />
                <span className="text-sm font-medium text-blue-600">
                  Paso {currentStep + 1} de {tourSteps.length}
                </span>
              </div>
              <Button variant="ghost" size="icon" onClick={skipTour}>
                <X className="w-4 h-4" />
              </Button>
            </div>
            <CardTitle className="text-lg">{currentTourStep.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-base mb-6">{currentTourStep.description}</CardDescription>

            <div className="flex items-center justify-between">
              <Button
                variant="outline"
                onClick={prevStep}
                disabled={currentStep === 0}
                className="flex items-center gap-2"
              >
                <ArrowLeft className="w-4 h-4" />
                Anterior
              </Button>

              <div className="flex gap-2">
                <Button variant="ghost" onClick={skipTour} className="text-gray-500">
                  Saltar
                </Button>
                <Button onClick={nextStep} className="bg-blue-600 hover:bg-blue-700 flex items-center gap-2">
                  {currentStep === tourSteps.length - 1 ? "Finalizar" : "Siguiente"}
                  {currentStep < tourSteps.length - 1 && <ArrowRight className="w-4 h-4" />}
                </Button>
              </div>
            </div>

            {/* Progress bar */}
            <div className="mt-4">
              <div className="flex justify-between text-xs text-gray-500 mb-1">
                <span>Progreso del tour</span>
                <span>{Math.round(((currentStep + 1) / tourSteps.length) * 100)}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${((currentStep + 1) / tourSteps.length) * 100}%` }}
                />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  )
}
