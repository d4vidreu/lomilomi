import { CalendarHeart, MessageCircle } from 'lucide-react'
import { features, site } from '@/lib/site-content'
import { CtaLink } from './primitives'

export function MobileCtaBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border/60 bg-background/90 px-4 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-3 backdrop-blur-md md:hidden">
      <div className="flex gap-2">
        <CtaLink href={site.whatsappHref} target="_blank" rel="noopener noreferrer" variant="outline" className="flex-1 px-4">
          <MessageCircle />
          WhatsApp
        </CtaLink>
        <CtaLink href={features.onlineBooking ? '/booking' : '#contact'} variant="accent" className="flex-[1.4] px-4">
          <CalendarHeart />
          Book a massage
        </CtaLink>
      </div>
    </div>
  )
}
