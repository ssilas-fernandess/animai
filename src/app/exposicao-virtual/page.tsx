import { Footer } from '@/components/footer'
import Hero from "@/components/hero";
import {Arts} from "@/components/arts";

export default function Exposicao() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <main className="bg-gradient-to-b from-white from-50% to-gray-100 py-32">
        <Arts />
      </main>
      <Footer />
    </div>
  )
}
