import { getCssVarOrNothing } from '@/shared/helpers/styles';
import { CellProps } from './Cell';

const getGap = ({ gap }: Pick<CellProps, 'gap'>) => {
  if (gap) {
    return getCssVarOrNothing('--cell-gap', gap);
  }
};

const getWidth = ({ width }: Pick<CellProps, 'width'>) => {
  if (width) {
    return getCssVarOrNothing('--cell-width', width);
  }
};

const getGrow = ({ grow }: Pick<CellProps, 'grow'>) => {
  if (grow) {
    return { '--cell-grow': grow };
  }
};

const getStyles = ({
  gap,
  grow,
  width,
}: Pick<CellProps, 'gap' | 'grow' | 'width'>) => {
  return {
    ...getGap({ gap }),
    ...getGrow({ grow }),
    ...getWidth({ width }),
  };
};

export { getStyles };
