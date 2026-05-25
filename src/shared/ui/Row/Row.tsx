import { ReactNode } from 'react';
import styles from './style.module.scss';

type RowProps = {
  children: ReactNode;
};

const Row = (props: RowProps) => {
  const { children } = props;

  return <div className={styles.row}>{children}</div>;
};

export { Row };
export type { RowProps };
