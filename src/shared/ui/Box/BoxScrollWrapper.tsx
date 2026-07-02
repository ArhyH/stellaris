import styles from './style.module.scss';
import { getBoxWrapperStyles } from './helpers';
import { BoxScrollWrapperProps } from './types';

const BoxScrollWrapper = (props: BoxScrollWrapperProps) => {
  const { children, maxHeight } = props;

  return (
    <div
      className={styles['box__scroll-wrapper']}
      style={{ ...getBoxWrapperStyles({ maxHeight }) }}
    >
      {children}
    </div>
  );
};

export { BoxScrollWrapper };
