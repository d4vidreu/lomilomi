import { Quote } from 'lucide-react'
import { testimonials } from '@/lib/site-content'
import { Section, SectionHeading } from './primitives'

export function Testimonials() {
  return (
    <Section className="bg-clay-soft/60">
      <SectionHeading eyebrow="Kind words" title="What clients say" />
      <ul className="-mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-4 md:mx-0 md:grid md:grid-cols-3 md:overflow-visible md:px-0">
        {testimonials.map((t) => (
          <li key={t.name} className="w-[85%] shrink-0 snap-center md:w-auto">
            <figure className="flex h-full flex-col gap-4 rounded-3xl bg-card p-6">
              <Quote className="size-8 text-accent" aria-hidden="true" />
              <blockquote className="flex-1 font-serif text-xl leading-snug text-primary">{t.quote}</blockquote>
              <figcaption className="text-sm font-medium text-muted-foreground">{t.name}</figcaption>
            </figure>
          </li>
        ))}
      </ul>
    </Section>
  )
}
