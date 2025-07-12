import { forwardRef } from 'react';
import { radioVariants } from './Radio.style';
import { mergeClassNames } from '../../../helpers';
import type { RadioProps } from './Radio.type';

export const Radio = forwardRef<HTMLInputElement, RadioProps>(
  (
    {
      className,
      variant = 'default',
      radioSize = 'md',
      error = false,
      disabled = false,
      ...props
    },
    ref
  ) => {
    return (
      <input
        ref={ref}
        type="radio"
        className={mergeClassNames(
          radioVariants({ variant, size: radioSize, error, disabled }),
          className
        )}
        disabled={disabled}
        aria-invalid={error}
        {...props}
      />
    );
  }
);

Radio.displayName = 'Radio';
