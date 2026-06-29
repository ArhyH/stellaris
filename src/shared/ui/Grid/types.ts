import { ReactNode } from 'react';
import { ValueOf } from 'type-fest';
import { sizes } from '@/shared/styles';
import { gridProps } from '.';

type GridProps = {
  children: ReactNode;
  gap?: ValueOf<typeof sizes.sizes>;
  width?: ValueOf<typeof sizes.sizes>;
  templateColumns?: ValueOf<typeof gridProps.columns>;
};

export type { GridProps };
