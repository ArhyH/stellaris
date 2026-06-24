import {
  Children,
  ReactElement,
  ReactNode,
  Ref,
  cloneElement,
  isValidElement,
} from 'react';
import styles from './style.module.scss';
import { useDialogVisibility } from './helpers/useDialogVisibility';
import { DialogContentProps } from './DialogContent';
import { createPortal } from 'react-dom';
import { Overlay } from '../Overlay';
import { DialogContext } from './helpers/context';

type DialogProps = {
  children: ReactNode;
};

const Dialog = (props: DialogProps) => {
  const { children } = props;

  const { isOpen, setIsOpen, dialogRef, triggerRef } = useDialogVisibility();

  const [trigger, content] = Children.toArray(children).filter(isValidElement);

  const handleIsOpen = () => {
    setIsOpen((prev) => !prev);
  };

  const triggerElement = trigger
    ? cloneElement(
        trigger as ReactElement<{
          onClick: () => void;
          ref?: Ref<HTMLElement>;
        }>,
        {
          onClick: handleIsOpen,
          ref: triggerRef,
        },
      )
    : null;

  console.log(isOpen);

  return (
    <DialogContext.Provider value={{ close: () => setIsOpen(false) }}>
      {triggerElement}

      {isOpen &&
        createPortal(
          <Overlay>
            <div className={styles.dialog} ref={dialogRef}>
              {content &&
                (content as ReactElement<DialogContentProps>).props.children}
            </div>
          </Overlay>,
          document.body,
        )}
    </DialogContext.Provider>
  );
};

export { Dialog };
export type { DialogProps };
