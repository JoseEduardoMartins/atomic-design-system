import type { TextareaHTMLAttributes } from 'react';
import type { TextareaVariants } from './Textarea.style';

export interface TextareaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement>,
    Omit<TextareaVariants, 'size'> {
  textareaSize?: 'sm' | 'md' | 'lg';
  error?: boolean;
  disabled?: boolean;
  className?: string;
}
