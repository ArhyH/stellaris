import { getCssVarOrNothing } from '@/shared/helpers/styles';
import { PageCellProps } from './PageCell';

const getGap = ({ gap }: Pick<PageCellProps, 'gap'>) => {
  if (gap) {
    return getCssVarOrNothing('--page-cell-gap', gap);
  }
};

const getAlign = ({ align }: Pick<PageCellProps, 'align'>) => {
  if (align) {
    return { '--page-cell-align': align };
  }
};

const getStyles = ({ gap, align }: Pick<PageCellProps, 'gap' | 'align'>) => {
  return {
    ...getGap({ gap }),
    ...getAlign({ align }),
  };
};

export { getStyles };
