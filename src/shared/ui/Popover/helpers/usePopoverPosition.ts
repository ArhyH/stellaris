import {
  CSSProperties,
  RefObject,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';

const usePopoverPosition = (
  isOpen: boolean,
  popoverRef: RefObject<HTMLDivElement | null>,
) => {
  const triggerRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const [popoverStyle, setPopoverStyle] = useState<CSSProperties>({});

  useLayoutEffect(() => {
    if (
      !isOpen ||
      !triggerRef.current ||
      !contentRef.current ||
      !popoverRef.current
    ) {
      return;
    }

    const triggerRect = triggerRef.current.getBoundingClientRect();
    const contentRect = contentRef.current.getBoundingClientRect();
    const parentRect = popoverRef.current.getBoundingClientRect();

    const PADDING = 8;

    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    let top = triggerRect.bottom - parentRect.top + 4;
    let left = triggerRect.left - parentRect.left;

    const absLeft = triggerRect.left;
    const absTop = triggerRect.bottom + 4;

    if (absLeft + contentRect.width + PADDING > viewportWidth) {
      left = viewportWidth - contentRect.width - PADDING - parentRect.left;
    }
    if (absLeft < PADDING) {
      left = PADDING - parentRect.left;
    }
    if (absTop + contentRect.height + PADDING > viewportHeight) {
      top = triggerRect.top - parentRect.top - contentRect.height - 4;
    }
    if (absTop < PADDING) {
      top = PADDING - parentRect.top;
    }

    setPopoverStyle({
      position: 'absolute',
      top,
      left,
    });
  }, [isOpen]);

  return { popoverStyle, triggerRef, contentRef };
};

export { usePopoverPosition };
