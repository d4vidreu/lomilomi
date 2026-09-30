'use client'

import { useState } from 'react'
import { Menu, Phone, X } from 'lucide-react'
import { navigation, site } from '@/lib/site-content'
import { CtaLink } from './primitives'
import { cn } from '@/lib/utils'

export function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 md:px-8">
        <a href="#top" className="flex flex-col leading-none" aria-label={`${site.name} home`}>
          <span className="font-serif text-2xl font-semibold text-primary">{site.name}</span>
          <span className="text-[0.65rem] uppercase tracking-[0.25em] text-rose-deep">{site.tagline}</span>
        </a>

        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {navigation.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="rounded-full px-3 py-2 text-sm text-foreground/80 transition-colors hover:bg-secondary hover:text-primary"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <CtaLink href="#contact" variant="accent" className="hidden min-h-10 px-5 lg:inline-flex">
            Book now
          </CtaLink>
          <a
            href={site.phoneHref}
            className="flex size-10 items-center justify-center rounded-full text-primary hover:bg-secondary lg:hidden"
            aria-label={`Call ${site.phone}`}
          >
            <Phone className="size-5" />
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="flex size-10 items-center justify-center rounded-full bg-secondary text-primary lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      <nav
        id="mobile-menu"
        aria-label="Mobile"
        className={cn(
          'overflow-hidden border-t border-border/60 bg-background transition-[max-height] duration-300 lg:hidden',
          open ? 'max-h-[32rem]' : 'max-h-0 border-t-0',
        )}
      >
        <ul className="flex flex-col px-5 py-3">
          {navigation.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={() => setOpen(false)}
                className="block border-b border-border/50 py-4 font-serif text-2xl text-primary last:border-0"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
