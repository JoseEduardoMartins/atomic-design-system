import { mergeClassNames } from '../../../helpers';
import { labelStyles } from './Label.style';
import type { LabelProps } from './Label.type';

export const Label = ({ className, ...props }: LabelProps) => (
  <label
    className={mergeClassNames(labelStyles({ className }))}
    {...props}
  ></label>
);
