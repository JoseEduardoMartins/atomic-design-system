import { cva, type VariantProps } from 'class-variance-authority';

export const checkboxVariants = cva(
  [
    'form-checkbox',
    'rounded',
    'border',
    'transition',
    'focus:outline-none',
    'focus:ring-2',
    'focus:ring-blue-500',
    'dark:bg-zinc-900',
    'dark:border-zinc-700',
    'dark:checked:bg-blue-600',
    'dark:checked:border-blue-600'
  ],
  {
    variants: {
      variant: {
        default:
          'border-zinc-300 text-blue-600 checked:bg-blue-600 checked:border-blue-600',
        primary:
          'border-blue-600 text-blue-700 checked:bg-blue-700 checked:border-blue-700',
        secondary:
          'border-zinc-400 text-zinc-600 checked:bg-zinc-600 checked:border-zinc-600',
        error:
          'border-red-500 text-red-600 checked:bg-red-600 checked:border-red-600'
      },
      size: {
        sm: 'h-4 w-4',
        md: 'h-5 w-5',
        lg: 'h-6 w-6'
      },
      error: {
        true: 'border-red-500',
        false: ''
      },
      disabled: {
        true: 'opacity-50 cursor-not-allowed',
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

export type CheckboxVariants = VariantProps<typeof checkboxVariants>;
