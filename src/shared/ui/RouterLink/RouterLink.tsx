import { ReactNode } from 'react';
import { Link, LinkProps } from 'react-router-dom';
import { ValueOf } from 'type-fest';
import classnames from 'classnames';

import styles from './style.module.scss';
import { routerLinkProps } from './consts';

type RouterLinkProps = {
  children: ReactNode;
  theme?: ValueOf<typeof routerLinkProps.themes>;
} & LinkProps;

const RouterLink = (props: RouterLinkProps) => {
  const { children, theme, ...restProps } = props;

  const componentClassNames = classnames(styles['router-link'], {
    [styles[`router-link--theme--${theme}`]]: theme,
  });

  return (
    <Link className={componentClassNames} {...restProps}>
      {children}
    </Link>
  );
};

export { RouterLink };
export type { RouterLinkProps };
