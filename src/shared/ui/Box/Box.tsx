import classnames from 'classnames';

import styles from './style.module.scss';
import { BoxProps } from './types';

const Box = (props: BoxProps) => {
  const { children, theme, type, size } = props;

  const componentClassNames = classnames(styles.box, {
    [styles[`box--theme--${theme}`]]: theme,
    [styles[`box--type--${type}`]]: type,
    [styles[`box--size--${size}`]]: size,
  });

  return <div className={componentClassNames}>{children}</div>;
};

export { Box };

// Todo: Переделать использование классов в темах на хелперы с цсс переменными
