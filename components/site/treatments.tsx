import { ArrowRight, Clock } from 'lucide-react'
import { features, treatments } from '@/lib/site-content'
import { Section, SectionHeading } from './primitives'
import { cn } from '@/lib/utils'

export function Treatments() {
  return (
    <Section id="treatments">
      <SectionHeading eyebrow="Treatments & prices" title="Choose your ritual" />

      <ul className="grid gap-4 md:grid-cols-2">
        {treatments.map((t) => (
          <li
            key={t.id}
            className={cn(
              'relative flex flex-col gap-4 rounded-3xl border bg-card p-6 transition-shadow hover:shadow-lg hover:shadow-primary/5',
              t.featured && 'border-accent/40 ring-1 ring-accent/30',
            )}
          >
            {t.featured && (
              <span className="absolute -top-3 left-6 rounded-full bg-accent px-3 py-1 text-xs font-medium text-accent-foreground">
                Most loved
              </span>
            )}
            <div className="flex items-start justify-between gap-4">
              <h3 className="text-2xl font-medium leading-tight text-primary">{t.name}</h3>
              <p className="shrink-0 font-serif text-2xl font-semibold text-clay-deep">{t.price}</p>
            </div>
            <p className="flex items-center gap-1.5 text-sm text-muted-foreground">
              <Clock className="size-4" aria-hidden="true" />
              {t.duration}
            </p>
            <p className="flex-1 text-pretty leading-relaxed text-muted-foreground">{t.description}</p>
            <a
              href={features.onlineBooking ? `/booking?treatment=${t.id}` : '#contact'}
              className="inline-flex w-fit items-center gap-2 text-sm font-medium text-primary underline-offset-4 hover:underline"
              aria-label={`${features.onlineBooking ? 'Book' : 'Request'} ${t.name}`}
            >
              {features.onlineBooking ? 'Book a time slot' : 'Request appointment'}
              <ArrowRight className="size-4" aria-hidden="true" />
            </a>
          </li>
        ))}
      </ul>
    </Section>
  )
}
