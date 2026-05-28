import styles from './style.module.scss';
import { ValueOf } from 'type-fest';
import { ColorToken } from '@/shared/styles';
import { getStyles } from './helpers';
import { dotProps } from './consts';

type DotProps = {
  color: ColorToken | ValueOf<typeof dotProps.colors> | string;
};

const Dot = (props: DotProps) => {
  const { color } = props;

  return <span className={styles.dot} style={{ ...getStyles({ color }) }} />;
};

export { Dot };
export type { DotProps };
