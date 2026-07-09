import styles from './style.module.scss';
import { PieChartItem } from '../model/types';
import { formatAmount, formatTypes } from '@/shared/helpers/formatAmount';
import { Typography, typographyProps } from '@/shared/ui/Typography';
import { colors } from '@/shared/styles';
import { CustomTooltipProps } from './types';
import { pieChartProps } from './consts';

const PieChartTooltip = (props: CustomTooltipProps) => {
  const { active, payload, mode } = props;

  if (!active || !payload?.length) return null;

  const item = payload[0].payload as PieChartItem;

  return (
    <div className={styles['pie-chart__tooltip']}>
      <Typography type={typographyProps.types.text16} color={colors.base.white}>
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

      {mode === pieChartProps.modes.analytics && (
        <Typography
          type={typographyProps.types.text12}
          color={colors.lightgray[3]}
        >
          {item.percent}%
        </Typography>
      )}
    </div>
  );
};

export { PieChartTooltip };
