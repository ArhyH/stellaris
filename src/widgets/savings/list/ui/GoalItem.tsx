import { SavingItem as SavingItemType } from '../model/types';
import { Row, rowProps } from '@/shared/ui/Row';
import { Progress } from '@/shared/ui/Progress';
import { statusColors } from '../model/consts';
import { Buttons, Goal, Info, Name } from './parts';
import styles from './style.module.scss';
import { ID } from '@/shared/types';

type GoalItemProps = {
  saving: SavingItemType;
  onEdit: (id: ID) => void;
  onDelete: (id: ID) => void;
};

const GoalItem = (props: GoalItemProps) => {
  const { saving, onEdit, onDelete } = props;

  const {
    name,
    icon,
    amount,
    iconColor,
    goal,
    goalPercent,
    clampedPercent,
    status,
    remaining,
    overflow,
    id,
  } = saving;

  if (goalPercent === undefined || !status) {
    return;
  }

  return (
    <li className={styles['saving-item']}>
      <Row justify={rowProps.justifies.spaceBetween}>
        <Name
          icon={icon}
          iconColor={iconColor}
          name={name}
          saved={goalPercent > 0 ? goalPercent : 0}
        />

        <Goal goal={goal} amount={amount} />
      </Row>

      <Row>
        <Progress
          color={statusColors[status]}
          min={0}
          max={goal}
          percent={clampedPercent}
        />
      </Row>

      <Row justify={rowProps.justifies.spaceBetween}>
        <Info amount={amount} remaining={remaining} overflow={overflow} />

        <Buttons
          onOperationAdd={() => null}
          onEdit={() => onEdit(id)}
          onDelete={() => onDelete(id)}
        />
      </Row>
    </li>
  );
};

export { GoalItem };
