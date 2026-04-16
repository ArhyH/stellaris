import { ReactNode } from 'react';
import classnames from 'classnames';

import { NavLink, NavLinkProps } from 'react-router-dom';
import styles from './style.module.scss';

type SidebarLinkProps = {
  children: ReactNode;
} & NavLinkProps;

const SidebarLink = (props: SidebarLinkProps) => {
  const { children, ...restProps } = props;

  return (
    <NavLink
      className={({ isActive }) =>
        classnames(styles.sidebar__link, {
          [styles['is-active']]: isActive,
        })
      }
      {...restProps}
    >
      {children}
    </NavLink>
  );
};

export { SidebarLink };
