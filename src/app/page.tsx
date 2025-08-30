'use client'

import { useState, useEffect } from 'react'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { LogoCloud } from '@/components/logo-cloud'
import Events from "@/components/calendar"
import Hero from "@/components/hero"
import {Arts} from "@/components/arts"
import { Button } from '@/components/button'
import AboutUs from '@/components/about-us'
import Link from 'next/link'

// Array com todas as fotos do ANIMAI 2024
const animaiPhotos = [
  '/arts/animai-2024-01.jpg',
  '/arts/animai-2024-02.jpg',
  '/arts/animai-2024-03.jpg',
  '/arts/animai-2024-04.jpg',
  '/arts/animai-2024-05.jpg',
  '/arts/animai-2024-06.jpg',
  '/arts/animai-2024-07.jpg',
  '/arts/animai-2024-08.jpg',
  '/arts/animai-2024-09.jpg',
  '/arts/animai-2024-10.jpg',
  '/arts/animai-2024-11.jpg',
  '/arts/animai-2024-12.jpg',
  '/arts/animai-2024-13.jpg',
  '/arts/animai-2024-14.jpg',
  '/arts/animai-2024-15.jpg',
  '/arts/animai-2024-16.jpg',
  '/arts/animai-2024-17.jpg',
  '/arts/animai-2024-18.jpg',
  '/arts/animai-2024-19.jpg',
  '/arts/animai-2024-20.jpg',
  '/arts/animai-2024-21.jpg',
  '/arts/animai-2024-22.jpg',
  '/arts/animai-2024-23.jpg',
  '/arts/animai-2024-24.jpg',
  '/arts/animai-2024-25.jpg',
  '/arts/animai-2024-26.jpg',
  '/arts/animai-2024-27.jpg',
  '/arts/animai-2024-28.jpg',
  '/arts/animai-2024-29.jpg',
  '/arts/animai-2024-30.jpg',
  '/arts/animai-2024-31.jpg',
  '/arts/animai-2024-32.jpg',
  '/arts/animai-2024-33.jpg',
  '/arts/animai-2024-34.jpg',
  '/arts/animai-2024-35.jpg',
  '/arts/animai-2024-36.jpg',
  '/arts/animai-2024-37.jpg',
  '/arts/animai-2024-38.jpg',
  '/arts/animai-2024-39.jpg',
  '/arts/animai-2024-40.jpg',
  '/arts/animai-2024-41.jpg',
  '/arts/animai-2024-42.jpg',
  '/arts/animai-2024-43.jpg',
  '/arts/animai-2024-44.jpg',
  '/arts/animai-2024-45.jpg',
  '/arts/animai-2024-46.jpg'
]

export default function Home() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  // Carrossel automático a cada 3 segundos com transição suave
  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true)
      setTimeout(() => {
        setCurrentPhotoIndex((prev) => (prev + 1) % animaiPhotos.length)
        setIsTransitioning(false)
      }, 500) // Meio segundo para a transição
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  const openModal = (imageSrc: string) => {
    setSelectedImage(imageSrc)
  }

  const closeModal = () => {
    setSelectedImage(null)
  }

  return (
    <div className="bg-white">
      <Hero />
      <main>
        
        {/* Galeria ANIMAI 2024 - Carrossel Orgânico */}
        {/* Trigger deploy Vercel - Proteções implementadas */}
        <section className="bg-gradient-to-br from-purple-900/5 via-orange-600/5 to-blue-800/5 py-8 relative overflow-hidden">
          <Container>
            <div className="text-center mb-16">
              {/* Navegação no lugar do título */}
              <nav className="flex justify-center space-x-6 mb-6">
                <Link
                  href="/"
                  className="px-6 py-3 text-base font-medium text-gray-900 hover:text-purple-600 transition-all duration-300 hover-lift rounded-xl bg-gray-50 hover:bg-purple-50 border border-gray-200 hover:border-purple-300"
                >
                  INICIO
                </Link>
                <Link
                  href="/o-festival"
                  className="px-6 py-3 text-base font-medium text-gray-900 hover:text-orange-600 transition-all duration-300 hover-lift rounded-xl bg-gray-50 hover:bg-orange-50 border border-gray-200 hover:border-orange-300"
                >
                  O FESTIVAL
                </Link>
                <Link
                  href="/exposicoes"
                  className="px-6 py-3 text-base font-medium text-gray-900 hover:text-blue-600 transition-all duration-300 hover-lift rounded-xl bg-gray-50 hover:bg-blue-50 border border-gray-200 hover:border-blue-300"
                >
                  EXPOSIÇÕES
                </Link>
              </nav>
              
              {/* Título no lugar da navegação */}
              <h2 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-purple-600 via-orange-500 to-blue-600 bg-clip-text text-transparent sm:text-5xl mb-6">
                Festival Baiano de Animação e Games 2025
              </h2>
              
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Reviva os melhores momentos do ANIMAI através desta galeria especial
              </p>
            </div>

            {/* Carrossel Principal com Transição Orgânica */}
            <div className="relative max-w-5xl mx-auto">
              <div className="relative h-[550px] rounded-3xl overflow-hidden shadow-2xl bg-white border border-gray-100">
                <img
                  src={animaiPhotos[currentPhotoIndex]}
                  alt={`ANIMAI 2024 - Foto ${currentPhotoIndex + 1}`}
                  className={`w-full h-full object-cover transition-all duration-1000 ease-in-out cursor-pointer ${
                    isTransitioning ? 'opacity-0 scale-105' : 'opacity-100 scale-100'
                  }`}
                  onClick={() => openModal(animaiPhotos[currentPhotoIndex])}
                />
                
                {/* Overlay gradiente elegante */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                
                {/* Logo pequena no canto inferior esquerdo */}
                <div className="absolute bottom-6 left-8">
                  <img 
                    src="/logo.png" 
                    alt="ANIMAI Logo" 
                    className="w-20 h-auto opacity-90"
                  />
                </div>

                {/* Indicador de progresso elegante */}
                <div className="absolute top-6 right-6">
                  <div className="bg-black/30 backdrop-blur-sm rounded-full p-3 border border-white/20">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-orange-500 flex items-center justify-center text-white font-bold text-sm">
                      {currentPhotoIndex + 1}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Seção de Programação */}
        <section className="bg-white py-12 sm:py-16 md:py-20 relative overflow-hidden">
          <Container>
            <div className="text-center mb-8 sm:mb-12 md:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 mb-4 sm:mb-6">
                🗓️ Programação
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
                Confira a agenda completa do Festival Baiano de Animação e Games 2025
              </p>
            </div>
            
            {/* Componente do Calendário */}
            <div className="max-w-3xl lg:max-w-4xl mx-auto px-4">
              <Events />
            </div>
          </Container>
        </section>
      </main>

      {/* Modal para visualização das fotos */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md"
          onClick={closeModal}
        >
          <div className="relative max-w-[95vw] max-h-[95vh] p-4">
            <img
              src={selectedImage}
              alt="ANIMAI 2024 - Visualização Ampliada"
              className="max-w-full max-h-full object-contain rounded-2xl shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 border border-white/30"
            >
              ✕
            </button>
          </div>
        </div>
      )}

      <Footer/>
    </div>
  )
}
