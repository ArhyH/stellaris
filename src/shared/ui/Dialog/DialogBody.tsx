import styles from './style.module.scss';
import { DialogBodyProps } from './types';

const DialogBody = (props: DialogBodyProps) => {
  const { children } = props;

  return <div className={styles.dialog__content}>{children}</div>;
};

export { DialogBody };
