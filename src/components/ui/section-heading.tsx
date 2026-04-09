import { cn } from '@/lib/utils'

type SectionHeadingProps = {
  eyebrow: string
  title: string
  description: string
  className?: string
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn('max-w-3xl space-y-4', className)}>
      <p className="track-label text-primary">{eyebrow}</p>
      <h2 className="font-display text-4xl leading-none tracking-[-0.05em] text-white sm:text-5xl">
        {title}
      </h2>
      <p className="max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
        {description}
      </p>
    </div>
  )
}
