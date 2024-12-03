'use client'

import { Container } from "@/components/container";
import { Heading } from "@/components/text";
import {ChevronRightIcon} from "@heroicons/react/16/solid";
import {Link} from "@/components/link";

export default function AboutUs() {
    return (
        <div className="overflow-hidden">
            <Container className="pb-24">
                <Heading as="h2" className="max-w-3xl">
                    O Festival
                </Heading>
                <p className="mt-6 text-lg/8 text-gray-600">
                    O Animaí! - VI Festival Baiano de Animação e Games é um evento pioneiro no estado com foco em animação e games e uma programação gratuita composta por workshops, palestras, seminários, exposições de artistas ilustradores e mostras competitivas de filmes de animação e jogos eletrônicos. Trata-se de um evento que acontece em Salvador e Itaparica, visando fortalecer o mercado, gerando oportunidades para os produtores e novos olhares do público consumidor, incluindo, também, mostras em espaços culturais da capital e do interior”, explica Aline Cléa, produtora da Cine Arts, diretora geral do Animaí e uma das curadoras do evento ao lado de Anderson Soares e Léo Silva, da Mantra Filmes.
                    <a
                      className={"bg-[linear-gradient(115deg,var(--tw-gradient-stops))] from-[#fff1be] from-[28%] via-[#ee87cb] via-[99%] to-[#b060ff] sm:bg-[linear-gradient(145deg,var(--tw-gradient-stops))] rounded-full px-3 py-0.5 text-black"}
                      href={"https://atarde.com.br/cultura/vi-animai---festival-baiano-de-animacao-e-games-comeca-quinta-feira-1297647"}
                      target={"_blank"}
                    >
                        Confira a Matéria aqui
                    </a>
                </p>
            </Container>
        </div>
    )
}
