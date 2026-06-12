import { usePopoverPosition } from './usePopoverPosition';
import { usePopoverVisibility } from './usePopoverVisibility';

const usePopover = () => {
  const { isOpen, setIsOpen, popoverRef } = usePopoverVisibility();
  const { popoverStyle, triggerRef, contentRef } = usePopoverPosition(
    isOpen,
    popoverRef,
  );

  return {
    isOpen,
    setIsOpen,
    popoverRef,
    triggerRef,
    contentRef,
    popoverStyle,
  };
};

export { usePopover };
