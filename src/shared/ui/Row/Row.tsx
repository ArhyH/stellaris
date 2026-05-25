import { ReactNode } from 'react';
import { ValueOf } from 'type-fest';
import classnames from 'classnames';

import styles from './style.module.scss';
import { rowProps } from './consts';

type RowProps = {
  children: ReactNode;
  justify?: ValueOf<typeof rowProps.justifies>;
};

const Row = (props: RowProps) => {
  const { children, justify } = props;

  const componentClassNames = classnames(styles.row, {
    [styles[`row--justify--${justify}`]]: justify,
  });

  return <div className={componentClassNames}>{children}</div>;
};

export { Row };
export type { RowProps };
