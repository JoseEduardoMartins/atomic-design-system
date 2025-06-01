import { cva, type VariantProps } from 'class-variance-authority';

export const buttonStyles = cva(
  `
    rounded-md
    font-semibold
    text-sm
    whitespace-nowrap
    inline-flex
    items-center
    justify-center
    gap-2
    ring-offset-background
    transition-colors
    focus-visible:outline-none
    focus-visible:ring-2
    focus-visible:ring-offset-2
    disabled:cursor-not-allowed
    disabled:opacity-50
  `,
  {
    variants: {
      variant: {
        primary: `
          text-foreground
          bg-primary
          hover:bg-primary-hover
          focus-visible:ring-primary
          [&>svg]:text-foreground
      `,
        secondary: `
          text-secondary
          border
          border-border
          bg-transparent
          hover:bg-gray-200
          dark:hover:bg-gray-800
        `,
        success: `
          text-foreground
          bg-success
          hover:brightness-110
          focus-visible:ring-success
        `,
        warning: `
          text-foreground
          bg-warning
          hover:brightness-110
          focus-visible:ring-warning
        `,
        error: `
          text-foreground
          bg-error
          hover:brightness-110
          focus-visible:ring-error
        `
      },
      size: {
        icon: 'h-10 w-10',
        sm: 'h-9 px-3',
        md: 'h-10 px-4',
        lg: 'h-11 px-8'
      }
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md'
    }
  }
);

export type ButtonStyleProps = VariantProps<typeof buttonStyles>;
