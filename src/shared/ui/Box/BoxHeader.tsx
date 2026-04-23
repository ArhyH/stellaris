import styles from './style.module.scss';
import { BoxHeaderProps } from './types';

const BoxHeader = (props: BoxHeaderProps) => {
  const { children } = props;

  return <div className={styles.box__header}>{children}</div>;
};

export { BoxHeader };
