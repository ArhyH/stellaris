import styles from './style.module.scss';
import { getStyles } from './helpers';
import { SummaryCardProps } from './types';

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
