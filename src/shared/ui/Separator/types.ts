import { ValueOf } from 'type-fest';
import { separatorProps } from '.';
import { sizes } from '@/shared/styles';

type SeparatorProps = {
  type: ValueOf<typeof separatorProps.types>;
  height?: ValueOf<typeof sizes.sizes>;
};

export type { SeparatorProps };
