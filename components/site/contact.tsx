import { CalendarClock, Clock, Mail, MapPin, MessageCircle, Phone } from 'lucide-react'
import { contact, features, site } from '@/lib/site-content'
import { Section, SectionHeading } from './primitives'

const channels = [
  { icon: Phone, label: 'Call', value: site.phone, href: site.phoneHref },
  { icon: MessageCircle, label: 'WhatsApp', value: 'Send a message', href: site.whatsappHref, external: true },
  { icon: Mail, label: 'Email', value: site.email, href: `mailto:${site.email}` },
]

export function Contact() {
  return (
    <Section id="contact" className="bg-secondary/60">
      <div className="grid gap-10 md:grid-cols-2 md:gap-16">
        <div>
          <SectionHeading eyebrow={contact.eyebrow} title={contact.title} className="mb-6" />
          <p className="text-pretty leading-relaxed text-muted-foreground">{contact.text}</p>

          {/* Placeholder slot for the future booking widget (features.onlineBooking) */}
          {features.onlineBooking ? (
            <div id="booking-widget" className="mt-8 min-h-64 rounded-3xl bg-card p-6" />
          ) : (
            <p className="mt-6 flex items-center gap-2 text-sm text-clay-deep">
              <CalendarClock className="size-4" aria-hidden="true" />
              {contact.bookingSoonNote}
            </p>
          )}

          <ul className="mt-8 flex flex-col gap-3">
            {channels.map((c) => (
              <li key={c.label}>
                <a
                  href={c.href}
                  {...(c.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  className="flex min-h-16 items-center gap-4 rounded-2xl bg-card p-4 transition-colors hover:bg-clay-soft"
                >
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-accent text-accent-foreground">
                    <c.icon className="size-5" aria-hidden="true" />
                  </span>
                  <span className="flex flex-col">
                    <span className="text-xs uppercase tracking-wider text-muted-foreground">{c.label}</span>
                    <span className="font-medium text-primary">{c.value}</span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-4">
          <div className="rounded-3xl bg-card p-6">
            <h3 className="mb-4 flex items-center gap-2 text-2xl font-medium text-primary">
              <Clock className="size-5 text-clay-deep" aria-hidden="true" />
              Opening hours
            </h3>
            <dl className="flex flex-col divide-y">
              {site.hours.map((h) => (
                <div key={h.days} className="flex justify-between py-3 text-sm">
                  <dt className="text-muted-foreground">{h.days}</dt>
                  <dd className="font-medium text-primary">{h.time}</dd>
                </div>
              ))}
            </dl>
          </div>

          <a
            href={site.address.mapsHref}
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-3xl bg-card p-6 transition-colors hover:bg-clay-soft"
          >
            <h3 className="mb-3 flex items-center gap-2 text-2xl font-medium text-primary">
              <MapPin className="size-5 text-clay-deep" aria-hidden="true" />
              Studio
            </h3>
            <address className="not-italic leading-relaxed text-muted-foreground">
              {site.address.street}
              <br />
              {site.address.city}
            </address>
            <span className="mt-3 inline-block text-sm font-medium text-primary underline-offset-4 group-hover:underline">
              Open in maps
            </span>
          </a>
        </div>
      </div>
    </Section>
  )
}
