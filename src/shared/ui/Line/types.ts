import { ColorToken } from '@/shared/styles';
import { ValueOf } from 'type-fest';
import { lineProps } from '.';

type LineProps = {
  color: ColorToken | ValueOf<typeof lineProps.colors> | string;
};

export { LineProps };
