import classnames from 'classnames';
import styles from './style.module.scss';
import { SeparatorProps } from './types';

const Separator = (props: SeparatorProps) => {
  const { type } = props;

  const componentClassNames = classnames(styles.separator, {
    [styles[`separator--type--${type}`]]: type,
  });

  return <div className={componentClassNames} />;
};

export { Separator };
