import Image from 'next/image'
import { Award } from 'lucide-react'
import { therapist } from '@/lib/site-content'
import { Section, SectionHeading } from './primitives'

export function Therapist() {
  return (
    <Section id="therapist">
      <div className="grid gap-10 md:grid-cols-5 md:items-center md:gap-16">
        <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-3xl md:col-span-2 md:max-w-none">
          <Image src={therapist.image.src} alt={therapist.image.alt} fill sizes="(min-width: 768px) 40vw, 100vw" className="object-cover" />
        </div>

        <div className="md:col-span-3">
          <SectionHeading eyebrow={therapist.eyebrow} title={therapist.name} className="mb-2" />
          <p className="mb-6 font-serif text-xl italic text-rose-deep">{therapist.role}</p>
          <div className="flex flex-col gap-4 text-pretty leading-relaxed text-muted-foreground">
            {therapist.text.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
          <ul className="mt-8 flex flex-wrap gap-2">
            {therapist.credentials.map((c) => (
              <li key={c} className="flex items-center gap-2 rounded-full bg-secondary px-4 py-2 text-sm text-secondary-foreground">
                <Award className="size-4 text-rose-deep" aria-hidden="true" />
                {c}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  )
}
