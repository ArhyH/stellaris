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
  textAlign?: ValueOf<typeof typographyProps.aligns>;
  textTransform?: ValueOf<typeof typographyProps.transforms>;
};

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
export type { TypographyProps };
