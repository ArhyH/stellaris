import { getCssVarOrNothing } from '@/shared/helpers/styles';
import { ProgressProps } from './types';

const getFillColor = ({ color }: Pick<ProgressProps, 'color'>) => {
  if (color) {
    return getCssVarOrNothing('--progress-fill-color', color);
  }
};

const getFillWidth = ({
  value,
  min,
  max,
  percent,
}: Pick<ProgressProps, 'value' | 'min' | 'max' | 'percent'>) => {
  if (value) {
    const percentage = ((value - min) / (max - min)) * 100;

    if (percentage) {
      return {
        '--progress-fill-width': percentage > 100 ? `100%` : `${percentage}%`,
      };
    }
  }

  if (percent) {
    return {
      '--progress-fill-width': `${percent}%`,
    };
  }
};

const getStyles = ({
  color,
  value,
  min,
  max,
  percent,
}: Pick<ProgressProps, 'color' | 'value' | 'min' | 'max' | 'percent'>) => {
  return {
    ...getFillColor({ color }),
    ...getFillWidth({ value, min, max, percent }),
  };
};

export { getStyles };
