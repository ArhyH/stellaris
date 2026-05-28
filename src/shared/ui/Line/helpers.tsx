import { getCssVarOrNothing } from '@/shared/helpers/styles';
import { LineProps } from './Line';

const getColor = ({ color }: Pick<LineProps, 'color'>) => {
  if (color) {
    return getCssVarOrNothing('--line-color', color);
  }
};

const getStyles = ({ color }: Pick<LineProps, 'color'>) => {
  return {
    ...getColor({ color }),
  };
};

export { getStyles };
