import { ReactNode } from 'react';
import { ValueOf } from 'type-fest';
import { segmentedControlProps } from './consts';

type Option = {
  value: string;
  label: ReactNode;
  disabled?: boolean;
};

type SegmentedControlProps = {
  options: Option[];
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  theme: ValueOf<typeof segmentedControlProps.themes>;
  size: ValueOf<typeof segmentedControlProps.sizes>;
};

export type { Option, SegmentedControlProps };
