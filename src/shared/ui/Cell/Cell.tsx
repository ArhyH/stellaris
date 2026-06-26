import { ReactNode } from 'react';
import { ValueOf } from 'type-fest';

import { sizes } from '@/shared/styles';
import { getStyles } from './helpers';
import styles from './style.module.scss';
import { cellProps } from './consts';

type CellProps = {
  children: ReactNode;
  gap?: ValueOf<typeof sizes.sizes>;
  grow?: ValueOf<typeof cellProps.grow>;
  width?: ValueOf<typeof sizes.sizes>;
};

const Cell = (props: CellProps) => {
  const { children, gap, grow, width } = props;

  return (
    <div className={styles.cell} style={{ ...getStyles({ gap, grow, width }) }}>
      {children}
    </div>
  );
};

export { Cell };
export type { CellProps };
