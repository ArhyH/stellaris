import { getCssVarOrNothing } from '@/shared/helpers';
import { OptionProps } from './types';

const getMinWidth = ({ minWidth }: Pick<OptionProps, 'minWidth'>) => {
  if (minWidth) {
    return getCssVarOrNothing('--option-min-width', minWidth);
  }
};

const getBgColor = ({ color }: Pick<OptionProps, 'color'>) => {
  if (color) {
    return getCssVarOrNothing('--option-active-bg', color);
  }
};

const getStyles = ({
  color,
  minWidth,
}: Pick<OptionProps, 'color' | 'minWidth'>) => {
  return {
    ...getMinWidth({ minWidth }),
    ...getBgColor({ color }),
  };
};

export { getStyles };
