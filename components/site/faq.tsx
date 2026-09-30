import { Plus } from 'lucide-react'
import { faqs } from '@/lib/site-content'
import { Section, SectionHeading } from './primitives'

export function Faq() {
  return (
    <Section id="faq">
      <div className="mx-auto max-w-3xl">
        <SectionHeading eyebrow="Good to know" title="Frequently asked questions" align="center" />
        <div className="flex flex-col gap-3">
          {faqs.map((f) => (
            <details key={f.question} className="group rounded-2xl border bg-card px-5 open:shadow-sm">
              <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-4 py-4 font-medium text-primary [&::-webkit-details-marker]:hidden">
                {f.question}
                <Plus className="size-5 shrink-0 text-accent transition-transform group-open:rotate-45" aria-hidden="true" />
              </summary>
              <p className="pb-5 text-pretty leading-relaxed text-muted-foreground">{f.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </Section>
  )
}
