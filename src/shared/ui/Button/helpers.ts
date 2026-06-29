import { getCssVarOrNothing } from '@/shared/helpers/styles';
import { ButtonProps } from './types';

const getBGColor = ({ bgColor }: Pick<ButtonProps, 'bgColor'>) => {
  if (bgColor) {
    return getCssVarOrNothing('--button-background-color', bgColor);
  }
};

const getSize = ({ size }: Pick<ButtonProps, 'size'>) => {
  if (size) {
    return getCssVarOrNothing('--button-size', size);
  }
};

const getWidth = ({ size, width }: Pick<ButtonProps, 'width' | 'size'>) => {
  if (!size && width) {
    return getCssVarOrNothing('--button-width', width);
  }
};

const getHeight = ({ size, height }: Pick<ButtonProps, 'height' | 'size'>) => {
  if (!size && height) {
    return getCssVarOrNothing('--button-height', height);
  }
};

const getPadding = ({ padding }: Pick<ButtonProps, 'padding'>) => {
  if (padding) {
    return {
      ...getCssVarOrNothing('--button-padding-vertical', padding),
      ...getCssVarOrNothing('--button-padding-horizontal', padding),
    };
  }
};

const getPaddingVertical = ({
  paddingVertical,
}: Pick<ButtonProps, 'paddingVertical'>) => {
  if (paddingVertical) {
    return getCssVarOrNothing('--button-padding-vertical', paddingVertical);
  }
};

const getPaddingHorizontal = ({
  paddingHorizontal,
}: Pick<ButtonProps, 'paddingHorizontal'>) => {
  if (paddingHorizontal) {
    return getCssVarOrNothing('--button-padding-horizontal', paddingHorizontal);
  }
};

const getRadius = ({ radius }: Pick<ButtonProps, 'radius'>) => {
  if (radius) {
    return getCssVarOrNothing('--button-radius', radius);
  }
};

const getActiveBGColor = ({
  activeBgColor,
}: Pick<ButtonProps, 'activeBgColor'>) => {
  if (activeBgColor) {
    return getCssVarOrNothing(
      '--button-active-background-color',
      activeBgColor,
    );
  }
};

const getStyles = ({
  bgColor,
  activeBgColor,
  height,
  width,
  size,
  padding,
  paddingVertical,
  paddingHorizontal,
  radius,
}: Pick<
  ButtonProps,
  | 'bgColor'
  | 'activeBgColor'
  | 'height'
  | 'width'
  | 'size'
  | 'padding'
  | 'paddingVertical'
  | 'paddingHorizontal'
  | 'radius'
>) => {
  return {
    ...getBGColor({ bgColor }),
    ...getActiveBGColor({ activeBgColor }),
    ...getSize({ size }),
    ...getWidth({ size, width }),
    ...getHeight({ size, height }),
    ...getPadding({ padding }),
    ...getPaddingVertical({ paddingVertical }),
    ...getPaddingHorizontal({ paddingHorizontal }),
    ...getRadius({ radius }),
  };
};

export { getStyles };
