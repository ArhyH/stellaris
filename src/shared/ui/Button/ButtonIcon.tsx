import { ReactNode } from 'react';
import styles from './style.module.scss';

type ButtonIconProps = {
  children: ReactNode;
};

const ButtonIcon = (props: ButtonIconProps) => {
  const { children } = props;

  return <div className={styles.button__icon}>{children}</div>;
};

export { ButtonIcon };
export type { ButtonIconProps };
