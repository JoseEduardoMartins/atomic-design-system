import type { LabelStyleProps } from './Label.style';

type ReactLabelProps = React.LabelHTMLAttributes<HTMLLabelElement>;

export type LabelProps = ReactLabelProps & LabelStyleProps;
