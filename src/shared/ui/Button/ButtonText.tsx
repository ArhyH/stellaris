import styles from './style.module.scss';
import { ButtonTextProps } from './types';

const ButtonText = (props: ButtonTextProps) => {
  const { children } = props;

  return <span className={styles.button__text}>{children}</span>;
};

export { ButtonText };
