import styles from './style.module.scss';
import { PageProps } from './types';

const Page = (props: PageProps) => {
  const { children } = props;

  return <div className={styles.page}>{children}</div>;
};

export { Page };
