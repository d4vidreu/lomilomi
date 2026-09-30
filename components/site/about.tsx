import Image from 'next/image'
import { Heart, Leaf, Sparkles, Waves, type LucideIcon } from 'lucide-react'
import { about } from '@/lib/site-content'
import { Section, SectionHeading } from './primitives'

const icons: Record<string, LucideIcon> = { waves: Waves, heart: Heart, sparkles: Sparkles, leaf: Leaf }

export function About() {
  return (
    <Section id="about" className="bg-card">
      <div className="grid gap-12 md:grid-cols-2 md:items-center md:gap-16">
        <div className="relative hidden aspect-square overflow-hidden rounded-3xl md:block">
          <Image src={about.image.src} alt={about.image.alt} fill sizes="50vw" className="object-cover" />
        </div>

        <div>
          <SectionHeading eyebrow={about.eyebrow} title={about.title} className="mb-6" />
          <div className="flex flex-col gap-4 text-pretty leading-relaxed text-muted-foreground">
            {about.text.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>

          <ul className="mt-10 grid grid-cols-2 gap-3">
            {about.benefits.map((b) => {
              const Icon = icons[b.icon] ?? Leaf
              return (
                <li key={b.title} className="flex flex-col gap-2 rounded-2xl bg-muted p-4">
                  <span className="flex size-10 items-center justify-center rounded-full bg-rose-soft text-rose-deep">
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                  <h3 className="font-sans text-sm font-semibold text-primary">{b.title}</h3>
                  <p className="text-sm leading-snug text-muted-foreground">{b.text}</p>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </Section>
  )
}
