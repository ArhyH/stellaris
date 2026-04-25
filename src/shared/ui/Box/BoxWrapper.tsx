import classnames from 'classnames';
import styles from './style.module.scss';
import { BoxWrapperProps } from './types';

const BoxWrapper = (props: BoxWrapperProps) => {
  const { children, hasAlign } = props;

  const componentClassNames = classnames(styles.box__wrapper, {
    [styles['has-align']]: hasAlign,
  });

  return <div className={componentClassNames}>{children}</div>;
};

export { BoxWrapper };
