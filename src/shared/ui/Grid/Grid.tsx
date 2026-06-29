import styles from './style.module.scss';
import { getStyles } from './helpers';
import { GridProps } from './types';

const Grid = (props: GridProps) => {
  const { children, templateColumns, gap, width } = props;

  return (
    <div
      className={styles.grid}
      style={{ ...getStyles({ gap, width, templateColumns }) }}
    >
      {children}
    </div>
  );
};

export { Grid };
