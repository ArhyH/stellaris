import { ReactNode } from 'react';
import { ValueOf } from 'type-fest';
import { boxProps } from './consts';

type BoxProps = {
  children: ReactNode;
  theme: ValueOf<typeof boxProps.themes>;
  size: ValueOf<typeof boxProps.sizes>;
  type?: ValueOf<typeof boxProps.types>;
};

type BoxHeaderProps = {
  children: ReactNode;
};

type BoxWrapperProps = {
  children: ReactNode;
};

export type { BoxProps, BoxHeaderProps, BoxWrapperProps };
