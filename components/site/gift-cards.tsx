import Image from 'next/image'
import { Gift, Mail } from 'lucide-react'
import { features, giftCards } from '@/lib/site-content'
import { CtaLink, Section, SectionHeading } from './primitives'

export function GiftCards() {
  return (
    <Section id="gift-cards" className="bg-card">
      <div className="overflow-hidden rounded-3xl bg-muted md:grid md:grid-cols-2">
        <div className="relative aspect-[4/3] md:aspect-auto">
          <Image src={giftCards.image.src} alt={giftCards.image.alt} fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover" />
        </div>
        <div className="flex flex-col gap-5 p-6 md:p-10">
          <SectionHeading eyebrow={giftCards.eyebrow} title={giftCards.title} className="mb-0" />
          <p className="text-pretty leading-relaxed text-muted-foreground">{giftCards.text}</p>

          <ul className="flex flex-wrap gap-2" aria-label="Available gift card values">
            {giftCards.options.map((o) => (
              <li key={o} className="rounded-full border border-accent/40 bg-card px-4 py-2 text-sm font-medium text-clay-deep">
                {o}
              </li>
            ))}
          </ul>

          {features.giftCardShop ? (
            <CtaLink href="/gift-cards" variant="accent" className="w-full sm:w-fit">
              <Gift />
              Buy a gift card
            </CtaLink>
          ) : (
            <>
              <p className="rounded-2xl bg-clay-soft p-4 text-sm leading-relaxed text-clay-deep">{giftCards.shopSoonNote}</p>
              <CtaLink href="#contact" variant="accent" className="w-full sm:w-fit">
                <Mail />
                Request a gift card
              </CtaLink>
            </>
          )}
        </div>
      </div>
    </Section>
  )
}
