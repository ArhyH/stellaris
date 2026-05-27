import { ReactNode } from 'react';
import { ValueOf } from 'type-fest';
import classnames from 'classnames';

import { rowProps } from './consts';
import { sizes } from '@/shared/styles';
import { getStyles } from './helpers';
import styles from './style.module.scss';

type RowProps = {
  children: ReactNode;
  justify?: ValueOf<typeof rowProps.justifies>;
  gap?: ValueOf<typeof sizes.sizes>;
};

const Row = (props: RowProps) => {
  const { children, justify, gap } = props;

  const componentClassNames = classnames(styles.row, {
    [styles[`row--justify--${justify}`]]: justify,
  });

  return (
    <div className={componentClassNames} style={{ ...getStyles({ gap }) }}>
      {children}
    </div>
  );
};

export { Row };
export type { RowProps };
