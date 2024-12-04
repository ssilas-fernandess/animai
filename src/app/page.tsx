import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { LogoCloud } from '@/components/logo-cloud'
import Events from "@/components/calendar";
import Hero from "@/components/hero";
import {Arts} from "@/components/arts";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <main>
        <Container className="mt-10">
          <LogoCloud />
        </Container>
        <div className="bg-gradient-to-b from-white from-50% to-gray-100 py-32">
          <div id="events">
            <Events/>
          </div>
          <div id="arts">
            <Arts/>
          </div>
        </div>
      </main>
      <Footer/>
    </div>
  )
}
