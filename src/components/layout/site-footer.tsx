import { NavLink } from 'react-router-dom'

import { navigation } from '@/data/site-content'

export function SiteFooter() {
  return (
    <footer className="site-panel">
      <div className="page-shell mx-auto grid max-w-6xl gap-6 px-5 py-8 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:px-10">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-accent">
            Maison Blanche Pondichery
          </p>
          <p className="mt-3 max-w-xl text-sm leading-7 text-muted-foreground">
            A boutique guesthouse concept built as a refined, production-ready travel property
            website demo.
          </p>
        </div>
        <div className="grid gap-2 sm:grid-cols-2">
          {navigation.map((item) => (
            <NavLink
              className="rounded-full px-3 py-2 text-sm text-muted-foreground transition hover:bg-white hover:text-foreground"
              key={item.to}
              to={item.to}
            >
              {item.label}
            </NavLink>
          ))}
        </div>
      </div>
    </footer>
  )
}
