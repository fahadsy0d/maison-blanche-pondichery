import { PageIntro } from '@/components/common/page-intro'
import { rooms } from '@/data/site-content'

export function RoomsPage() {
  return (
    <section className="site-panel">
      <div className="page-shell space-y-10 px-5 py-8 sm:px-8 sm:py-10 lg:px-10 lg:py-12">
        <PageIntro
          eyebrow="Rooms"
          title="Three room types with boutique scale and calm detailing."
          description="Room descriptions, pricing placeholders, and amenities are structured for a hospitality site that needs to feel polished without becoming ornate."
        />

        <div className="grid gap-4 xl:grid-cols-3">
          {rooms.map((room) => (
            <article className="rounded-[2rem] border border-border bg-white/75 p-6" key={room.name}>
              <p className="eyebrow text-accent">{room.price}</p>
              <h2 className="mt-4 text-4xl leading-none tracking-[-0.04em] text-foreground">
                {room.name}
              </h2>
              <p className="mt-5 text-sm leading-7 text-muted-foreground">{room.description}</p>

              <div className="mt-6 space-y-3 border-t border-border pt-5">
                {room.amenities.map((item) => (
                  <div className="flex items-center justify-between gap-4 text-sm" key={item}>
                    <span className="text-muted-foreground">{item}</span>
                    <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
