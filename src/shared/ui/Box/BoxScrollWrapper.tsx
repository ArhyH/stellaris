import { ReactNode } from 'react';
import styles from './style.module.scss';

type BoxScrollWrapperProps = {
  children: ReactNode;
};

const BoxScrollWrapper = (props: BoxScrollWrapperProps) => {
  const { children } = props;

  return <div className={styles['box__scroll-wrapper']}>{children}</div>;
};

export { BoxScrollWrapper };
export type { BoxScrollWrapperProps };
