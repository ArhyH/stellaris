import { ReactNode, Ref } from 'react';
import { ValueOf } from 'type-fest';
import { buttonProps } from './consts';
import { ColorToken } from '@/shared/styles';

type ButtonProps = {
  children: ReactNode;
  theme?: ValueOf<typeof buttonProps.themes>;
  size: ValueOf<typeof buttonProps.sizes>;
  radius?: ValueOf<typeof buttonProps.radiuses>;
  justify?: ValueOf<typeof buttonProps.justifies>;
  bgColor?: ColorToken;
  onClick?: () => void;
  isActive?: boolean;
  isRotated?: boolean;
  isDisabled?: boolean;
  ref?: Ref<HTMLButtonElement>;
};

export type { ButtonProps };
