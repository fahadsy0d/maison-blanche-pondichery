import { ArrowRight, BedDouble, Compass, Landmark } from 'lucide-react'
import { NavLink } from 'react-router-dom'

import { PageIntro } from '@/components/common/page-intro'
import { ScenePlaceholder } from '@/components/common/scene-placeholder'
import { buttonVariants } from '@/components/ui/button'

export function HomePage() {
  return (
    <div className="space-y-6">
      <section className="site-panel">
        <div className="page-shell grid gap-8 px-5 py-8 sm:px-8 sm:py-10 lg:grid-cols-[1.05fr_0.95fr] lg:px-10 lg:py-12">
          <div className="space-y-8">
            <PageIntro
              eyebrow="White Town, Pondicherry"
              title="A quiet French heritage stay in the old quarter."
              description="Maison Blanche Pondichery is a boutique guesthouse concept designed around colonial architecture, calm rooms, and a refined travel-blog sensibility."
            />

            <div className="flex flex-wrap gap-3">
              <NavLink className={buttonVariants()} to="/rooms">
                View rooms
                <ArrowRight className="h-4 w-4" />
              </NavLink>
              <NavLink className={buttonVariants({ variant: 'secondary' })} to="/experience">
                Explore the neighborhood
              </NavLink>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              <div className="rounded-[1.75rem] border border-border bg-white/75 p-5">
                <Landmark className="h-5 w-5 text-accent" />
                <p className="mt-4 text-xl font-semibold text-foreground">Colonial calm</p>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  Tall shutters, pale walls, and proportion-led interiors.
                </p>
              </div>
              <div className="rounded-[1.75rem] border border-border bg-white/75 p-5">
                <BedDouble className="h-5 w-5 text-accent" />
                <p className="mt-4 text-xl font-semibold text-foreground">Boutique scale</p>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  Only a few rooms, quieter service, and slower hospitality.
                </p>
              </div>
              <div className="rounded-[1.75rem] border border-border bg-white/75 p-5">
                <Compass className="h-5 w-5 text-accent" />
                <p className="mt-4 text-xl font-semibold text-foreground">Walkable White Town</p>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  Promenade access, French Quarter streets, and local recommendations.
                </p>
              </div>
            </div>
          </div>

          <div className="grid gap-4">
            <ScenePlaceholder
              caption="Hero placeholder for a restored heritage facade with white walls, blue shutters, and a shaded entrance."
              className="min-h-[24rem]"
              title="Heritage facade"
            />
            <div className="grid gap-4 sm:grid-cols-2">
              <ScenePlaceholder caption="A room with editorial styling, woven textures, and soft daylight." title="Guest room" />
              <ScenePlaceholder caption="A quiet courtyard breakfast arrangement under tropical shade." title="Courtyard" />
            </div>
          </div>
        </div>
      </section>

      <section className="site-panel">
        <div className="page-shell grid gap-6 px-5 py-8 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:px-10">
          <div>
            <p className="eyebrow text-accent">Property tone</p>
            <h2 className="mt-4 text-4xl leading-none tracking-[-0.05em] text-foreground sm:text-5xl">
              White, navy, and soft gold kept deliberately restrained.
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-[1.75rem] border border-border bg-primary p-6 text-white">
              <p className="eyebrow text-[#dcc28e]">For guests</p>
              <p className="mt-4 text-lg leading-8">
                The site is designed to feel save-worthy and credible, not overloaded with hotel
                clichés or generic lifestyle imagery.
              </p>
            </div>
            <div className="rounded-[1.75rem] border border-border bg-white/75 p-6">
              <p className="eyebrow text-accent">For planning</p>
              <p className="mt-4 text-lg leading-8 text-muted-foreground">
                Clear rooms, concise location context, and a direct booking path are prioritized
                over noise.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
