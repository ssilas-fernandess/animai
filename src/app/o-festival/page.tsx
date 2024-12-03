import { Footer } from '@/components/footer'
import type { Metadata } from 'next'
import AboutUs from "@/components/about-us";
import Hero from "@/components/hero";

export const metadata: Metadata = {
  description:
    'Radiant helps you sell more by revealing sensitive information about your customers.',
}

export default function SobreFestival() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <main className="bg-gradient-to-b from-white from-50% to-gray-100 py-32">
        <AboutUs />
      </main>
      <Footer />
    </div>
  )
}
