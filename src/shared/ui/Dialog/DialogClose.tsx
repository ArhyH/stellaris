import { ReactElement, cloneElement } from 'react';
import { useDialogContext } from './helpers/context';

type DialogCloseProps = {
  children: ReactElement<{ onClick: () => void }>;
};

const DialogClose = (props: DialogCloseProps) => {
  const { children } = props;
  const { close } = useDialogContext();

  return cloneElement(children, {
    onClick: () => {
      close();
      children.props.onClick?.();
    },
  });
};

export { DialogClose };
export type { DialogCloseProps };
