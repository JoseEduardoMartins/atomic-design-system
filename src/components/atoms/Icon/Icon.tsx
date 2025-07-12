import { lazy, memo, Suspense } from 'react';
import type { IconProps } from './Icon.type';
import { iconVariants } from './Icon.style';
import { mergeClassNames } from '../../../helpers/mergeClassNames';
import dynamicIconImports from 'lucide-react/dynamicIconImports';

const fallback = (
  <div style={{ background: 'transparent', width: 24, height: 24 }} />
);

export const Icon = memo(
  ({
    className,
    fill = 'transparent',
    onClick,
    iconName,
    variant,
    size,
    'aria-label': ariaLabel,
    'aria-hidden': ariaHidden,
    ...rest
  }: IconProps) => {
    const onClickHandler = () => {
      if (onClick) {
        onClick();
      }
    };

    if (!dynamicIconImports[iconName]) {
      console.warn(`Ícone '${iconName}' não encontrado no Lucide.`);
      return null;
    }

    const LucideIcon = lazy(dynamicIconImports[iconName]);
    if (!LucideIcon) {
      return null;
    }

    return (
      <Suspense fallback={fallback}>
        <LucideIcon
          className={mergeClassNames(
            iconVariants({ variant, size, className })
          )}
          onClick={onClickHandler}
          fill={fill}
          aria-label={ariaLabel}
          aria-hidden={ariaHidden}
          role="img"
          key={iconName}
          {...rest}
        />
      </Suspense>
    );
  }
);

Icon.displayName = 'Icon';

export default Icon;
