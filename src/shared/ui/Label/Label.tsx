import styles from './style.module.scss';
import { getStyles } from './helpers';
import { LabelProps } from './types';

const Label = (props: LabelProps) => {
  const { children, bgColor } = props;

  return (
    <span className={styles.label} style={{ ...getStyles({ bgColor }) }}>
      {children}
    </span>
  );
};

export { Label };
