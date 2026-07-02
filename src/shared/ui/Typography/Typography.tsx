import classnames from 'classnames';
import styles from './style.module.scss';
import { getStyles } from './helpers';
import { ElementType } from 'react';
import { TypographyProps } from './types';

const Typography = (props: TypographyProps) => {
  const { children, type, tag, color, textAlign, textTransform } = props;

  const ComponentTag: ElementType = tag || 'span';

  const componentClassNames = classnames(styles.typography, {
    [styles[`${type}`]]: type,
  });

  return (
    <ComponentTag
      className={componentClassNames}
      style={{ ...getStyles({ color, textAlign, textTransform }) }}
    >
      {children}
    </ComponentTag>
  );
};

export { Typography };
