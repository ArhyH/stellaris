import { ReactNode } from 'react';
import styles from './style.module.scss';

type PageProps = {
  children: ReactNode;
};

const Page = (props: PageProps) => {
  const { children } = props;

  return <div className={styles.page}>{children}</div>;
};

export { Page };
export type { PageProps };
