import { cva, type VariantProps } from 'class-variance-authority';

export const labelStyles = cva(
  `text-sm text-black dark:text-white font-semibold`
);

export type LabelStyleProps = VariantProps<typeof labelStyles>;
