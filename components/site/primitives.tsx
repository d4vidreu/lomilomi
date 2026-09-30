import { cn } from '@/lib/utils'

type CtaVariant = 'primary' | 'accent' | 'outline' | 'ghost'

const ctaStyles: Record<CtaVariant, string> = {
  primary: 'bg-primary text-primary-foreground hover:bg-primary/90',
  accent: 'bg-accent text-accent-foreground hover:bg-rose-deep',
  outline: 'border border-primary/25 bg-card/60 text-primary hover:bg-secondary',
  ghost: 'text-primary hover:bg-secondary',
}

export function CtaLink({
  href,
  variant = 'primary',
  className,
  children,
  ...props
}: React.ComponentProps<'a'> & { variant?: CtaVariant }) {
  return (
    <a
      href={href}
      className={cn(
        'inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50 [&_svg]:size-4 [&_svg]:shrink-0',
        ctaStyles[variant],
        className,
      )}
      {...props}
    >
      {children}
    </a>
  )
}

export function Section({ id, className, children }: { id?: string; className?: string; children: React.ReactNode }) {
  return (
    <section id={id} className={cn('px-5 py-16 md:px-8 md:py-24', className)}>
      <div className="mx-auto max-w-6xl">{children}</div>
    </section>
  )
}

export function SectionHeading({
  eyebrow,
  title,
  align = 'left',
  className,
}: {
  eyebrow: string
  title: string
  align?: 'left' | 'center'
  className?: string
}) {
  return (
    <div className={cn('mb-10 flex flex-col gap-3', align === 'center' && 'items-center text-center', className)}>
      <p className="text-xs font-medium uppercase tracking-[0.2em] text-rose-deep">{eyebrow}</p>
      <h2 className="text-4xl font-medium leading-tight text-primary md:text-5xl">{title}</h2>
    </div>
  )
}
