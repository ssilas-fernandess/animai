import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { Gradient } from '@/components/gradient'
import { LogoCloud } from '@/components/logo-cloud'
import type { Metadata } from 'next'
import Events from "@/components/calendar";
import AboutUs from "@/components/about-us";
import { Arts } from "@/components/arts";

export const metadata: Metadata = {
  description:
    'Radiant helps you sell more by revealing sensitive information about your customers.',
}

function Hero() {
  return (
    <div className="relative">
      <Gradient className="absolute inset-2 bottom-0 rounded-4xl ring-1 ring-inset ring-black/5" />
      <Container className="relative">
        <div className="pb-24 pt-16 sm:pb-32 sm:pt-24 md:pb-48 md:pt-32">
          <img src="/logo.png" alt="logo" className="h-72" />
          <div className="mt-12 flex flex-col gap-x-6 gap-y-4 sm:flex-row">
            <Button href="#events">Programação</Button>
            <Button variant="secondary" href="#about-us">
              Quem Somos
            </Button>
          </div>
        </div>
      </Container>
    </div>
  )
}

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
            <Events />
          </div>
          <div id="about-us">
            <AboutUs />
          </div>
          <Arts />
        </div>
      </main>
      <Footer />
    </div>
  )
}
