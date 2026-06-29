import styles from './style.module.scss';
import { getStyles } from './helpers';
import { LineProps } from './types';

const Line = (props: LineProps) => {
  const { color } = props;

  return <span className={styles.line} style={{ ...getStyles({ color }) }} />;
};

export { Line };
