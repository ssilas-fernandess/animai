'use client'

import { Container } from "@/components/container";
import { Heading } from "@/components/text";
import {ChevronRightIcon} from "@heroicons/react/16/solid";
import {Link} from "@/components/link";

export default function AboutUs() {
    return (
        <div className="overflow-hidden">
            <Container className="pb-24">
                <Heading as="h2" className="max-w-3xl text-animai-primary">
                    O Festival
                </Heading>
                <p className="mt-6 text-lg/8 text-gray-600 leading-relaxed">
                    O <span className="font-semibold text-animai-secondary">Animaí!</span> - VI Festival Baiano de Animação e Games é um evento pioneiro no estado com foco em animação e games e uma programação gratuita composta por workshops, palestras, seminários, exposições de artistas ilustradores e mostras competitivas de filmes de animação e jogos eletrônicos. Trata-se de um evento que acontece em Salvador e Itaparica, visando fortalecer o mercado, gerando oportunidades para os produtores e novos olhares do público consumidor, incluindo, também, mostras em espaços culturais da capital e do interior.
                </p>
                
                <p className="mt-6 text-lg/8 text-gray-600 leading-relaxed">
                    "Trata-se de um evento que acontece em Salvador e Itaparica, visando fortalecer o mercado, gerando oportunidades para os produtores e novos olhares do público consumidor, incluindo, também, mostras em espaços culturais da capital e do interior", explica <span className="font-semibold text-animai-accent">Aline Cléa</span>, produtora da Cine Arts, diretora geral do Animaí e uma das curadoras do evento ao lado de <span className="font-semibold text-animai-accent">Anderson Soares</span> e <span className="font-semibold text-animai-accent">Léo Silva</span>, da Mantra Filmes.
                </p>
                
                <div className="mt-8">
                    <Link
                        className="inline-flex items-center gap-2 bg-animai-organic text-white px-6 py-3 rounded-full font-medium hover-lift-organic transition-all duration-300"
                        href="https://atarde.com.br/cultura/vi-animai---festival-baiano-de-animacao-e-games-comeca-quinta-feira-1297647"
                        target="_blank"
                    >
                        Confira a Matéria aqui
                        <ChevronRightIcon className="size-4" />
                    </Link>
                </div>
            </Container>
        </div>
    )
}
