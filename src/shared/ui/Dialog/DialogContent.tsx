import { ReactNode } from 'react';

type DialogContentProps = {
  children: ReactNode;
};

const DialogContent = (props: DialogContentProps) => {
  const { children } = props;

  return <>{children}</>;
};

export { DialogContent };
export type { DialogContentProps };
