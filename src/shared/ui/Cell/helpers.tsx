import { getCssVarOrNothing } from '@/shared/helpers/styles';
import { CellProps } from './Cell';

const getGap = ({ gap }: Pick<CellProps, 'gap'>) => {
  if (gap) {
    return getCssVarOrNothing('--cell-gap', gap);
  }
};

const getGrow = ({ grow }: Pick<CellProps, 'grow'>) => {
  if (grow) {
    return { '--cell-grow': grow };
  }
};

const getStyles = ({ gap, grow }: Pick<CellProps, 'gap' | 'grow'>) => {
  return {
    ...getGap({ gap }),
    ...getGrow({ grow }),
  };
};

export { getStyles };
