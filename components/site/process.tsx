import { process } from '@/lib/site-content'
import { Section, SectionHeading } from './primitives'

export function Process() {
  return (
    <Section className="bg-primary text-primary-foreground">
      <div className="mb-10 flex flex-col gap-3">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-rose-soft">{process.eyebrow}</p>
        <h2 className="text-4xl font-medium leading-tight md:text-5xl">{process.title}</h2>
      </div>
      <ol className="grid gap-6 md:grid-cols-3">
        {process.steps.map((step, i) => (
          <li key={step.title} className="flex gap-4 md:flex-col">
            <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-accent font-serif text-xl font-semibold text-accent-foreground">
              {i + 1}
            </span>
            <div className="flex flex-col gap-1.5">
              <h3 className="text-2xl font-medium">{step.title}</h3>
              <p className="text-pretty leading-relaxed text-primary-foreground/80">{step.text}</p>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  )
}
