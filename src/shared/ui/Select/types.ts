import { CategoryColor, sizes } from '@/shared/styles';
import { ID } from '@/shared/types';
import { ValueOf } from 'type-fest';

type OptionProps = {
  description: string;
  onClick: () => void;
  icon?: UtilityTypes.SvgContent;
  isSelected?: boolean;
  color?: CategoryColor;
};

type SelectProps = {
  options: SelectOption[];
  placeholderOption: SelectOption;
  onChange: (value: string) => void;
  value: ID;
  isDisabled?: boolean;
  isPlaceholderSelectable?: boolean;
  width?: ValueOf<typeof sizes.sizes>;
};

type SelectOption = {
  value: string;
  description: string;
  icon?: UtilityTypes.SvgContent;
  color?: CategoryColor;
};

export type { OptionProps, SelectProps, SelectOption };
