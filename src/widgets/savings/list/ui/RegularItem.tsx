import { SavingItem as SavingItemType } from '../model/types';
import { Row, rowProps } from '@/shared/ui/Row';
import { Buttons, Goal, Info, Name } from './parts';
import styles from './style.module.scss';
import { ID } from '@/shared/types';

type RegularItemProps = {
  saving: SavingItemType;
  onEdit: (id: ID) => void;
  onDelete: (id: ID) => void;
};

const RegularItem = (props: RegularItemProps) => {
  const { saving, onEdit, onDelete } = props;

  const { name, icon, amount, iconColor, id } = saving;

  return (
    <li className={styles['saving-item']}>
      <Row justify={rowProps.justifies.spaceBetween}>
        <Name icon={icon} iconColor={iconColor} name={name} />

        <Goal amount={amount} />
      </Row>

      <Row justify={rowProps.justifies.spaceBetween}>
        <Info amount={amount} />

        <Buttons
          onOperationAdd={() => null}
          onEdit={() => onEdit(id)}
          onDelete={() => onDelete(id)}
        />
      </Row>
    </li>
  );
};

export { RegularItem };
export type { RegularItemProps };
