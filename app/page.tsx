import { Hero } from "@/components/hero"
import { Navigation } from "@/components/navigation"
import { TopicsGrid } from "@/components/topics-grid"
import { AIToolsCatalog } from "@/components/ai-tools-catalog"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Navigation />
      <Hero />
      <TopicsGrid />
      <AIToolsCatalog />
    </div>
  )
}
