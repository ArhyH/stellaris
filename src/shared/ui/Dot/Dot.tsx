import styles from './style.module.scss';
import { getStyles } from './helpers';
import { DotProps } from './types';

const Dot = (props: DotProps) => {
  const { color } = props;

  return <span className={styles.dot} style={{ ...getStyles({ color }) }} />;
};

export { Dot };
