import { Footer } from '@/components/footer'
import Hero from "@/components/hero";

export default function Exposicao() {
  return (
    <div className="overflow-hidden">
      <Hero/>
      <main className="bg-gradient-to-b from-white from-50% to-gray-100 py-16">
        <div className="my-16 overflow-hidden sm:my-20">
          <div className="mx-auto max-w-7xl px-6 lg:flex lg:px-8">
            <div
              className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:min-w-full lg:max-w-none lg:flex-none lg:gap-y-8">
              <div className="lg:col-end-1 lg:w-full lg:max-w-lg lg:pb-8">
                <h2 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">Tiago Cerca</h2>
                <p className="mt-6 text-xl/8 text-gray-600">
                  Sou um soteropolitano que mora atualmente no interior da Bahia. ilustrador com formação e experiência
                  de design gráfico, ponto que me ajuda muito a ter visão ampla de um projeto, em que enxergo os
                  desdobramentos. Tenho como, principal característica, flexibilidade para me adaptar e entregar algo
                  diferente e especial a cada projeto.
                </p>
              </div>
              <div className="flex flex-wrap items-start justify-end gap-6 sm:gap-8 lg:contents">
                <div className="w-0 flex-auto lg:ml-auto lg:w-auto lg:flex-none lg:self-end">
                  <img
                    alt=""
                    src="/tiago-cerca.png"
                    className="w-[30rem] max-w-none rounded-2xl bg-gray-50"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <div className="bg-white px-6 py-16 lg:px-8">
        <div className="mx-auto max-w-3xl text-base/7 text-gray-700">
          <h2 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">Pedro Minho</h2>
          <p className="mt-6 text-xl/8 text-gray-600">
            Artista de desenvolvimento visual e de storyboard, natural da Bahia e atualmente morando em São Paulo, vem
            colaborando ao longo de 10 anos para o mercado internacional e nacional, em longas-metragens, curtas, série
            de TV e inumeros comerciais premiados. Desenhando para estudios como Sunrise Animation Studios, Gullane
            Entertainment, NIP, Mantra Filmes, Vetor Zero e Shed. Em seus trabalhos mais recentes, colaborou como
            concept artist lead para o filme Arca de Noé, lançado em novembro, trabalhou remotamente e também in loco
            para Sunrise Animation Studio, África do Sul, como environment artist e story na série de curtas Young David
            e David Film, com previsão para dezembro de 2025.
          </p>
        </div>
      </div>
      <div className="bg-gray-100 px-6 py-16 lg:px-8">
        <div className="mx-auto max-w-3xl text-base/7 text-gray-700">
          <h2 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">José David</h2>
          <p className="mt-6 text-xl/8 text-gray-600">
            Sou um artista e desenhista brasileiro, cursando Design na faculdade e, atualmente, trabalhando como artista
            conceitual e ilustrador na Mantra Filmes. Espero um dia poder ser um artista na Pixar ou designer de
            personagens em estúdios de jogos.
          </p>
          <p className="mt-6 text-xl/8 text-gray-600">
            Estou melhorando cada vez mais no Photoshop e quero que vocês fiquem comigo enquanto minhas habilidades vão
            ficando cada vez mais avançadas. Arte digital ainda é minha forma secundária de ilustração
          </p>
        </div>
      </div>
      <Footer/>
    </div>
  )
}
