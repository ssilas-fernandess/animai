import { Footer } from '@/components/footer'
import { Container } from '@/components/container'
import { Link } from '@/components/link'
import { ArrowLeftIcon } from '@heroicons/react/16/solid'
import type { Metadata } from 'next'
import AboutUs from "@/components/about-us";

export const metadata: Metadata = {
  title: 'O Festival - Animai',
  description: 'Conheça o VII Festival Baiano de Animação e Games 2025 - ANIMAI',
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

      {/* Hero Section padronizado */}
      <div className="bg-animai-organic py-2 relative">
        {/* Elementos orgânicos flutuantes */}
        <div className="organic-shapes">
          <div className="organic-shape"></div>
          <div className="organic-shape"></div>
          <div className="organic-shape"></div>
          <div className="organic-shape"></div>
          <div className="organic-shape"></div>
        </div>
        
        <Container className="relative z-10">
          <div className="text-center py-4">
            <div className="floating-organic">
              <img
                src="/logo.png"
                alt="logo"
                className="h-16 w-auto sm:h-20 md:h-24 lg:h-32 xl:h-36 mx-auto"
              />
            </div>
          </div>
        </Container>
      </div>

      <main className="py-20">
        {/* Informações do Festival integradas com o conteúdo principal */}
        <div className="text-center mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-6">
            O Festival
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mb-10">
            Descubra tudo sobre o VII Festival Baiano de Animação e Games 2025
          </p>
          
          <div className="max-w-4xl mx-auto mb-16">
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div className="space-y-4 backdrop-organic rounded-2xl p-6 bg-white/50 border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900">Data</h3>
                <p className="text-gray-600">08 - 25 de outubro de 2025</p>
              </div>
              
              <div className="space-y-4 backdrop-organic rounded-2xl p-6 bg-white/50 border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900">Local</h3>
                <p className="text-gray-600">Cine Glauber Rocha e Cineteatro 2 de Julho</p>
              </div>
              
              <div className="space-y-4 backdrop-organic rounded-2xl p-6 bg-white/50 border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900">Programação</h3>
                <p className="text-gray-600">Mostra competitiva, palestras, painéis e muito mais</p>
              </div>
            </div>
          </div>
        </div>

        <AboutUs />
      </main>
      <Footer />
    </div>
  )
}
