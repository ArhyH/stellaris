import { getCssVarOrNothing } from '@/shared/helpers/styles';
import { ButtonProps } from './types';

const getBGColor = ({ bgColor }: Pick<ButtonProps, 'bgColor'>) => {
  if (bgColor) {
    return getCssVarOrNothing('--button-background-color', bgColor);
  }
};

const getStyles = ({ bgColor }: Pick<ButtonProps, 'bgColor'>) => {
  return {
    ...getBGColor({ bgColor }),
  };
};

export { getStyles };
