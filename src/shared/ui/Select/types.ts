import { ValueOf } from 'type-fest';
import { selectProps } from '.';
import { ID } from '@/shared/types';

type OptionProps = {
  value: string;
  description: string;
};

type SelectProps = {
  options: { value: string; description: string }[];
  onChange: (value: string) => void;
  theme?: ValueOf<typeof selectProps.themes>;
  value: ID;
  hasAllOption?: boolean;
  name: string;
};

export type { OptionProps, SelectProps };
