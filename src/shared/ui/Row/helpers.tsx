import { getCssVarOrNothing } from '@/shared/helpers/styles';
import { RowProps } from './types';

const getGap = ({ gap }: Pick<RowProps, 'gap'>) => {
  if (gap) {
    return getCssVarOrNothing('--row-gap', gap);
  }
};

const getWidth = ({ width }: Pick<RowProps, 'width'>) => {
  if (width) {
    return getCssVarOrNothing('--row-width', width);
  }
};

const getColor = ({ color }: Pick<RowProps, 'color'>) => {
  if (color) {
    return getCssVarOrNothing('--row-color', color);
  }
};

const getPaddingVertical = ({
  paddingVertical,
}: Pick<RowProps, 'paddingVertical'>) => {
  if (paddingVertical) {
    return getCssVarOrNothing('--row-padding-vertical', paddingVertical);
  }
};

const getStyles = ({
  gap,
  paddingVertical,
  color,
  width,
}: Pick<RowProps, 'gap' | 'paddingVertical' | 'color' | 'width'>) => {
  return {
    ...getGap({ gap }),
    ...getPaddingVertical({ paddingVertical }),
    ...getColor({ color }),
    ...getWidth({ width }),
  };
};

export { getStyles };
