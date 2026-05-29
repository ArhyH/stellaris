import styles from './style.module.scss';
import { ValueOf } from 'type-fest';
import { ColorToken } from '@/shared/styles';
import { getStyles } from './helpers';
import { lineProps } from './consts';

type LineProps = {
  color: ColorToken | ValueOf<typeof lineProps.colors> | string;
};

const Line = (props: LineProps) => {
  const { color } = props;

  return <span className={styles.line} style={{ ...getStyles({ color }) }} />;
};

export { Line };
export type { LineProps };
