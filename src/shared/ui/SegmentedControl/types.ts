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
  type?: ValueOf<typeof segmentedControlProps.types>;
  isDisabled?: boolean;
};

type SegmentedButtonProps = {
  isSelected?: boolean;
  isDisabled?: boolean;
  children: ReactNode;
  onChange: () => void;
};

export type { Option, SegmentedControlProps, SegmentedButtonProps };
