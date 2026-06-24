import { useEffect, useRef, useState } from 'react';

const useDialogVisibility = () => {
  const [isOpen, setIsOpen] = useState(false);

  const dialogRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLElement>(null);

  const handleClickOutside = (e: MouseEvent) => {
    const target = e.target as Node;

    const clickedInsideDialog = dialogRef.current?.contains(target);
    const clickedTrigger = triggerRef.current?.contains(target);

    if (!clickedInsideDialog && !clickedTrigger) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return { isOpen, setIsOpen, dialogRef, triggerRef };
};

export { useDialogVisibility };
