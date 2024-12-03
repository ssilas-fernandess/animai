'use client'

import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
import { Heading } from "@/components/text";
import { Container } from "@/components/container";

const images = [
  {
    id: 1,
    src: './arts/feira.jpg',
    alt: 'Feira.',
  },
  {
    id: 2,
    src: './arts/elevador-lacerda.jpg',
    alt: 'Elevador Lacerda.',
  },
  {
    id: 3,
    src: './arts/fonte-da-bica.jpg',
    alt: 'Fonte da Bica.',
  },
  {
    id: 4,
    src: './arts/forte-de-sao-marcelo.jpg',
    alt: 'Forte de São Marcelo.',
  },
  {
    id: 5,
    src: './arts/navios-piratas.jpg',
    alt: 'Navios Piratas.',
  },
  {
    id: 6,
    src: './arts/orixas.jpg',
    alt: 'Orixás.',
  },
];

export function Arts() {
  return (
    <div className="overflow-hidden">
      <Container className="pb-24">
        <Heading as="h2" className="max-w-3xl">
          Ilustrações
        </Heading>
        <main className="mx-auto max-w-7xl sm:px-6 sm:pt-16 lg:px-8 mt-6">
          <div className="mx-auto max-w-2xl lg:max-w-none">
            <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
              <TabGroup>
                {/* Painel de imagens */}
                <TabPanels>
                  {images.map((image) => (
                    <TabPanel key={image.id}>
                      <img
                        alt={image.alt}
                        src={image.src}
                        className="w-full h-auto object-cover sm:rounded-lg lg:rounded-xl"
                        style={{
                          maxHeight: '600px',
                          margin: '0 auto',
                          borderRadius: '1rem',
                        }}
                      />
                    </TabPanel>
                  ))}
                </TabPanels>

                {/* Lista de miniaturas */}
                <div className="mx-auto mt-6 w-full max-w-2xl sm:block lg:max-w-none">
                  <TabList className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                    {images.map((image) => (
                      <Tab
                        key={image.id}
                        className="group relative flex h-24 cursor-pointer items-center justify-center rounded-md bg-white text-sm font-medium uppercase text-gray-900 hover:bg-gray-50 focus:outline-none focus:ring focus:ring-indigo-500/50 focus:ring-offset-4"
                      >
                        <span className="sr-only">{image.alt}</span>
                        <span className="absolute inset-0 overflow-hidden rounded-md">
                          <img
                            alt={image.alt}
                            src={image.src}
                            className="h-full w-full object-cover"
                          />
                        </span>
                        <span
                          aria-hidden="true"
                          className="pointer-events-none absolute inset-0 rounded-md ring-2 ring-transparent ring-offset-2 group-data-[selected]:ring-indigo-500"
                        />
                      </Tab>
                    ))}
                  </TabList>
                </div>
              </TabGroup>
            </div>
          </div>
        </main>
      </Container>
    </div>
  );
}
