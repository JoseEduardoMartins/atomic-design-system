import React, { forwardRef, useEffect, useRef } from 'react';
import { checkboxVariants } from './Checkbox.style';
import { mergeClassNames } from '../../../helpers';
import type { CheckboxProps } from './Checkbox.type';

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      className,
      variant = 'default',
      checkboxSize = 'md',
      error = false,
      indeterminate = false,
      disabled = false,
      ...props
    },
    ref
  ) => {
    const internalRef = useRef<HTMLInputElement>(null);
    const combinedRef = (node: HTMLInputElement) => {
      if (typeof ref === 'function') ref(node);
      else if (ref)
        (ref as React.MutableRefObject<HTMLInputElement | null>).current = node;
      internalRef.current = node;
    };

    useEffect(() => {
      if (internalRef.current) {
        internalRef.current.indeterminate = indeterminate;
      }
    }, [indeterminate]);

    return (
      <input
        ref={combinedRef}
        type="checkbox"
        className={mergeClassNames(
          checkboxVariants({ variant, size: checkboxSize, error, disabled }),
          className
        )}
        disabled={disabled}
        aria-invalid={error}
        aria-checked={indeterminate ? 'mixed' : undefined}
        {...props}
      />
    );
  }
);

Checkbox.displayName = 'Checkbox';
