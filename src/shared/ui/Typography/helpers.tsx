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

const getTextTransform = ({
  textTransform,
}: Pick<TypographyProps, 'textTransform'>) => {
  if (textTransform) {
    return { '--typography-text-transform': textTransform };
  }
};

const getStyles = ({
  color,
  textAlign,
  textTransform,
}: Pick<TypographyProps, 'color' | 'textAlign' | 'textTransform'>) => {
  return {
    ...getColor({ color }),
    ...getTextAlign({ textAlign }),
    ...getTextTransform({ textTransform }),
  };
};

export { getStyles };
