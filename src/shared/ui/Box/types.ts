import { ReactNode } from 'react';
import { ValueOf } from 'type-fest';
import { boxProps } from './consts';
import { colors, sizes } from '@/shared/styles';

type BoxProps = {
  children: ReactNode;
  size: ValueOf<typeof boxProps.sizes>;
  bgColor?: ValueOf<typeof colors.box>;
  radius?: ValueOf<typeof sizes.radiuses>;
  grow?: ValueOf<typeof boxProps.grow>;
  hasShadow?: boolean;
};

type BoxHeaderProps = {
  children: ReactNode;
};

type BoxWrapperProps = {
  children: ReactNode;
  hasAlign?: boolean;
};

export type { BoxProps, BoxHeaderProps, BoxWrapperProps };
