import { ReactNode, Ref } from 'react';
import { ValueOf } from 'type-fest';
import { buttonProps } from './consts';

type ButtonProps = {
  children: ReactNode;
  theme: ValueOf<typeof buttonProps.themes>;
  size: ValueOf<typeof buttonProps.sizes>;
  justify?: ValueOf<typeof buttonProps.justifies>;
  onClick?: () => void;
  isActive?: boolean;
  isRotated?: boolean;
  ref?: Ref<HTMLButtonElement>;
};

export type { ButtonProps };
