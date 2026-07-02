import { DialogContentProps } from './types';

const DialogContent = (props: DialogContentProps) => {
  const { children } = props;

  return <>{children}</>;
};

DialogContent.displayName = 'DialogContent';

export { DialogContent };
