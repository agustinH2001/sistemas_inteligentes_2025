import { Suspense } from "react"
import { SearchSection } from "@/components/search-section"
import { FeaturedContent } from "@/components/featured-content"
import { StatsSection } from "@/components/stats-section"
import { HeroSection } from "@/components/hero-section"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <HeroSection />
      <SearchSection />
      <Suspense fallback={<div>Cargando contenido destacado...</div>}>
        <FeaturedContent />
      </Suspense>
      <StatsSection />
    </div>
  )
}
