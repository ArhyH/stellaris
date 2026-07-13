import { SavingItem as SavingItemType } from '../model/types';
import { Row, rowProps } from '@/shared/ui/Row';
import { Progress } from '@/shared/ui/Progress';
import { statusColors } from '../model/consts';
import { Buttons, Goal, Info, Name } from './parts';
import styles from './style.module.scss';

type GoalItemProps = {
  saving: SavingItemType;
};

const GoalItem = (props: GoalItemProps) => {
  const { saving } = props;

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
          saved={goalPercent}
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

        <Buttons />
      </Row>
    </li>
  );
};

export { GoalItem };
