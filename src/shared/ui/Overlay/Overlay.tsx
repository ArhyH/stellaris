import { ReactNode } from 'react';
import styles from './style.module.scss';

type OverlayProps = {
  children: ReactNode;
};

const Overlay = (props: OverlayProps) => {
  const { children } = props;

  return (
    <div className={styles.overlay}>
      <div className={styles.overlay__background} />
      <div className={styles.overlay__content}>{children}</div>
    </div>
  );
};

export { Overlay };
export type { OverlayProps };
