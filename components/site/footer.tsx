import { navigation, site } from '@/lib/site-content'

const legal = [
  { label: 'Imprint', href: '/imprint' },
  { label: 'Privacy', href: '/privacy' },
]

export function Footer() {
  return (
    <footer className="bg-primary px-5 pb-28 pt-14 text-primary-foreground md:px-8 md:pb-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 md:flex-row md:justify-between">
        <div className="max-w-xs">
          <p className="font-serif text-3xl font-semibold">{site.name}</p>
          <p className="mt-2 text-sm leading-relaxed text-primary-foreground/75">{site.description}</p>
        </div>
        <nav aria-label="Footer">
          <ul className="grid grid-cols-2 gap-x-10 gap-y-3 text-sm">
            {navigation.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="text-primary-foreground/80 hover:text-primary-foreground">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="mx-auto mt-10 flex max-w-6xl flex-col gap-3 border-t border-primary-foreground/15 pt-6 text-xs text-primary-foreground/65 sm:flex-row sm:justify-between">
        <p>
          &copy; {new Date().getFullYear()} {site.name}. Mahalo for visiting.
        </p>
        <ul className="flex gap-5">
          {legal.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="hover:text-primary-foreground">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  )
}
