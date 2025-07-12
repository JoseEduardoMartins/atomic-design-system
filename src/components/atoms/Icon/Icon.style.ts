import { cva, type VariantProps } from 'class-variance-authority';

export const iconVariants = cva('', {
  variants: {
    variant: {
      default: 'text-gray-900 dark:text-gray-50',
      info: 'text-blue-600 dark:text-blue-400',
      warning: 'text-yellow-600 dark:text-yellow-400',
      success: 'text-green-600 dark:text-green-400',
      error: 'text-red-600 dark:text-red-400',
      primary: 'text-blue-600 dark:text-blue-400',
      destructive: 'text-rose-500 dark:text-rose-400',
      gray: 'text-gray-600 dark:text-gray-400'
    },
    size: {
      default: 'h-4 w-4',
      sm: 'h-3 w-3',
      md: 'h-6 w-6',
      lg: 'h-8 w-8',
      xl: 'h-9 w-9',
      xxl: 'h-12 w-12'
    }
  },
  defaultVariants: {
    variant: 'default',
    size: 'default'
  }
});

export type IconVariants = VariantProps<typeof iconVariants>;
