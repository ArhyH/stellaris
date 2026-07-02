import { getCssVarOrNothing } from '@/shared/helpers';
import { LabelProps } from './types';
import { labelColorByBgColor } from './consts';

const getBgColor = ({ bgColor }: Pick<LabelProps, 'bgColor'>) => {
  if (bgColor) {
    return getCssVarOrNothing('--label-bg-color', bgColor);
  }
};

const getColor = ({ bgColor }: Pick<LabelProps, 'bgColor'>) => {
  if (bgColor) {
    return getCssVarOrNothing('--label-color', labelColorByBgColor[bgColor]);
  }
};

const getStyles = ({ bgColor }: Pick<LabelProps, 'bgColor'>) => {
  return {
    ...getBgColor({ bgColor }),
    ...getColor({ bgColor }),
  };
};

export { getStyles };
