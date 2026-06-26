import { ReactNode } from 'react';

type DialogContentProps = {
  children: ReactNode;
};

const DialogContent = (props: DialogContentProps) => {
  const { children } = props;

  return <>{children}</>;
};

DialogContent.displayName = 'DialogContent';

export { DialogContent };
export type { DialogContentProps };
