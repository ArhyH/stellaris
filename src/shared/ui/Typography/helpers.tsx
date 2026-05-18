import { getCssVarOrNothing } from '@/shared/helpers/styles';
import { TypographyProps } from './Typography';

const getColor = ({ color }: Pick<TypographyProps, 'color'>) => {
  if (color) {
    return getCssVarOrNothing('--typography-color', color);
  }
};

const getStyles = ({ color }: Pick<TypographyProps, 'color'>) => {
  return {
    ...getColor({ color }),
  };
};

export { getStyles };
