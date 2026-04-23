import styles from './style.module.scss';
import { ButtonIconProps } from './types';

const ButtonIcon = (props: ButtonIconProps) => {
  const { children } = props;

  return <span className={styles.button__icon}>{children}</span>;
};

export { ButtonIcon };
