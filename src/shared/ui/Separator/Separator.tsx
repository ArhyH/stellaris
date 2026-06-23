import classnames from 'classnames';
import { ValueOf } from 'type-fest';
import styles from './style.module.scss';
import { separatorProps } from './consts';

type SeparatorProps = {
  type: ValueOf<typeof separatorProps.types>;
};

const Separator = (props: SeparatorProps) => {
  const { type } = props;

  const componentClassNames = classnames(styles.separator, {
    [styles[`separator--type--${type}`]]: type,
  });

  return <div className={componentClassNames} />;
};

export { Separator };
export type { SeparatorProps };
