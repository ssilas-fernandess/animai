import { Footer } from '@/components/footer'
import { Container } from '@/components/container'
import { Link } from '@/components/link'
import { ArrowLeftIcon } from '@heroicons/react/16/solid'
import type { Metadata } from 'next'
import AboutUs from "@/components/about-us";

export const metadata: Metadata = {
  title: 'O Festival - Animai',
  description: 'Conheça o Festival Baiano de Animação e Games 2024 - ANIMAI',
}

export default function SobreFestival() {
  return (
    <div className="overflow-hidden bg-animai-subtle-organic">
      {/* Botão Voltar ao Início */}
      <div className="absolute top-6 left-6 z-20">
        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full font-medium hover:bg-white/30 transition-all duration-300 hover-lift-organic border border-white/30"
        >
          <ArrowLeftIcon className="size-4" />
          Voltar ao Início
        </Link>
      </div>

      {/* Hero Section específico para O Festival */}
      <div className="bg-animai-organic py-16 relative">
        {/* Elementos orgânicos flutuantes */}
        <div className="organic-shapes">
          <div className="organic-shape"></div>
          <div className="organic-shape"></div>
          <div className="organic-shape"></div>
          <div className="organic-shape"></div>
          <div className="organic-shape"></div>
        </div>
        
        <Container>
          <div className="text-center relative z-10">
            <h1 className="text-4xl font-bold tracking-normal text-white sm:text-5xl mb-6 floating-organic">
              O Festival
            </h1>
            <p className="mt-6 text-lg text-white/90 max-w-3xl mx-auto">
              Descubra tudo sobre o Festival Baiano de Animação e Games 2024
            </p>
            
            {/* Informações do Festival */}
            <div className="mt-10 max-w-4xl mx-auto">
              <div className="grid md:grid-cols-3 gap-6 text-left">
                <div className="space-y-4 backdrop-organic rounded-2xl p-6">
                  <h3 className="text-lg font-semibold text-white">Data</h3>
                  <p className="text-white/80">05 - 08 de dezembro de 2024</p>
                </div>
                
                <div className="space-y-4 backdrop-organic rounded-2xl p-6">
                  <h3 className="text-lg font-semibold text-white">Local</h3>
                  <p className="text-white/80">Cine Glauber Rocha e Cineteatro 2 de Julho</p>
                </div>
                
                <div className="space-y-4 backdrop-organic rounded-2xl p-6">
                  <h3 className="text-lg font-semibold text-white">Programação</h3>
                  <p className="text-white/80">Mostra competitiva, palestras, painéis e muito mais</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>

      <main className="py-20">
        <AboutUs />
      </main>
      <Footer />
    </div>
  )
}
