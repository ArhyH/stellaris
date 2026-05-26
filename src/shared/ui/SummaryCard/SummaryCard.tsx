import { ReactNode } from 'react';

import styles from './style.module.scss';
import { ValueOf } from 'type-fest';
import { sizes } from '@/shared/styles';
import { getStyles } from './helpers';

type SummaryCardProps = {
  children: ReactNode;
  padding?: ValueOf<typeof sizes.sizes>;
  gap?: ValueOf<typeof sizes.sizes>;
};

const SummaryCard = (props: SummaryCardProps) => {
  const { children, padding, gap } = props;

  return (
    <div
      className={styles['summary-card']}
      style={{ ...getStyles({ padding, gap }) }}
    >
      {children}
    </div>
  );
};

export { SummaryCard };
export type { SummaryCardProps };
