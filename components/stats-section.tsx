import { Card, CardContent } from "@/components/ui/card"
import { BookOpen, Code, Users, Star } from "lucide-react"

const stats = [
  {
    icon: BookOpen,
    value: "50+",
    label: "Conceptos Explicados",
    description: "Desde fundamentos hasta temas avanzados",
  },
  {
    icon: Code,
    value: "100+",
    label: "Herramientas de IA",
    description: "Software y frameworks catalogados",
  },
  {
    icon: Users,
    value: "1000+",
    label: "Usuarios Activos",
    description: "Comunidad en crecimiento",
  },
  {
    icon: Star,
    value: "4.8",
    label: "Puntuación Media",
    description: "Calidad valorada por usuarios",
  },
]

export function StatsSection() {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Nuestra Plataforma en Números</h2>
          <p className="text-lg text-gray-600">Una enciclopedia completa y en constante crecimiento</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon
            return (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                  <div className="text-lg font-semibold text-gray-700 mb-1">{stat.label}</div>
                  <div className="text-sm text-gray-600">{stat.description}</div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
