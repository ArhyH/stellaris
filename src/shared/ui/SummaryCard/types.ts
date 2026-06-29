import { ReactNode } from 'react';
import { ValueOf } from 'type-fest';
import { sizes } from '@/shared/styles';
import { summaryCardWrapperProps } from './consts';

type SummaryCardProps = {
  children: ReactNode;
  padding?: ValueOf<typeof sizes.sizes>;
  gap?: ValueOf<typeof sizes.sizes>;
};

type SummaryCardContentProps = {
  children: ReactNode;
};

type SummaryCardHeaderProps = {
  children: ReactNode;
};

type SummaryCardWrapperProps = {
  children: ReactNode;
  columns: ValueOf<typeof summaryCardWrapperProps.columns>;
};

export type {
  SummaryCardProps,
  SummaryCardContentProps,
  SummaryCardHeaderProps,
  SummaryCardWrapperProps,
};
