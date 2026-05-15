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

const getGrow = ({ grow }: Pick<BoxProps, 'grow'>) => {
  if (grow) {
    return {
      '--box-grow': grow,
    };
  }
};

const getPadding = ({ padding }: Pick<BoxProps, 'padding'>) => {
  if (padding) {
    return getCssVarOrNothing('--box-padding', padding);
  }
};

const getStyles = ({
  bgColor,
  radius,
  grow,
  padding,
}: Pick<BoxProps, 'bgColor' | 'radius' | 'grow' | 'padding'>) => {
  return {
    ...getBGColor({ bgColor }),
    ...getRadius({ radius }),
    ...getGrow({ grow }),
    ...getPadding({ padding }),
  };
};

export { getStyles };
