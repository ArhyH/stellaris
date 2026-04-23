import { ReactNode } from 'react';
import { ValueOf } from 'type-fest';
import { buttonProps } from './consts';

type ButtonIconProps = {
  children: ReactNode;
};

type ButtonTextProps = {
  children: ReactNode;
};

type ButtonProps = {
  children: ReactNode;
  theme: ValueOf<typeof buttonProps.themes>;
  size: ValueOf<typeof buttonProps.sizes>;
  isActive?: boolean;
};

export type { ButtonIconProps, ButtonTextProps, ButtonProps };
