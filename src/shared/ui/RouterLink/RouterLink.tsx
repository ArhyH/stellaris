import { ReactNode } from 'react';
import styles from './style.module.scss';
import { Link, LinkProps } from 'react-router-dom';

type RouterLinkProps = {
  children: ReactNode;
} & LinkProps;

const RouterLink = (props: RouterLinkProps) => {
  const { children, ...restProps } = props;

  return (
    <Link className={styles['router-link']} {...restProps}>
      {children}
    </Link>
  );
};

export { RouterLink };
export type { RouterLinkProps };
