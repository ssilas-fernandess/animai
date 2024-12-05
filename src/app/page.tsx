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
          <main className="bg-gradient-to-b from-white from-50% to-gray-100 py-16">
            <div className="my-16 overflow-hidden sm:my-20">
              <div className="mx-auto max-w-7xl px-6 lg:flex lg:px-8">
                <div
                  className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:min-w-full lg:max-w-none lg:flex-none lg:gap-y-8">
                  <div className="lg:col-end-1 lg:w-full lg:max-w-lg lg:pb-8">
                    <h2 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">Tiago Cerca</h2>
                    <p className="mt-6 text-xl/8 text-gray-600">
                      Ilustrador artista, soteropolitano, que atualmente reside com a família no interior da Bahia,
                      Iguaí. Estudou na Escola de belas Artes da UFBA, já trabalhou para alguns estúdios de animação e
                      também para as principais editoras literárias e educativas do Brasil. Com um trabalho autoral foi
                      um dos premiados da 69ª Edição do Salão de Artes da Bahia. Ele entende a ilustração como um
                      processo criativo que é parte do desdobramento da marca, tendo em mente sempre o conceito
                      principal como ponto de partida para somar com o seu fazer artístico.
                    </p>
                  </div>
                  <div className="flex flex-wrap items-start justify-end gap-6 sm:gap-8 lg:contents">
                    <div className="w-0 flex-auto lg:ml-auto lg:w-auto lg:flex-none lg:self-end">
                      <img
                        alt=""
                        src="/arts/tiago-cerca.png"
                        className="w-[30rem] max-w-none rounded-2xl bg-gray-50"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </main>
      <Footer/>
    </div>
  )
}
