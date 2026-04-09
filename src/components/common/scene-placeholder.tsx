import { cn } from '@/lib/utils'

type ScenePlaceholderProps = {
  title: string
  caption: string
  className?: string
}

export function ScenePlaceholder({ title, caption, className }: ScenePlaceholderProps) {
  return (
    <div
      className={cn(
        'relative overflow-hidden rounded-[2rem] border border-border bg-[linear-gradient(180deg,rgba(24,37,61,0.03),rgba(255,255,255,0.72))] p-6',
        className,
      )}
    >
      <div className="absolute inset-x-6 top-6 h-28 rounded-[1.5rem] border border-white bg-[radial-gradient(circle_at_top,rgba(189,157,92,0.28),transparent_58%),linear-gradient(180deg,rgba(255,255,255,0.96),rgba(227,232,238,0.9))]" />
      <div className="relative mt-32">
        <p className="eyebrow text-accent">Image placeholder</p>
        <h3 className="mt-3 text-3xl leading-none tracking-[-0.04em] text-foreground">{title}</h3>
        <p className="mt-4 text-sm leading-7 text-muted-foreground">{caption}</p>
      </div>
    </div>
  )
}
