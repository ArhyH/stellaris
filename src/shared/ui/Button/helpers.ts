import { getCssVarOrNothing } from '@/shared/helpers/styles';
import { ButtonProps } from './types';

const getBGColor = ({ bgColor }: Pick<ButtonProps, 'bgColor'>) => {
  if (bgColor) {
    return getCssVarOrNothing('--button-background-color', bgColor);
  }
};

const getActiveBGColor = ({
  activeBgColor,
}: Pick<ButtonProps, 'activeBgColor'>) => {
  if (activeBgColor) {
    return getCssVarOrNothing(
      '--button-active-background-color',
      activeBgColor,
    );
  }
};

const getStyles = ({
  bgColor,
  activeBgColor,
}: Pick<ButtonProps, 'bgColor' | 'activeBgColor'>) => {
  return {
    ...getBGColor({ bgColor }),
    ...getActiveBGColor({ activeBgColor }),
  };
};

export { getStyles };
