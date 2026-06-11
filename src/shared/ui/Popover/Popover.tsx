import {
  CSSProperties,
  Children,
  ReactElement,
  ReactNode,
  Ref,
  cloneElement,
  isValidElement,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';
import styles from './style.module.scss';
import { PopoverContent, PopoverContentProps } from './PopoverContent';
import { PopoverTrigger, PopoverTriggerProps } from './PopoverTrigger';

type PopoverProps = {
  children: ReactNode;
};

const Popover = (props: PopoverProps) => {
  const { children } = props;

  const [isOpen, setIsOpen] = useState(false);
  const [popoverStyle, setPopoverStyle] = useState<CSSProperties>({});

  const popoverRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const items = Children.toArray(children);

  const trigger = items.find(
    (item) => isValidElement(item) && item.type === PopoverTrigger,
  ) as ReactElement<PopoverTriggerProps> | undefined;

  const content = items.find(
    (item) => isValidElement(item) && item.type === PopoverContent,
  ) as ReactElement<PopoverContentProps> | undefined;

  const handleClickOutside = (e: MouseEvent) => {
    if (popoverRef.current && !popoverRef.current.contains(e.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  useLayoutEffect(() => {
    if (!isOpen || !triggerRef.current || !contentRef.current) return;

    const triggerRect = triggerRef.current.getBoundingClientRect();
    const contentRect = contentRef.current.getBoundingClientRect();

    const PADDING = 8;

    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    let top = triggerRect.bottom + 4;
    let left = triggerRect.left;

    if (left + contentRect.width + PADDING > viewportWidth) {
      left = viewportWidth - contentRect.width - PADDING;
    }

    if (left < PADDING) {
      left = PADDING;
    }

    if (top + contentRect.height + PADDING > viewportHeight) {
      top = triggerRect.top - contentRect.height - 4;
    }

    if (top < PADDING) {
      top = PADDING;
    }

    setPopoverStyle({
      position: 'absolute',
      top,
      left,
    });
  }, [isOpen]);

  return (
    <div className={styles.popover} ref={popoverRef}>
      {trigger &&
        cloneElement<{
          onClick?: () => void;
          triggerRef?: Ref<HTMLDivElement>;
        }>(trigger, {
          onClick: () => setIsOpen((prev) => !prev),
          triggerRef: triggerRef,
        })}

      {isOpen && content && (
        <div
          className={styles.popover__content}
          style={popoverStyle}
          ref={contentRef}
        >
          {content.props.children}
        </div>
      )}
    </div>
  );
};

export { Popover };
export type { PopoverProps };
