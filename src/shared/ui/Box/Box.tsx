import classnames from 'classnames';

import styles from './style.module.scss';
import { BoxProps } from './types';
import { getStyles } from './helpers';

const Box = (props: BoxProps) => {
  const { children, hasShadow, bgColor, radius, size } = props;

  const componentClassNames = classnames(styles.box, {
    [styles[`box--size--${size}`]]: size,
    [styles['has-shadow']]: hasShadow,
  });

  return (
    <div
      className={componentClassNames}
      style={{ ...getStyles({ bgColor, radius }) }}
    >
      {children}
    </div>
  );
};

export { Box };
