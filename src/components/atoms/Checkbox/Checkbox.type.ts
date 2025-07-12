import type { InputHTMLAttributes } from 'react';
import type { CheckboxVariants } from './Checkbox.style';

export interface CheckboxProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'>,
    Omit<CheckboxVariants, 'size'> {
  checkboxSize?: 'sm' | 'md' | 'lg';
  error?: boolean;
  indeterminate?: boolean;
  disabled?: boolean;
  className?: string;
}
