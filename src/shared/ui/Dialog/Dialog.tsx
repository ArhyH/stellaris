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
  onClose?: () => void;
};

const Dialog = (props: DialogProps) => {
  const { children, onClose } = props;

  const handleIsOpen = () => {
    setIsOpen((prev) => !prev);
  };

  const handleClose = () => {
    setIsOpen(false);
    onClose?.();
  };

  const { isOpen, setIsOpen, dialogRef, triggerRef } =
    useDialogVisibility(handleClose);

  const [trigger, content] = Children.toArray(children).filter(isValidElement);

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

  return (
    <DialogContext.Provider value={{ close: handleClose }}>
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
