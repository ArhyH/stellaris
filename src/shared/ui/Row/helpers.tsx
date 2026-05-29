import { getCssVarOrNothing } from '@/shared/helpers/styles';
import { RowProps } from './Row';

const getGap = ({ gap }: Pick<RowProps, 'gap'>) => {
  if (gap) {
    return getCssVarOrNothing('--row-gap', gap);
  }
};

const getStyles = ({ gap }: Pick<RowProps, 'gap'>) => {
  return {
    ...getGap({ gap }),
  };
};

export { getStyles };
