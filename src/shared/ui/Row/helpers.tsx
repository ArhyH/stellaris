import { getCssVarOrNothing } from '@/shared/helpers/styles';
import { RowProps } from './Row';

const getGap = ({ gap }: Pick<RowProps, 'gap'>) => {
  if (gap) {
    return getCssVarOrNothing('--row-gap', gap);
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
}: Pick<RowProps, 'gap' | 'paddingVertical'>) => {
  return {
    ...getGap({ gap }),
    ...getPaddingVertical({ paddingVertical }),
  };
};

export { getStyles };
