import type { PropsWithChildren } from 'react'

import { SiteFooter } from '@/components/layout/site-footer'
import { SiteHeader } from '@/components/layout/site-header'
import { useScrollToTop } from '@/hooks/use-scroll-to-top'

export function SiteShell({ children }: PropsWithChildren) {
  useScrollToTop()

  return (
    <div className="mx-auto flex min-h-screen max-w-7xl flex-col gap-6 px-4 py-4 sm:px-6 lg:px-8">
      <SiteHeader />
      <main className="flex-1">{children}</main>
      <SiteFooter />
    </div>
  )
}
