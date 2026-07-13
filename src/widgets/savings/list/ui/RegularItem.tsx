import { SavingItem as SavingItemType } from '../model/types';
import { Row, rowProps } from '@/shared/ui/Row';
import { Buttons, Goal, Info, Name } from './parts';
import styles from './style.module.scss';

type RegularItemProps = {
  saving: SavingItemType;
};

const RegularItem = (props: RegularItemProps) => {
  const { saving } = props;

  const { name, icon, amount, iconColor } = saving;

  return (
    <li className={styles['saving-item']}>
      <Row justify={rowProps.justifies.spaceBetween}>
        <Name icon={icon} iconColor={iconColor} name={name} />

        <Goal amount={amount} />
      </Row>

      <Row>
        <Info amount={amount} />

        <Buttons />
      </Row>
    </li>
  );
};

export { RegularItem };
export type { RegularItemProps };
