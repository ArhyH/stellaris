import { ReactNode } from 'react';
import { ValueOf } from 'type-fest';
import { boxProps } from './consts';
import { colors, sizes } from '@/shared/styles';

type BoxProps = {
  children: ReactNode;
  size?: ValueOf<typeof boxProps.sizes>;
  bgColor?: ValueOf<typeof colors.box> | ValueOf<typeof colors.category>;
  radius?: ValueOf<typeof sizes.radiuses>;
  grow?: ValueOf<typeof boxProps.grow>;
  padding?: ValueOf<typeof sizes.sizes>;
  hasShadow?: boolean;
};

type BoxHeaderProps = {
  children: ReactNode;
  paddingBottom?: ValueOf<typeof sizes.sizes>;
};

type BoxWrapperProps = {
  children: ReactNode;
  hasAlign?: boolean;
};

export type { BoxProps, BoxHeaderProps, BoxWrapperProps };
