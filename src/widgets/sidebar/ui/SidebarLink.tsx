import { ReactNode } from 'react';
import { NavLink, NavLinkProps } from 'react-router-dom';

type SidebarLinkProps = {
  children: ReactNode;
} & NavLinkProps;

const SidebarLink = (props: SidebarLinkProps) => {
  const { children, ...restProps } = props;
  return <NavLink {...restProps}>{children}</NavLink>;
};

export { SidebarLink };
