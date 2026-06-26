import { useEffect, useRef } from 'react';

const useDialogVisibility = (onOutsideClick: () => void) => {
  const dialogRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLElement>(null);

  const handleClickOutside = (e: MouseEvent) => {
    const target = e.target as Node;

    const clickedInsideDialog = dialogRef.current?.contains(target);
    const clickedTrigger = triggerRef.current?.contains(target);

    if (!clickedInsideDialog && !clickedTrigger) {
      onOutsideClick();
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return { dialogRef, triggerRef };
};

export { useDialogVisibility };
