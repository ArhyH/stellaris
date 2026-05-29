import classnames from 'classnames';
import { ElementType } from 'react';
import styles from './style.module.scss';
import { BoxProps } from './types';
import { getStyles } from './helpers';

const Box = (props: BoxProps) => {
  const {
    children,
    hasShadow,
    hasAlign,
    bgColor,
    radius,
    size,
    grow,
    padding,
    tag,
    gap,
  } = props;

  const componentClassNames = classnames(styles.box, {
    [styles[`box--size--${size}`]]: size,
    [styles['has-shadow']]: hasShadow,
    [styles['has-align']]: hasAlign,
  });

  const ComponentTag: ElementType = tag || 'div';

  return (
    <ComponentTag
      className={componentClassNames}
      style={{ ...getStyles({ bgColor, radius, grow, padding, gap }) }}
    >
      {children}
    </ComponentTag>
  );
};

export { Box };
