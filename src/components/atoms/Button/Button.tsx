import { mergeClassNames } from '../../../helpers';
import { buttonStyles } from './Button.style';
import type { ButtonProps } from './Button.type';

export const Button = ({
  children,
  className,
  variant,
  size,
  type = 'button',
  isLoading = false,
  disabled = false,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={mergeClassNames(buttonStyles({ variant, size, className }))}
      type={type}
      disabled={disabled || isLoading}
      {...props}
    >
      {children}
    </button>
  );
};
