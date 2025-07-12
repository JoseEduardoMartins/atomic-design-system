import { cva, type VariantProps } from 'class-variance-authority';

export const textareaVariants = cva(
  [
    'block',
    'w-full',
    'rounded-md',
    'border',
    'bg-white',
    'shadow-sm',
    'focus:outline-none',
    'transition',
    'resize-y',
    'dark:bg-zinc-900',
    'dark:text-zinc-100',
    'dark:border-zinc-700',
    'dark:placeholder-zinc-500'
  ],
  {
    variants: {
      variant: {
        default:
          'border-zinc-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500',
        primary:
          'border-blue-600 focus:border-blue-700 focus:ring-1 focus:ring-blue-700',
        secondary:
          'border-zinc-400 focus:border-zinc-600 focus:ring-1 focus:ring-zinc-600',
        error:
          'border-red-500 focus:border-red-600 focus:ring-1 focus:ring-red-600'
      },
      size: {
        sm: 'px-2 py-1 text-sm',
        md: 'px-3 py-2 text-base',
        lg: 'px-4 py-3 text-lg'
      },
      error: {
        true: 'border-red-500 focus:border-red-600 focus:ring-1 focus:ring-red-600',
        false: ''
      },
      disabled: {
        true: 'opacity-50 cursor-not-allowed bg-zinc-100 text-zinc-400 border-zinc-200 dark:bg-zinc-800 dark:text-zinc-600 dark:border-zinc-800',
        false: ''
      }
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
      error: false,
      disabled: false
    }
  }
);

export type TextareaVariants = VariantProps<typeof textareaVariants>;
