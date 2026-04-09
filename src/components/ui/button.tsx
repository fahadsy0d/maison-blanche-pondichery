import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full border border-transparent px-5 py-3 text-xs font-semibold uppercase tracking-[0.24em] transition duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        primary:
          'bg-primary text-primary-foreground shadow-[0_16px_40px_rgba(24,37,61,0.14)] hover:-translate-y-0.5 hover:opacity-95',
        secondary:
          'border-border bg-secondary text-secondary-foreground hover:-translate-y-0.5 hover:border-primary/20 hover:bg-white',
        ghost:
          'border-border bg-transparent text-foreground hover:-translate-y-0.5 hover:border-accent/40 hover:bg-white/50',
      },
      size: {
        default: 'h-12 px-5',
        lg: 'h-14 px-6 text-sm',
        sm: 'h-10 px-4 text-[0.68rem]',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'default',
    },
  },
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => (
    <button className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
  ),
)

Button.displayName = 'Button'

export { Button, buttonVariants }
