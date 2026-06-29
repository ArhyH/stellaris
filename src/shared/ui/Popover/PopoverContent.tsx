import { PopoverContentProps } from './types';

const PopoverContent = ({ children, onClose }: PopoverContentProps) => {
  return typeof children === 'function' ? children({ onClose }) : children;
};

export { PopoverContent };
