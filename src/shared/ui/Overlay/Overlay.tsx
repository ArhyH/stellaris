import styles from './style.module.scss';
import { OverlayProps } from './types';

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
