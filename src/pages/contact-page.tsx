import { ArrowUpRight, MapPin, Phone, MessageCircle } from 'lucide-react'

import { PageIntro } from '@/components/common/page-intro'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { contactDetails } from '@/data/site-content'

export function ContactPage() {
  return (
    <div className="space-y-6">
      <section className="site-panel">
        <div className="page-shell grid gap-8 px-5 py-8 sm:px-8 sm:py-10 lg:grid-cols-[0.95fr_1.05fr] lg:px-10 lg:py-12">
          <PageIntro
            eyebrow="Contact"
            title="Booking inquiry, address, and direct WhatsApp access."
            description="The contact page is designed for a hospitality funnel: clear location details, short-form enquiry, and a faster messaging route for guests who prefer WhatsApp."
          />

          <div className="rounded-[2rem] border border-border bg-white/75 p-6">
            <div className="grid gap-5">
              <div className="flex items-start gap-3">
                <MapPin className="mt-1 h-5 w-5 text-accent" />
                <div>
                  <p className="font-semibold text-foreground">{contactDetails.address}</p>
                  <p className="mt-1 text-sm leading-6 text-muted-foreground">
                    Fictional White Town address placeholder for the demo property.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="mt-1 h-5 w-5 text-accent" />
                <div>
                  <p className="font-semibold text-foreground">{contactDetails.phone}</p>
                  <p className="mt-1 text-sm leading-6 text-muted-foreground">{contactDetails.email}</p>
                </div>
              </div>
              <a
                className="inline-flex items-center gap-2 rounded-full border border-border bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition hover:opacity-95"
                href={contactDetails.whatsapp}
                rel="noreferrer"
                target="_blank"
              >
                <MessageCircle className="h-4 w-4" />
                Chat on WhatsApp
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="site-panel">
        <div className="page-shell grid gap-6 px-5 py-8 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:px-10">
          <form className="rounded-[2rem] border border-border bg-white/75 p-6">
            <p className="eyebrow text-accent">Inquiry form</p>
            <h2 className="mt-4 text-4xl leading-none tracking-[-0.04em] text-foreground">
              Send a booking request.
            </h2>
            <div className="mt-6 grid gap-4">
              <Input placeholder="Guest name" />
              <Input placeholder="Email address" type="email" />
              <div className="grid gap-4 sm:grid-cols-2">
                <Input placeholder="Check-in date" type="date" />
                <Input placeholder="Check-out date" type="date" />
              </div>
              <Textarea placeholder="Room type, guest count, or any special request" />
              <Button type="button">Submit inquiry</Button>
            </div>
          </form>

          <div className="rounded-[2rem] border border-border bg-[linear-gradient(180deg,rgba(189,157,92,0.08),rgba(255,255,255,0.62))] p-6">
            <p className="eyebrow text-accent">Booking note</p>
            <h2 className="mt-4 text-4xl leading-none tracking-[-0.04em] text-foreground">
              Refined hospitality starts with a clear first interaction.
            </h2>
            <p className="mt-5 text-sm leading-7 text-muted-foreground">
              The contact funnel is intentionally minimal: quick details, a short enquiry form,
              and one direct messaging option for faster conversion.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
