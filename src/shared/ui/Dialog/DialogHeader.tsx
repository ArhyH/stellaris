import { Row, rowProps } from '../Row';
import { DialogHeaderProps } from './types';

const DialogHeader = (props: DialogHeaderProps) => {
  const { children } = props;

  return <Row justify={rowProps.justifies.spaceBetween}>{children}</Row>;
};

export { DialogHeader };
