import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'

import { buttonVariants } from '@/components/ui/button'
import { navigation } from '@/data/site-content'
import { cn } from '@/lib/utils'

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="site-panel">
      <div className="page-shell mx-auto flex max-w-6xl flex-col gap-4 px-5 py-5 sm:px-8 lg:px-10">
        <div className="flex items-center justify-between gap-4">
          <NavLink className="flex flex-col" onClick={() => setOpen(false)} to="/">
            <span className="text-sm font-semibold uppercase tracking-[0.28em] text-accent">
              Maison Blanche Pondichery
            </span>
            <span className="font-display text-2xl tracking-[-0.04em] text-foreground">
              French heritage guesthouse
            </span>
          </NavLink>

          <button
            aria-label={open ? 'Close menu' : 'Open menu'}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-white/80 text-foreground lg:hidden"
            onClick={() => setOpen((value) => !value)}
            type="button"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>

          <nav aria-label="Primary" className="hidden items-center gap-2 lg:flex">
            {navigation.map((item) => (
              <NavLink
                className={({ isActive }) =>
                  cn(
                    'rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] transition',
                    isActive ? 'bg-primary text-primary-foreground' : 'text-muted-foreground hover:bg-white hover:text-foreground',
                  )
                }
                key={item.to}
                to={item.to}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <NavLink className={cn(buttonVariants({ variant: 'secondary' }), 'hidden lg:inline-flex')} to="/contact">
            Book inquiry
          </NavLink>
        </div>

        {open ? (
          <nav className="grid gap-2 rounded-[1.5rem] border border-border bg-white/75 p-3 lg:hidden" aria-label="Mobile primary">
            {navigation.map((item) => (
              <NavLink
                className={({ isActive }) =>
                  cn(
                    'rounded-2xl px-4 py-3 text-sm font-medium transition',
                    isActive ? 'bg-primary text-primary-foreground' : 'text-foreground hover:bg-white',
                  )
                }
                key={item.to}
                onClick={() => setOpen(false)}
                to={item.to}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        ) : null}
      </div>
    </header>
  )
}
