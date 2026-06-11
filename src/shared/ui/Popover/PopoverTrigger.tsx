import { ReactNode, Ref } from 'react';
import styles from './style.module.scss';

type PopoverTriggerProps = {
  children: ReactNode;
  onClick?: () => void;
  triggerRef?: Ref<HTMLDivElement>;
};

const PopoverTrigger = (props: PopoverTriggerProps) => {
  const { children, onClick, triggerRef } = props;

  return (
    <div className={styles.popover__trigger} onClick={onClick} ref={triggerRef}>
      {children}
    </div>
  );
};

export { PopoverTrigger };
export type { PopoverTriggerProps };
