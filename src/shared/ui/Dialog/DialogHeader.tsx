import { ReactNode } from 'react';
import { Row, rowProps } from '../Row';

type DialogHeaderProps = {
  children: ReactNode;
};

const DialogHeader = (props: DialogHeaderProps) => {
  const { children } = props;

  return <Row justify={rowProps.justifies.spaceBetween}>{children}</Row>;
};

export { DialogHeader };
export type { DialogHeaderProps };
