import styles from './style.module.scss';
import { BoxWrapperProps } from './types';

const BoxWrapper = (props: BoxWrapperProps) => {
  const { children } = props;

  return <div className={styles.box__wrapper}>{children}</div>;
};

export { BoxWrapper };
