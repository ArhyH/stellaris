import { ValueOf } from 'type-fest';
import { separatorProps } from '.';

type SeparatorProps = {
  type: ValueOf<typeof separatorProps.types>;
};

export type { SeparatorProps };
