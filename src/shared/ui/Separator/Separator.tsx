import classnames from 'classnames';
import styles from './style.module.scss';
import { SeparatorProps } from './types';
import { getStyles } from './helpers';

const Separator = (props: SeparatorProps) => {
  const { type, height } = props;

  const componentClassNames = classnames(styles.separator, {
    [styles[`separator--type--${type}`]]: type,
  });

  return (
    <div className={componentClassNames} style={{ ...getStyles({ height }) }} />
  );
};

export { Separator };
