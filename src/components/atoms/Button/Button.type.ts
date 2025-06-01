import type { ButtonStyleProps } from './Button.style';

type ReactButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export type ButtonProps = ReactButtonProps &
  ButtonStyleProps & {
    isLoading?: boolean;
  };
