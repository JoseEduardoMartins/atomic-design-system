import type { TitleStyleProps } from './Title.style';

export interface TitleProps extends TitleStyleProps {
  children: React.ReactNode;
  className?: string;
}
