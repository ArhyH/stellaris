import { ReactNode } from 'react';
import { ValueOf } from 'type-fest';
import { pageCellProps } from '.';
import { sizes } from '@/shared/styles';

type PageProps = {
  children: ReactNode;
};

type PageCellProps = {
  children: ReactNode;
  align?: ValueOf<typeof pageCellProps.align>;
  gap?: ValueOf<typeof sizes.sizes>;
};

export type { PageProps, PageCellProps };
