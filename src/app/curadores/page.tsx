import { Footer } from '@/components/footer'
import AboutUs from "@/components/about-us";
import Hero from "@/components/hero";

export default function Curadores() {
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
