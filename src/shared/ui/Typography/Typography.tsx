import classnames from 'classnames';
import styles from './style.module.scss';
import { typographyProps } from './consts';
import { ColorToken } from '@/shared/styles';
import { getStyles } from './helpers';
import { ElementType, ReactNode } from 'react';
import { ValueOf } from 'type-fest';

type TypographyProps = {
  children: ReactNode;
  type: ValueOf<typeof typographyProps.types>;
  color?: ColorToken;
  tag?: keyof typeof typographyProps.tags;
};

const Typography = (props: TypographyProps) => {
  const { children, type, tag, color } = props;

  const ComponentTag: ElementType = tag || 'span';

  const componentClassNames = classnames(styles.typography, {
    [styles[`${type}`]]: type,
  });

  console.log(color);

  return (
    <ComponentTag
      className={componentClassNames}
      style={{ ...getStyles({ color }) }}
    >
      {children}
    </ComponentTag>
  );
};

export { Typography };
export type { TypographyProps };
