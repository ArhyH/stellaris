import { ValueOf } from 'type-fest';
import { ColorToken } from '@/shared/styles';
import { dotProps } from '.';

type DotProps = {
  color: ColorToken | ValueOf<typeof dotProps.colors> | string;
};

export type { DotProps };
