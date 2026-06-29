import { ReactNode } from 'react';
import { ValueOf } from 'type-fest';
import { boxProps } from './consts';
import { colors, sizes } from '@/shared/styles';

type BoxProps = {
  children: ReactNode;
  size?: ValueOf<typeof sizes.sizes>;
  width?: ValueOf<typeof sizes.sizes>;
  height?: ValueOf<typeof sizes.sizes>;
  bgColor?:
    | ValueOf<typeof colors.box>
    | ValueOf<typeof colors.category>
    | ValueOf<typeof colors.label>
    | ValueOf<typeof colors.gray>;
  radius?: ValueOf<typeof sizes.radiuses>;
  grow?: ValueOf<typeof boxProps.grow>;
  padding?: ValueOf<typeof sizes.sizes>;
  gap?: ValueOf<typeof sizes.sizes>;
  hasShadow?: boolean;
  hasAlign?: boolean;
  isStretch?: boolean;
  tag?: keyof typeof boxProps.tags;
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
