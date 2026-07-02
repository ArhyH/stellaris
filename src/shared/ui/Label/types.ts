import { ReactNode } from 'react';
import { ValueOf } from 'type-fest';
import { labelProps } from '.';

type LabelProps = {
  children: ReactNode;
  bgColor: ValueOf<typeof labelProps.bgColors>;
};

export type { LabelProps };
