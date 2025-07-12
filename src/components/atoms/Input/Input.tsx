import { forwardRef } from 'react';
import { inputVariants } from './Input.style';
import { mergeClassNames } from '../../../helpers';
import type { InputProps } from './Input.type';

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      variant = 'default',
      inputSize = 'md',
      error = false,
      disabled = false,
      type = 'text',
      ...props
    },
    ref
  ) => {
    return (
      <input
        ref={ref}
        type={type}
        className={mergeClassNames(
          inputVariants({ variant, size: inputSize, error, disabled }),
          className
        )}
        disabled={disabled}
        aria-invalid={error}
        {...props}
      />
    );
  }
);

Input.displayName = 'Input';
