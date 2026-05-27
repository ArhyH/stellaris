import { ReactNode } from 'react';
import { ValueOf } from 'type-fest';
import classnames from 'classnames';

import styles from './style.module.scss';
import { gridProps } from './consts';

type GridProps = {
  children: ReactNode;
  columns?: ValueOf<typeof gridProps.columns>;
};

const Grid = (props: GridProps) => {
  const { children, columns } = props;

  const componentClassNames = classnames(styles.grid, {
    [styles[`_col-${columns}`]]: columns,
  });

  return <div className={componentClassNames}>{children}</div>;
};

export { Grid };
export type { GridProps };
