import Header from "@/components/header"
import { HeroSection } from "@/components/landing/hero-section"
import { MissionVisionSection } from "@/components/landing/mission-vision-section"
import { CommunitySection } from "@/components/landing/community-section"
import { ProductsSection } from "@/components/landing/products-section"
import { CTASection } from "@/components/landing/cta-section"

export default function NewHazeLanding() {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Header />
      <HeroSection />
      <MissionVisionSection />
      <CommunitySection />
      <ProductsSection />
      <CTASection />
    </div>
  )
}
