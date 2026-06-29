import { CellProps } from './types';
import { getStyles } from './helpers';
import styles from './style.module.scss';

const Cell = (props: CellProps) => {
  const { children, gap, grow, width } = props;

  return (
    <div className={styles.cell} style={{ ...getStyles({ gap, grow, width }) }}>
      {children}
    </div>
  );
};

export { Cell };
