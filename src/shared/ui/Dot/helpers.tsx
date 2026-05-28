import { getCssVarOrNothing } from '@/shared/helpers/styles';
import { DotProps } from './Dot';

const getColor = ({ color }: Pick<DotProps, 'color'>) => {
  if (color) {
    return getCssVarOrNothing('--dot-color', color);
  }
};

const getStyles = ({ color }: Pick<DotProps, 'color'>) => {
  return {
    ...getColor({ color }),
  };
};

export { getStyles };
