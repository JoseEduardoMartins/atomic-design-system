import { forwardRef } from 'react';
import { textareaVariants } from './Textarea.style';
import { mergeClassNames } from '../../../helpers';
import type { TextareaProps } from './Textarea.type';

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      className,
      variant = 'default',
      textareaSize = 'md',
      error = false,
      disabled = false,
      ...props
    },
    ref
  ) => {
    return (
      <textarea
        ref={ref}
        className={mergeClassNames(
          textareaVariants({ variant, size: textareaSize, error, disabled }),
          className
        )}
        disabled={disabled}
        aria-invalid={error}
        {...props}
      />
    );
  }
);

Textarea.displayName = 'Textarea';
