import styles from './style.module.scss';
import { getStyles } from './helpers';
import { ProgressProps } from './types';

const Progress = (props: ProgressProps) => {
  const { color, value, min = 0, max = 100, percent } = props;

  return (
    <div
      className={styles.progress}
      role="progressbar"
      aria-valuenow={value || percent}
      aria-valuemin={min}
      aria-valuemax={max}
      style={{ ...getStyles({ color, value, min, max, percent }) }}
    >
      <div className={styles['progress__fill']} />
    </div>
  );
};

export { Progress };
