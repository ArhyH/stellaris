import classnames from 'classnames';
import styles from './style.module.scss';
import { SummaryCardWrapperProps } from './types';

const SummaryCardWrapper = (props: SummaryCardWrapperProps) => {
  const { children, columns } = props;

  const componentClassNames = classnames(styles['summary-card__wrapper'], {
    [styles[`columns-${columns}`]]: columns,
  });

  return <div className={componentClassNames}>{children}</div>;
};

export { SummaryCardWrapper };
