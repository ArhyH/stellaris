import {
  Children,
  ReactElement,
  ReactNode,
  Ref,
  cloneElement,
  isValidElement,
} from 'react';
import styles from './style.module.scss';
import { PopoverContent, PopoverContentProps } from './PopoverContent';
import { usePopover } from './helpers/usePopover';

type PopoverProps = {
  children: ReactNode;
};

const Popover = (props: PopoverProps) => {
  const { children } = props;

  const {
    isOpen,
    setIsOpen,
    popoverRef,
    triggerRef,
    contentRef,
    popoverStyle,
  } = usePopover();

  const items = Children.toArray(children).filter(isValidElement);

  const trigger = items.find((item) => item.type !== PopoverContent);
  const content = items.find((item) => item.type === PopoverContent) as
    | ReactElement<PopoverContentProps>
    | undefined;

  const handleIsOpen = () => {
    setIsOpen((prev) => !prev);
  };

  const triggerElement = trigger
    ? cloneElement(
        trigger as ReactElement<{
          onClick: () => void;
          ref?: Ref<HTMLElement>;
        }>,
        { onClick: handleIsOpen, ref: triggerRef },
      )
    : null;

  return (
    <div className={styles.popover} ref={popoverRef}>
      {triggerElement}

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
