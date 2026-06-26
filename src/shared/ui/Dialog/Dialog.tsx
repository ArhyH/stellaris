import {
  Children,
  ReactElement,
  ReactNode,
  Ref,
  cloneElement,
  isValidElement,
  useState,
} from 'react';
import styles from './style.module.scss';
import { useDialogVisibility } from './helpers/useDialogVisibility';
import { DialogContent } from './DialogContent';
import { createPortal } from 'react-dom';
import { Overlay } from '../Overlay';
import { DialogContext } from './helpers/context';

type DialogProps = {
  children: ReactNode;
  onClose?: () => void;
  open?: boolean;
  onOpen?: (open: boolean) => void;
};

const Dialog = (props: DialogProps) => {
  const { children, onClose, open, onOpen } = props;

  const [internalOpen, setinternalOpen] = useState(false);

  const isControlled = open !== undefined;

  const isOpen = isControlled ? open : internalOpen;

  const setOpen = (value: boolean) => {
    if (!isControlled) {
      setinternalOpen(value);
    }

    onOpen?.(value);
  };

  const handleIsOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    onClose?.();
  };

  const { dialogRef, triggerRef } = useDialogVisibility(handleClose);

  const elements = Children.toArray(children).filter(isValidElement);
  const trigger = elements.find((element) => element.type !== DialogContent);
  const content = elements.find((element) => element.type === DialogContent);

  const triggerElement = trigger
    ? cloneElement(
        trigger as ReactElement<{
          onClick?: () => void;
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
              {content}
            </div>
          </Overlay>,
          document.body,
        )}
    </DialogContext.Provider>
  );
};

export { Dialog };
export type { DialogProps };
