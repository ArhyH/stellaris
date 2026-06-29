import { ReactNode } from 'react';

type PopoverProps = {
  children: ReactNode;
  onClose?: () => void;
};

type PopoverContentProps = {
  children: ReactNode | ((props: { onClose?: () => void }) => ReactNode);
  onClose?: () => void;
};

export type { PopoverProps, PopoverContentProps };
