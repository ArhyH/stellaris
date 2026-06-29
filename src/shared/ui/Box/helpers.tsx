import { getCssVarOrNothing } from '@/shared/helpers/styles';
import { BoxHeaderProps, BoxProps } from './types';
import { BoxScrollWrapperProps } from './BoxScrollWrapper';

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

const getGap = ({ gap }: Pick<BoxProps, 'gap'>) => {
  if (gap) {
    return getCssVarOrNothing('--box-gap', gap);
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

const getBoxSize = ({ size }: Pick<BoxProps, 'size'>) => {
  if (size) {
    return getCssVarOrNothing('--box-size', size);
  }
};

const getBoxWidth = ({ size, width }: Pick<BoxProps, 'size' | 'width'>) => {
  if (!size && width) {
    return getCssVarOrNothing('--box-width', width);
  }
};

const getBoxHeight = ({ size, height }: Pick<BoxProps, 'size' | 'height'>) => {
  if (!size && height) {
    return getCssVarOrNothing('--box-height', height);
  }
};

const getHeaderPadding = ({
  paddingBottom,
}: Pick<BoxHeaderProps, 'paddingBottom'>) => {
  if (paddingBottom) {
    return getCssVarOrNothing('--box-header-padding', paddingBottom);
  }
};

const getWrapperMaxHeight = ({
  maxHeight,
}: Pick<BoxScrollWrapperProps, 'maxHeight'>) => {
  if (maxHeight) {
    return getCssVarOrNothing('--box-scroll-wrapper-max-height', maxHeight);
  }
};

const getStyles = ({
  bgColor,
  radius,
  grow,
  padding,
  gap,
  size,
  width,
  height,
}: Pick<
  BoxProps,
  | 'bgColor'
  | 'radius'
  | 'grow'
  | 'padding'
  | 'gap'
  | 'size'
  | 'width'
  | 'height'
>) => {
  return {
    ...getBGColor({ bgColor }),
    ...getRadius({ radius }),
    ...getGrow({ grow }),
    ...getGap({ gap }),
    ...getBoxPadding({ padding }),
    ...getBoxSize({ size }),
    ...getBoxWidth({ size, width }),
    ...getBoxHeight({ size, height }),
  };
};

const getHeaderStyles = ({
  paddingBottom,
}: Pick<BoxHeaderProps, 'paddingBottom'>) => {
  return {
    ...getHeaderPadding({ paddingBottom }),
  };
};

const getBoxWrapperStyles = ({
  maxHeight,
}: Pick<BoxScrollWrapperProps, 'maxHeight'>) => {
  return {
    ...getWrapperMaxHeight({ maxHeight }),
  };
};

export { getStyles, getHeaderStyles, getBoxWrapperStyles };
