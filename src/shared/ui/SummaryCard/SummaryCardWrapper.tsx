import { ReactNode } from 'react';
import { ValueOf } from 'type-fest';
import classnames from 'classnames';

import styles from './style.module.scss';
import { summaryCardWrapperProps } from '.';

type SummaryCardWrapperProps = {
  children: ReactNode;
  columns: ValueOf<typeof summaryCardWrapperProps.columns>;
};

const SummaryCardWrapper = (props: SummaryCardWrapperProps) => {
  const { children, columns } = props;

  const componentClassNames = classnames(styles['summary-card__wrapper'], {
    [styles[`columns-${columns}`]]: columns,
  });

  return <div className={componentClassNames}>{children}</div>;
};

export { SummaryCardWrapper };
export type { SummaryCardWrapperProps };
