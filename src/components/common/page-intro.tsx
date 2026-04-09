type PageIntroProps = {
  eyebrow: string
  title: string
  description: string
}

export function PageIntro({ eyebrow, title, description }: PageIntroProps) {
  return (
    <div className="max-w-3xl">
      <p className="eyebrow text-primary">{eyebrow}</p>
      <h1 className="mt-4 text-5xl leading-none tracking-[-0.05em] text-foreground sm:text-6xl">
        {title}
      </h1>
      <p className="mt-5 text-base leading-8 text-muted-foreground sm:text-lg">{description}</p>
    </div>
  )
}
