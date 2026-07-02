import { ReactNode } from 'react';
import { ValueOf } from 'type-fest';
import { ColorToken } from '@/shared/styles';
import { typographyProps } from '.';

type TypographyProps = {
  children: ReactNode | string;
  type: ValueOf<typeof typographyProps.types>;
  color?: ColorToken;
  tag?: keyof typeof typographyProps.tags;
  textAlign?: ValueOf<typeof typographyProps.aligns>;
  textTransform?: ValueOf<typeof typographyProps.transforms>;
};

export type { TypographyProps };
