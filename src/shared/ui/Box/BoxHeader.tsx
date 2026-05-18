import { getHeaderStyles } from './helpers';
import styles from './style.module.scss';
import { BoxHeaderProps } from './types';

const BoxHeader = (props: BoxHeaderProps) => {
  const { children, paddingBottom } = props;

  return (
    <div
      className={styles.box__header}
      style={{ ...getHeaderStyles({ paddingBottom }) }}
    >
      {children}
    </div>
  );
};

export { BoxHeader };
