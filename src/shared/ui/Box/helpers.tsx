import { getCssVarOrNothing } from '@/shared/helpers/styles';
import { BoxProps } from './types';

const getBGColor = ({ bgColor }: Pick<BoxProps, 'bgColor'>) => {
  if (bgColor) {
    return getCssVarOrNothing('--box-background-color', bgColor);
  }
};

const getRadius = ({ radius }: Pick<BoxProps, 'radius'>) => {
  if (radius) {
    return getCssVarOrNothing('--box-radius', radius);
  }
};

const getStyles = ({
  bgColor,
  radius,
}: Pick<BoxProps, 'bgColor' | 'radius'>) => {
  return {
    ...getBGColor({ bgColor }),
    ...getRadius({ radius }),
  };
};

export { getStyles };
