import { cva, type VariantProps } from 'class-variance-authority';

export const titleStyles = cva('', {
  variants: {
    variant: {
      default: 'text-black dark:text-white',
      gray: 'text-gray-600 dark:text-gray-100',
      success: 'text-success',
      destructive: 'text-destructive'
    }
  },
  defaultVariants: {
    variant: 'default'
  }
});

export type TitleStyleProps = VariantProps<typeof titleStyles>;
