'use client'

import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@headlessui/react'
import { Bars2Icon } from '@heroicons/react/24/solid'
import { motion } from 'framer-motion'
import { Link } from './link'

const links: { href: string; label: string }[] = [
  { href: '/', label: 'INICIO' },
  { href: '/o-festival', label: 'O FESTIVAL' },
  { href: '/exposicoes', label: 'EXPOSIÇÕES' },
]

function DesktopNav() {
  return (
    <nav className="relative hidden lg:flex items-center space-x-1">
      {links.map(({ href, label }) => (
        <Link
          key={href}
          href={href}
          className="px-6 py-3 text-base font-medium text-gray-900 hover:text-animai-primary transition-all duration-300 hover-lift rounded-xl bg-white/50 backdrop-blur-sm border border-gray-200/50 hover:border-animai-primary/30 hover:bg-white/80"
        >
          {label}
        </Link>
      ))}
    </nav>
  )
}

function MobileNavButton() {
  return (
    <DisclosureButton
      className="flex size-12 items-center justify-center self-center rounded-xl bg-white/50 backdrop-blur-sm border border-gray-200/50 hover:bg-white/80 hover:border-animai-primary/30 transition-all duration-300 lg:hidden"
      aria-label="Open main menu"
    >
      <Bars2Icon className="size-6 text-gray-900" />
    </DisclosureButton>
  )
}

function MobileNav() {
  return (
    <DisclosurePanel className="lg:hidden">
      <div className="flex flex-col gap-4 py-6 bg-white/80 backdrop-blur-sm rounded-2xl mt-4 border border-gray-200/50">
        {links.map(({ href, label }, linkIndex) => (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.3,
              ease: 'easeOut',
              delay: linkIndex * 0.1,
            }}
            key={href}
            className="px-4"
          >
            <Link 
              href={href} 
              className="text-base font-medium text-gray-900 hover:text-animai-primary transition-colors duration-300 block py-2 rounded-lg hover:bg-animai-subtle"
            >
              {label}
            </Link>
          </motion.div>
        ))}
      </div>
    </DisclosurePanel>
  )
}

export function Navbar({ banner }: { banner?: React.ReactNode }) {
  return (
    <Disclosure as="header" className="pt-6 sm:pt-8 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex justify-between items-center">
          <div className="relative flex gap-6 items-center">
            {banner && (
              <div className="relative hidden items-center py-3 lg:flex">
                {banner}
              </div>
            )}
          </div>
          <DesktopNav />
          <MobileNavButton />
        </div>
      </div>
      <MobileNav />
    </Disclosure>
  )
}
