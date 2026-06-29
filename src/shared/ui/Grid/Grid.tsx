import { ReactNode } from 'react';
import { ValueOf } from 'type-fest';

import styles from './style.module.scss';
import { gridProps } from './consts';
import { sizes } from '@/shared/styles';
import { getStyles } from './helpers';

type GridProps = {
  children: ReactNode;
  gap?: ValueOf<typeof sizes.sizes>;
  width?: ValueOf<typeof sizes.sizes>;
  templateColumns?: ValueOf<typeof gridProps.columns>;
};

const Grid = (props: GridProps) => {
  const { children, templateColumns, gap, width } = props;

  return (
    <div
      className={styles.grid}
      style={{ ...getStyles({ gap, width, templateColumns }) }}
    >
      {children}
    </div>
  );
};

export { Grid };
export type { GridProps };
