import { ReactNode } from 'react';
import styles from './style.module.scss';

type ContainerProps = {
  children: ReactNode;
};

const Container = (props: ContainerProps) => {
  const { children } = props;

  return (
    <div className={styles.container}>
      <h1 className={styles.container__title}>test</h1>
      {children}
    </div>
  );
};

export { Container };
