import styles from './style.module.scss';
import { SummaryCardContentProps } from './types';

const SummaryCardContent = (props: SummaryCardContentProps) => {
  const { children } = props;

  return <div className={styles['summary-card__content']}>{children}</div>;
};

export { SummaryCardContent };
