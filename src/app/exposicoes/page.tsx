'use client'

import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { Link } from '@/components/link'
import { ArrowLeftIcon } from '@heroicons/react/16/solid'
import { useState, useEffect } from 'react'

const artistas = [
  {
    id: 1,
    nome: "José David",
    foto: "/arts/jose-david.png", // Foto real do perfil
    bio: "José David é o profissional responsável por criar os conceitos visuais dos personagens, cenários, objetos e atmosfera da série. @mdxzao foi o responsável por executar a identidade visual da série, transformando as ideias do roteiro em imagens que inspiram a equipe de animação.",
    exposicoes: [
      {
        titulo: "Dandara Concept",
        descricao: "Conceito visual do personagem Dandara",
        imagem: "/arts/Dandara_Concept Colorido.jpg"
      },
      {
        titulo: "Egípcio Concept",
        descricao: "Conceito visual do personagem Egípcio",
        imagem: "/arts/Egípcio_Todas_Concept.jpg"
      },
      {
        titulo: "Facial Model Sheet",
        descricao: "Model sheet facial do personagem Pedro",
        imagem: "/arts/Facial_Model_Sheet_Pedro.jpg"
      },
      {
        titulo: "Fafá Concept",
        descricao: "Conceito visual do personagem Fafá",
        imagem: "/arts/Fafá_Concept_04.jpg"
      },
      {
        titulo: "Kiroga Concept",
        descricao: "Conceito visual do personagem Kiroga",
        imagem: "/arts/Kiroga Pose jpeg (final).jpg"
      },
      {
        titulo: "Medusa Concept",
        descricao: "Conceito visual do personagem Medusa",
        imagem: "/arts/Medusa_final_concept.jpg"
      },
      {
        titulo: "Mestre Chun Concept",
        descricao: "Conceito visual do personagem Mestre Chun",
        imagem: "/arts/Mestre Chun_Concept colorido.jpg"
      },
      {
        titulo: "Pedro Concept",
        descricao: "Conceito visual do personagem Pedro",
        imagem: "/arts/Pedro_Concept_02.jpg"
      },
      {
        titulo: "Peixoto Concept",
        descricao: "Conceito visual do personagem Peixoto",
        imagem: "/arts/Peixoto_Pose Colorida (1).png"
      },
      {
        titulo: "Zara Concept",
        descricao: "Conceito visual do personagem Zara",
        imagem: "/arts/Zara Concept colorido (atualizado).jpg"
      },
      {
        titulo: "Zirag Concept 1",
        descricao: "Conceito visual do personagem Zirag",
        imagem: "/arts/Zirag_Concept_Colorido_02 (1).jpg"
      },
      {
        titulo: "Zirag Concept 2",
        descricao: "Conceito visual do personagem Zirag",
        imagem: "/arts/Zirag_Concept_Colorido.png"
      }
    ]
  },
  {
    id: 2,
    nome: "Pedro Minho",
    foto: "/arts/pedro-minho.png", // Foto real do perfil
    bio: "Apresentando o talento por trás dos cenários deslumbrantes de #pedroeapedrasecreta. @pedro_minho é o visionário que cria os mundos onde nossa história ganhou vida. E nosso artista, com sua experiência em séries 3D e longas-metragens, faz isso de maneira excepcional. De Salvador a São Paulo, ele tem deixado sua marca em cada produção, criando cenários que capturam a imaginação e transportam o público para novos mundos.",
    exposicoes: [
      {
        titulo: "Conceito do Sótão",
        descricao: "Conceito visual do sótão da série",
        imagem: "/arts/PPS_Concept_sotao_wip_02.jpg"
      },
      {
        titulo: "Quarto Fafá Tecnológico",
        descricao: "Quarto do personagem Fafá com iluminação tecnológica",
        imagem: "/arts/PPS_quarto_fafa _01_Luz_03_Tecnologico.jpg"
      },
      {
        titulo: "Quarto Fafá",
        descricao: "Quarto do personagem Fafá",
        imagem: "/arts/PPS_quarto_fafa 01_Luz_02.jpg"
      },
      {
        titulo: "Quarto Pedro A",
        descricao: "Quarto do personagem Pedro - versão A",
        imagem: "/arts/PPS_Quarto_Pedro_a.jpg"
      },
      {
        titulo: "Quarto Pedro B",
        descricao: "Quarto do personagem Pedro - versão B",
        imagem: "/arts/PPS_Quarto_Pedro_b1.jpg"
      },
      {
        titulo: "Rua Lateral Pedro",
        descricao: "Rua lateral com visão do personagem Pedro",
        imagem: "/arts/PPS_Rua_lateral_pedro_wip.jpg"
      },
      {
        titulo: "Rua Lateral Peixoto",
        descricao: "Rua lateral com visão do personagem Peixoto",
        imagem: "/arts/PPS_Rua_lateral_peixoto_wip.jpg"
      },
      {
        titulo: "Rua Visão Top",
        descricao: "Rua com visão aérea da cidade",
        imagem: "/arts/PPS_Rua_visão_top_1.jpg"
      },
      {
        titulo: "Sala Pedro",
        descricao: "Sala do personagem Pedro",
        imagem: "/arts/PPS_Sala_Pedro.jpg"
      }
    ]
  },
  {
    id: 3,
    nome: "Tiago Cerca",
    foto: "/arts/tiago-cerca.png",
    bio: "Ilustrador artista, soteropolitano, que atualmente reside com a família no interior da Bahia, Iguaí. Estudou na Escola de Belas Artes da UFBA, já trabalhou para alguns estúdios de animação e também para as principais editoras literárias e educativas do Brasil. Com um trabalho autoral foi um dos premiados da 69ª Edição do Salão de Artes da Bahia.",
    exposicoes: [
      {
        titulo: "Elevador Lacerda",
        descricao: "Vista icônica do cartão postal de Salvador",
        imagem: "/arts/elevador-lacerda.jpg"
      },
      {
        titulo: "Feira",
        descricao: "Cena vibrante da cultura popular baiana",
        imagem: "/arts/feira.jpg"
      },
      {
        titulo: "Fonte da Bica",
        descricao: "Arquitetura histórica de Salvador",
        imagem: "/arts/fonte-da-bica.jpg"
      },
      {
        titulo: "Forte de São Marcelo",
        descricao: "Fortaleza histórica no mar de Salvador",
        imagem: "/arts/forte-de-sao-marcelo.jpg"
      },
      {
        titulo: "Navios Piratas",
        descricao: "Cena marítima com elementos fantásticos",
        imagem: "/arts/navios-piratas.jpg"
      },
      {
        titulo: "Orixás",
        descricao: "Representação da cultura afro-brasileira",
        imagem: "/arts/orixas.jpg"
      }
    ]
  }
]

export default function Exposicoes() {
  const [modalImage, setModalImage] = useState<string | null>(null)
  const [modalTitle, setModalTitle] = useState<string>('')

  // Proteções robustas contra download
  useEffect(() => {
    // Desabilitar menu de contexto globalmente
    const preventContextMenu = (e: any) => {
      e.preventDefault()
      return false
    }

    // Desabilitar teclas de atalho
    const preventShortcuts = (e: any) => {
      if (e.ctrlKey && (e.key === 's' || e.key === 'S')) {
        e.preventDefault()
        return false
      }
      if (e.key === 'F12') {
        e.preventDefault()
        return false
      }
    }

    // Aplicar proteções
    document.addEventListener('contextmenu', preventContextMenu)
    document.addEventListener('keydown', preventShortcuts)

    return () => {
      document.removeEventListener('contextmenu', preventContextMenu)
      document.removeEventListener('keydown', preventShortcuts)
    }
  }, [])

  const openModal = (image: string, title: string) => {
    setModalImage(image)
    setModalTitle(title)
  }

  const closeModal = () => {
    setModalImage(null)
    setModalTitle('')
  }

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

      {/* Hero Section */}
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
            <h1 className="text-3xl font-bold tracking-normal text-white sm:text-4xl mb-6 floating-organic">
              Exposição Virtual
            </h1>
            <p className="mt-6 text-lg text-white/90 max-w-3xl mx-auto">
              Conheça os artistas e suas obras que fazem parte do Festival Baiano de Animação e Games 2024
            </p>
            
            {/* Informações da Exposição */}
            <div className="mt-10 max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-6 text-left">
                <div className="space-y-4 backdrop-organic rounded-2xl p-6">
                  <h3 className="text-lg font-semibold text-white">Técnicas</h3>
                  <p className="text-white/80">Ilustração digital, 3D, conceitos visuais, cultura baiana, animação, games, arte digital</p>
                </div>
                
                <div className="space-y-4 backdrop-organic rounded-2xl p-6">
                  <h3 className="text-lg font-semibold text-white">Formato</h3>
                  <p className="text-white/80">Exposição virtual interativa com galeria de imagens em alta resolução</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>

      <main>
        {/* Lista de Artistas */}
        {artistas.map((artista, index) => (
          <div key={artista.id} className={`py-16 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
            <Container>
              {/* Cabeçalho do Artista */}
              <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
                {/* Foto e Bio */}
                <div className={`${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}>
                  <h2 className="text-3xl font-semibold tracking-tight text-gray-900 mb-6">
                    <span className="text-animai-primary">{artista.nome}</span>
                  </h2>
                  <div className="space-y-4 text-lg text-gray-600">
                    <p>{artista.bio}</p>
                  </div>
                </div>
                
                {/* Foto */}
                <div className={`${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'} flex justify-center`}>
                  <img
                    src={artista.foto}
                    alt={artista.nome}
                    className="w-full max-w-sm rounded-2xl shadow-animai-organic object-cover hover-lift-organic select-none"
                    draggable={false}
                    onContextMenu={(e) => e.preventDefault()}
                    style={{ 
                      userSelect: 'none', 
                      WebkitUserSelect: 'none'
                    }}
                  />
                </div>
              </div>

              {/* Exposições do Artista */}
              <div className="text-center mb-10">
                <h3 className="text-2xl font-semibold tracking-tight text-gray-900 mb-4">
                  Exposições de <span className="text-animai-secondary">{artista.nome}</span>
                </h3>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Explore as obras e projetos que representam o trabalho deste artista
                </p>
              </div>

              {/* Grid de Exposições */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {artista.exposicoes.map((exposicao, expIndex) => (
                  <div
                    key={expIndex}
                    className="bg-white rounded-2xl overflow-hidden shadow-animai-organic hover-lift-organic cursor-pointer border border-gray-200/50"
                    onClick={() => openModal(exposicao.imagem, exposicao.titulo)}
                  >
                    <div className="aspect-[4/3] overflow-hidden">
                      <img
                        src={exposicao.imagem}
                        alt={exposicao.titulo}
                        className="w-full h-full object-contain bg-gray-50 p-2 select-none"
                        draggable={false}
                        onContextMenu={(e) => e.preventDefault()}
                        style={{ 
                          userSelect: 'none', 
                          WebkitUserSelect: 'none'
                        }}
                      />
                    </div>
                    <div className="p-5">
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">
                        {exposicao.titulo}
                      </h4>
                      <p className="text-gray-600 text-sm">
                        {exposicao.descricao}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </Container>
          </div>
        ))}
      </main>

      {/* Modal para visualizar as imagens */}
      {modalImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4"
          onClick={closeModal}
        >
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={closeModal}
              className="absolute -top-12 right-0 text-white text-4xl hover:text-animai-secondary transition-colors"
            >
              ×
            </button>
            <h3 className="absolute -top-12 left-0 text-white text-xl font-semibold">
              {modalTitle}
            </h3>
            <img
              src={modalImage}
              alt={modalTitle}
              className="max-w-full max-h-full object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}

      <Footer />
    </div>
  )
}
