import { ReactNode, Ref } from 'react';
import { ValueOf } from 'type-fest';
import { inputProps } from '.';

type InputProps = {
  placeholder: string;
  name: string;
  theme: ValueOf<typeof inputProps.themes>;
  type: ValueOf<typeof inputProps.types>;
  value?: string | number;
  leftIcon?: UtilityTypes.SvgContent;
  rightElement?: ReactNode;
  readOnly?: boolean;
  ref?: Ref<HTMLLabelElement>;
  label?: string;
  sign?: ReactNode;
  onChange?: (value: string) => void;
  onClick?: () => void;
  isDisabled?: boolean;
};

export type { InputProps };
