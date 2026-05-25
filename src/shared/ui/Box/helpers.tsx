import { getCssVarOrNothing } from '@/shared/helpers/styles';
import { BoxHeaderProps, BoxProps } from './types';

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

const getBoxPadding = ({ padding }: Pick<BoxProps, 'padding'>) => {
  if (padding) {
    return getCssVarOrNothing('--box-padding', padding);
  }
};

const getHeaderPadding = ({
  paddingBottom,
}: Pick<BoxHeaderProps, 'paddingBottom'>) => {
  if (paddingBottom) {
    return getCssVarOrNothing('--box-header-padding', paddingBottom);
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
    ...getBoxPadding({ padding }),
  };
};

const getHeaderStyles = ({
  paddingBottom,
}: Pick<BoxHeaderProps, 'paddingBottom'>) => {
  return {
    ...getHeaderPadding({ paddingBottom }),
  };
};

export { getStyles, getHeaderStyles };
