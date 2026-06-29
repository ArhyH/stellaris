import { getCssVarOrNothing } from '@/shared/helpers';
import { GridProps } from './Grid';

const getGap = ({ gap }: Pick<GridProps, 'gap'>) => {
  if (gap) {
    return getCssVarOrNothing('--grid-gap', gap);
  }
};

const getWidth = ({ width }: Pick<GridProps, 'width'>) => {
  if (width) {
    return getCssVarOrNothing('--grid-width', width);
  }
};

const getTemplateColumns = ({
  templateColumns,
}: Pick<GridProps, 'templateColumns'>) => {
  if (templateColumns) {
    return { '--grid-template-columns': templateColumns };
  }
};

const getStyles = ({
  gap,
  width,
  templateColumns,
}: Pick<GridProps, 'gap' | 'width' | 'templateColumns'>) => {
  return {
    ...getGap({ gap }),
    ...getWidth({ width }),
    ...getTemplateColumns({ templateColumns }),
  };
};

export { getStyles };
