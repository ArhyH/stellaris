import { ReactNode } from 'react';
import styles from './style.module.scss';

type SummaryCardContentProps = {
  children: ReactNode;
};

const SummaryCardContent = (props: SummaryCardContentProps) => {
  const { children } = props;

  return <div className={styles['summary-card__content']}>{children}</div>;
};

export { SummaryCardContent };
export type { SummaryCardContentProps };
