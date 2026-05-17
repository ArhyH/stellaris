import styles from './style.module.scss';
import { TooltipContentProps } from 'recharts';
import {
  NameType,
  ValueType,
} from 'recharts/types/component/DefaultTooltipContent';
import { PieChartItem } from '../model/types';
import { formatAmount, formatTypes } from '@/shared/helpers/formatAmount';

type CustomTooltipProps = TooltipContentProps<ValueType, NameType>;

const PieChartTooltip = ({ active, payload }: CustomTooltipProps) => {
  if (!active || !payload?.length) return null;

  const item = payload[0].payload as PieChartItem;

  return (
    <div className={styles['pie-chart__tooltip']}>
      <p>{item.categoryName}</p>
      <p
        className={styles['pie-chart__tooltip-value']}
        style={{ color: `var(--${item.categoryColor})` }}
      >
        {formatAmount(item.value, formatTypes.short)}
      </p>
    </div>
  );
};

export { PieChartTooltip };
