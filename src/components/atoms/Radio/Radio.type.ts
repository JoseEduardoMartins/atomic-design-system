import type { InputHTMLAttributes } from 'react';
import type { RadioVariants } from './Radio.style';

export interface RadioProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'>,
    Omit<RadioVariants, 'size'> {
  radioSize?: 'sm' | 'md' | 'lg';
  error?: boolean;
  disabled?: boolean;
  className?: string;
}
