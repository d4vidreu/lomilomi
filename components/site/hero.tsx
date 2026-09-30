import Image from 'next/image'
import { ArrowRight, Check } from 'lucide-react'
import { hero } from '@/lib/site-content'
import { CtaLink } from './primitives'

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden px-5 pb-16 pt-8 md:px-8 md:pb-24 md:pt-16">
      <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-2 md:gap-14">
        <div className="order-2 flex flex-col gap-6 md:order-1">
          <p className="inline-flex w-fit items-center gap-2 rounded-full bg-clay-soft px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-clay-deep">
            {hero.eyebrow}
          </p>
          <h1 className="text-5xl font-medium leading-[1.05] text-primary md:text-6xl lg:text-7xl">{hero.title}</h1>
          <p className="max-w-md text-pretty text-lg leading-relaxed text-muted-foreground">{hero.text}</p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <CtaLink href={hero.primaryCta.href} variant="accent">
              {hero.primaryCta.label}
              <ArrowRight />
            </CtaLink>
            <CtaLink href={hero.secondaryCta.href} variant="outline">
              {hero.secondaryCta.label}
            </CtaLink>
          </div>
          <ul className="flex flex-wrap gap-x-5 gap-y-2 pt-2">
            {hero.highlights.map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm text-foreground/80">
                <Check className="size-4 text-accent" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative order-1 md:order-2">
          <div className="absolute -right-6 -top-6 size-40 rounded-full bg-clay-soft md:size-64" aria-hidden="true" />
          <div className="absolute -bottom-6 -left-6 size-32 rounded-full bg-secondary md:size-48" aria-hidden="true" />
          <div className="relative aspect-[5/4] overflow-hidden rounded-t-[10rem] md:aspect-[4/5] rounded-b-3xl shadow-xl shadow-primary/10">
            <Image src={hero.image.src} alt={hero.image.alt} fill priority sizes="(min-width: 768px) 50vw, 100vw" className="object-cover" />
          </div>
        </div>
      </div>
    </section>
  )
}
