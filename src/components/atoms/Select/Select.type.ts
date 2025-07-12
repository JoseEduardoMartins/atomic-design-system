import type { SelectHTMLAttributes } from 'react';
import type { SelectVariants } from './Select.style';

export interface SelectProps
  extends SelectHTMLAttributes<HTMLSelectElement>,
    Omit<SelectVariants, 'size'> {
  selectSize?: 'sm' | 'md' | 'lg';
  error?: boolean;
  disabled?: boolean;
  className?: string;
}
