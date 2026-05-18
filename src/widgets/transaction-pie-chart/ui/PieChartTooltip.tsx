import styles from './style.module.scss';
import { TooltipContentProps } from 'recharts';
import {
  NameType,
  ValueType,
} from 'recharts/types/component/DefaultTooltipContent';
import { PieChartItem } from '../model/types';
import { formatAmount, formatTypes } from '@/shared/helpers/formatAmount';
import { Typography, typographyProps } from '@/shared/ui/Typography';
import { colors } from '@/shared/styles';

type CustomTooltipProps = TooltipContentProps<ValueType, NameType>;

const PieChartTooltip = ({ active, payload }: CustomTooltipProps) => {
  if (!active || !payload?.length) return null;

  const item = payload[0].payload as PieChartItem;

  return (
    <div className={styles['pie-chart__tooltip']}>
      <Typography type={typographyProps.types.text16White}>
        {item.categoryName}
      </Typography>
      <Typography
        type={typographyProps.types.title18}
        color={
          item.categoryColor ? colors.category[item.categoryColor] : undefined
        }
      >
        {formatAmount(item.value, formatTypes.short)}
      </Typography>
    </div>
  );
};

export { PieChartTooltip };
