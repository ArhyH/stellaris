import { ReactNode } from 'react';
import styles from './style.module.scss';
import { ValueOf } from 'type-fest';
import { sizes } from '@/shared/styles';
import { getBoxWrapperStyles } from './helpers';

type BoxScrollWrapperProps = {
  children: ReactNode;
  maxHeight?: ValueOf<typeof sizes.sizes>;
};

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
export type { BoxScrollWrapperProps };
