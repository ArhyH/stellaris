import styles from './style.module.scss';
import { getStyles } from './helpers';
import { PageCellProps } from './types';

const PageCell = (props: PageCellProps) => {
  const { gap, align, children } = props;

  return (
    <div className={styles.page__cell} style={{ ...getStyles({ gap, align }) }}>
      {children}
    </div>
  );
};

export { PageCell };
