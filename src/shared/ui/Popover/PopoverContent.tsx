import { ReactNode } from 'react';

type PopoverContentProps = {
  children: ReactNode;
};

const PopoverContent = (props: PopoverContentProps) => {
  const { children } = props;

  return <>{children}</>;
};

export { PopoverContent };
export type { PopoverContentProps };
