import { titleStyles } from './Title.style';
import type { TitleProps } from './Title.type';
import { mergeClassNames } from '../../../helpers';

export const Title = ({ children, className, variant }: TitleProps) => {
  return (
    <h1 className={mergeClassNames(titleStyles({ variant, className }))}>
      {children}
    </h1>
  );
};
