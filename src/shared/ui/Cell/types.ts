import { ReactNode } from 'react';
import { ValueOf } from 'type-fest';
import { sizes } from '@/shared/styles';
import { cellProps } from '.';

type CellProps = {
  children: ReactNode;
  gap?: ValueOf<typeof sizes.sizes>;
  grow?: ValueOf<typeof cellProps.grow>;
  width?: ValueOf<typeof sizes.sizes>;
};

export type { CellProps };
