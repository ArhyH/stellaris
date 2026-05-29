import { ReactNode } from 'react';
import styles from './style.module.scss';

type SummaryCardHeaderProps = {
  children: ReactNode;
};

const SummaryCardHeader = (props: SummaryCardHeaderProps) => {
  const { children } = props;

  return <div className={styles['summary-card__header']}>{children}</div>;
};

export { SummaryCardHeader };
export type { SummaryCardHeaderProps };
