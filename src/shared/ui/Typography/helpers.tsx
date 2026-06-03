import { getCssVarOrNothing } from '@/shared/helpers/styles';
import { TypographyProps } from './Typography';

const getColor = ({ color }: Pick<TypographyProps, 'color'>) => {
  if (color) {
    return getCssVarOrNothing('--typography-color', color);
  }
};

const getTextAlign = ({ textAlign }: Pick<TypographyProps, 'textAlign'>) => {
  if (textAlign) {
    return { '--typography-text-align': textAlign };
  }
};

const getStyles = ({
  color,
  textAlign,
}: Pick<TypographyProps, 'color' | 'textAlign'>) => {
  return {
    ...getColor({ color }),
    ...getTextAlign({ textAlign }),
  };
};

export { getStyles };
