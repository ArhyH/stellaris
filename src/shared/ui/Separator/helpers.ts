import { getCssVarOrNothing } from '@/shared/helpers';
import { SeparatorProps } from './types';

const getHeight = ({ height }: Pick<SeparatorProps, 'height'>) => {
  if (height) {
    return getCssVarOrNothing('--separator-height', height);
  }
};

const getStyles = ({ height }: Pick<SeparatorProps, 'height'>) => {
  return {
    ...getHeight({ height }),
  };
};

export { getStyles };
