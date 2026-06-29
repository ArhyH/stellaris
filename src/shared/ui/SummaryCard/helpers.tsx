import { getCssVarOrNothing } from '@/shared/helpers/styles';
import { SummaryCardProps } from './types';

const getCardPadding = ({ padding }: Pick<SummaryCardProps, 'padding'>) => {
  if (padding) {
    return getCssVarOrNothing('--summary-card-padding', padding);
  }
};

const getCardGap = ({ gap }: Pick<SummaryCardProps, 'gap'>) => {
  if (gap) {
    return getCssVarOrNothing('--summary-card-gap', gap);
  }
};

const getStyles = ({
  padding,
  gap,
}: Pick<SummaryCardProps, 'padding' | 'gap'>) => {
  return {
    ...getCardPadding({ padding }),
    ...getCardGap({ gap }),
  };
};

export { getStyles };
