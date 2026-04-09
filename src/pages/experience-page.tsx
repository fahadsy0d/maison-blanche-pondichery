import { PageIntro } from '@/components/common/page-intro'
import { experienceMoments, localRecommendations } from '@/data/site-content'

export function ExperiencePage() {
  return (
    <div className="space-y-6">
      <section className="site-panel">
        <div className="page-shell px-5 py-8 sm:px-8 sm:py-10 lg:px-10 lg:py-12">
          <PageIntro
            eyebrow="Experience"
            title="A White Town stay built around location and pace."
            description="The experience layer keeps the guesthouse grounded in Pondicherry: quiet streets, architectural context, short walks, and a few recommendations worth making."
          />

          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            {experienceMoments.map((item) => (
              <article className="rounded-[2rem] border border-border bg-white/75 p-6" key={item.title}>
                <h2 className="text-3xl leading-none tracking-[-0.04em] text-foreground">{item.title}</h2>
                <p className="mt-4 text-sm leading-7 text-muted-foreground">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="site-panel">
        <div className="page-shell grid gap-6 px-5 py-8 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:px-10">
          <div>
            <p className="eyebrow text-accent">Local recommendations</p>
            <h2 className="mt-4 text-4xl leading-none tracking-[-0.05em] text-foreground sm:text-5xl">
              Shortlist, not overload.
            </h2>
          </div>
          <div className="grid gap-3">
            {localRecommendations.map((item) => (
              <div className="rounded-[1.5rem] border border-border bg-white/75 px-5 py-4" key={item}>
                <p className="text-base text-foreground">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
