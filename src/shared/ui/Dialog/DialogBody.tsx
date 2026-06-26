import { ReactNode } from 'react';
import styles from './style.module.scss';

type DialogBodyProps = {
  children: ReactNode;
};

const DialogBody = (props: DialogBodyProps) => {
  const { children } = props;

  return <div className={styles.dialog__content}>{children}</div>;
};

export { DialogBody };
export type { DialogBodyProps };
