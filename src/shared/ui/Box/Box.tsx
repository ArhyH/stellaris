import classnames from 'classnames';

import styles from './style.module.scss';
import { BoxProps } from './types';
import { getStyles } from './helpers';

const Box = (props: BoxProps) => {
  const { children, hasShadow, bgColor, radius, size, grow, padding } = props;

  const componentClassNames = classnames(styles.box, {
    [styles[`box--size--${size}`]]: size,
    [styles['has-shadow']]: hasShadow,
  });

  return (
    <div
      className={componentClassNames}
      style={{ ...getStyles({ bgColor, radius, grow, padding }) }}
    >
      {children}
    </div>
  );
};

export { Box };
