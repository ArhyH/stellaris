import { ReactNode } from 'react';
import { ValueOf } from 'type-fest';
import { labelProps } from './consts';
import styles from './style.module.scss';
import { getStyles } from './helpers';

type LabelProps = {
  children: ReactNode;
  bgColor: ValueOf<typeof labelProps.bgColors>;
};

const Label = (props: LabelProps) => {
  const { children, bgColor } = props;

  return (
    <span className={styles.label} style={{ ...getStyles({ bgColor }) }}>
      {children}
    </span>
  );
};

export { Label };
export type { LabelProps };
