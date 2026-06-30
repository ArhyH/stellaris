import { ValueOf } from 'type-fest';
import { selectProps } from '.';
import { ID } from '@/shared/types';

type OptionProps = {
  value: string;
  description: string;
};

type SelectProps = {
  options: SelectOption[];
  onChange: (value: string) => void;
  theme?: ValueOf<typeof selectProps.themes>;
  value: ID;
  hasAllOption?: boolean;
  isDisabled?: boolean;
  name: string;
};

type SelectOption = OptionProps;

export type { OptionProps, SelectProps, SelectOption };
