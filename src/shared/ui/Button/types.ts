import { ReactNode, Ref } from 'react';
import { ValueOf } from 'type-fest';
import { buttonProps } from './consts';
import { ColorToken, sizes } from '@/shared/styles';

type ButtonProps = {
  children: ReactNode;
  theme?: ValueOf<typeof buttonProps.themes>;
  width?: ValueOf<typeof sizes.sizes>;
  height?: ValueOf<typeof sizes.sizes>;
  size?: ValueOf<typeof sizes.sizes>;
  padding?: ValueOf<typeof sizes.sizes>;
  paddingVertical?: ValueOf<typeof sizes.sizes>;
  paddingHorizontal?: ValueOf<typeof sizes.sizes>;
  radius?: ValueOf<typeof sizes.radiuses>;
  justify?: ValueOf<typeof buttonProps.justifies>;
  bgColor?: ColorToken;
  activeBgColor?: ColorToken;
  onClick?: () => void;
  isActive?: boolean;
  isRotated?: boolean;
  isDisabled?: boolean;
  ref?: Ref<HTMLButtonElement>;
};

export type { ButtonProps };
