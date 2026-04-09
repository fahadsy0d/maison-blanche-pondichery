import { PageIntro } from '@/components/common/page-intro'
import { aboutNotes } from '@/data/site-content'

export function AboutPage() {
  return (
    <div className="space-y-6">
      <section className="site-panel">
        <div className="page-shell grid gap-8 px-5 py-8 sm:px-8 sm:py-10 lg:grid-cols-[0.95fr_1.05fr] lg:px-10 lg:py-12">
          <PageIntro
            eyebrow="About"
            title="A property concept shaped by French colonial proportion."
            description="Maison Blanche Pondichery is positioned as a refined White Town address: calm architecture, limited keys, and a digital presence that respects that restraint."
          />
          <div className="rounded-[2rem] border border-border bg-white/75 p-6">
            <p className="text-lg leading-8 text-foreground">
              The house is imagined as a restored residence rather than a large hotel. The design
              stays editorial and minimal, with blue, white, and muted gold used to support the
              architecture instead of competing with it.
            </p>
            <p className="mt-5 text-sm leading-7 text-muted-foreground">
              This keeps the site believable for boutique travelers, travel bloggers, and guests
              choosing between personality-led stays.
            </p>
          </div>
        </div>
      </section>

      <section className="site-panel">
        <div className="page-shell grid gap-4 px-5 py-8 sm:px-8 lg:grid-cols-3 lg:px-10">
          {aboutNotes.map((note) => (
            <article className="rounded-[2rem] border border-border bg-white/75 p-6" key={note.title}>
              <h2 className="text-3xl leading-none tracking-[-0.04em] text-foreground">{note.title}</h2>
              <p className="mt-4 text-sm leading-7 text-muted-foreground">{note.description}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}
