import styles from './style.module.scss';
import { ButtonIconProps } from './types';

const ButtonIcon = (props: ButtonIconProps) => {
  const { children } = props;

  return <div className={styles.button__icon}>{children}</div>;
};

export { ButtonIcon };
