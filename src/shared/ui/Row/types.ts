import { ReactNode } from 'react';
import { ValueOf } from 'type-fest';
import { ColorToken, sizes } from '@/shared/styles';
import { rowProps } from '.';

type RowProps = {
  children: ReactNode;
  justify?: ValueOf<typeof rowProps.justifies>;
  align?: ValueOf<typeof rowProps.aligns>;
  gap?: ValueOf<typeof sizes.sizes>;
  paddingVertical?: ValueOf<typeof sizes.sizes>;
  width?: ValueOf<typeof sizes.sizes>;
  wrap?: boolean;
  color?: ColorToken;
};

export type { RowProps };
