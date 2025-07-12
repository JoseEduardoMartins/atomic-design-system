import type { InputHTMLAttributes } from 'react';

export type InputVariant = 'default' | 'primary' | 'secondary' | 'error';
export type InputSize = 'sm' | 'md' | 'lg';

export interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  variant?: InputVariant;
  inputSize?: InputSize;
  error?: boolean;
}
