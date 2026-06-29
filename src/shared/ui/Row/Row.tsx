import { ReactNode } from 'react';
import { ValueOf } from 'type-fest';
import classnames from 'classnames';

import { rowProps } from './consts';
import { ColorToken, sizes } from '@/shared/styles';
import { getStyles } from './helpers';
import styles from './style.module.scss';

type RowProps = {
  children: ReactNode;
  justify?: ValueOf<typeof rowProps.justifies>;
  gap?: ValueOf<typeof sizes.sizes>;
  paddingVertical?: ValueOf<typeof sizes.sizes>;
  width?: ValueOf<typeof sizes.sizes>;
  wrap?: boolean;
  color?: ColorToken;
};

const Row = (props: RowProps) => {
  const { children, justify, gap, paddingVertical, width, color, wrap } = props;

  const componentClassNames = classnames(styles.row, {
    [styles[`row--justify--${justify}`]]: justify,
    [styles[`flex-wrap`]]: wrap,
  });

  return (
    <div
      className={componentClassNames}
      style={{ ...getStyles({ gap, paddingVertical, width, color }) }}
    >
      {children}
    </div>
  );
};

export { Row };
export type { RowProps };
