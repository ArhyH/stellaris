import { ReactNode } from 'react';
import { LinkProps } from 'react-router-dom';
import { ValueOf } from 'type-fest';
import { routerLinkProps } from '.';

type RouterLinkProps = {
  children: ReactNode;
  theme?: ValueOf<typeof routerLinkProps.themes>;
} & LinkProps;

export type { RouterLinkProps };
