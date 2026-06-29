import { ReactNode } from 'react';

type PopoverContentProps = {
  children: ReactNode | ((props: { onClose?: () => void }) => ReactNode);
  onClose?: () => void;
};

const PopoverContent = ({ children, onClose }: PopoverContentProps) => {
  return typeof children === 'function' ? children({ onClose }) : children;
};

export { PopoverContent };
export type { PopoverContentProps };
