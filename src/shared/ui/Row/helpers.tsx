import { getCssVarOrNothing } from '@/shared/helpers/styles';
import { RowProps } from './Row';

const getGap = ({ gap }: Pick<RowProps, 'gap'>) => {
  if (gap) {
    return getCssVarOrNothing('--row-gap', gap);
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
}: Pick<RowProps, 'gap' | 'paddingVertical' | 'color'>) => {
  return {
    ...getGap({ gap }),
    ...getPaddingVertical({ paddingVertical }),
    ...getColor({ color }),
  };
};

export { getStyles };
