import React, { forwardRef } from 'react';
import { selectVariants } from './Select.style';
import { mergeClassNames } from '../../../helpers';
import type { SelectProps } from './Select.type';

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  (
    {
      className,
      variant = 'default',
      selectSize = 'md',
      error = false,
      disabled = false,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <select
        ref={ref}
        className={mergeClassNames(
          selectVariants({ variant, size: selectSize, error, disabled }),
          className
        )}
        disabled={disabled}
        aria-invalid={error}
        {...props}
      >
        {children}
      </select>
    );
  }
);

Select.displayName = 'Select';
