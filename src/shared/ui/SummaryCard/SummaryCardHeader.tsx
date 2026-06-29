import styles from './style.module.scss';
import { SummaryCardHeaderProps } from './types';

const SummaryCardHeader = (props: SummaryCardHeaderProps) => {
  const { children } = props;

  return <div className={styles['summary-card__header']}>{children}</div>;
};

export { SummaryCardHeader };
