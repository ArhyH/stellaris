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
    isStretch,
    bgColor,
    radius,
    size,
    width,
    height,
    grow,
    padding,
    paddingHorizontal,
    tag,
    gap,
  } = props;

  const componentClassNames = classnames(styles.box, {
    [styles['has-shadow']]: hasShadow,
    [styles['has-align']]: hasAlign,
    [styles['is-stretch']]: isStretch,
  });

  const ComponentTag: ElementType = tag || 'div';

  return (
    <ComponentTag
      className={componentClassNames}
      style={{
        ...getStyles({
          bgColor,
          radius,
          grow,
          padding,
          paddingHorizontal,
          gap,
          size,
          width,
          height,
        }),
      }}
    >
      {children}
    </ComponentTag>
  );
};

export { Box };
