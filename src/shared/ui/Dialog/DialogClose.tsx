import { cloneElement } from 'react';
import { useDialogContext } from './helpers/context';
import { DialogCloseProps } from './types';

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
