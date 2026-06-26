import { ReactNode } from 'react';
import { ValueOf } from 'type-fest';

import { sizes } from '@/shared/styles';
import styles from './style.module.scss';
import { pageCellProps } from './const';
import { getStyles } from './helpers';

type PageCellProps = {
  children: ReactNode;
  align?: ValueOf<typeof pageCellProps.align>;
  gap?: ValueOf<typeof sizes.sizes>;
};

const PageCell = (props: PageCellProps) => {
  const { gap, align, children } = props;

  return (
    <div className={styles.page__cell} style={{ ...getStyles({ gap, align }) }}>
      {children}
    </div>
  );
};

export { PageCell };
export type { PageCellProps };
