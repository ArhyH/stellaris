import styles from './style.module.scss';
import { BarChartItem } from '../model/types';
import { Typography, typographyProps } from '@/shared/ui/Typography';
import { TooltipContentProps } from 'recharts';
import {
  NameType,
  ValueType,
} from 'recharts/types/component/DefaultTooltipContent';
import { colors, sizes } from '@/shared/styles';
import { formatAmount } from '@/shared/helpers';
import { formatTypes } from '@/shared/helpers/formatAmount';
import { Row } from '@/shared/ui/Row/Row';
import { Dot, dotProps } from '@/shared/ui/Dot';

type CustomTooltipProps = TooltipContentProps<ValueType, NameType>;

const BarChartTooltip = ({ active, payload }: CustomTooltipProps) => {
  if (!active || !payload?.length) return null;

  const item = payload[0].payload as BarChartItem;

  return (
    <div className={styles['pie-chart__tooltip']}>
      <Typography
        type={typographyProps.types.text12}
        color={colors.lightgray[3]}
      >
        {item.date}
      </Typography>

      <Row gap={sizes.sizes[8]}>
        <Dot color={dotProps.colors.red} />
        <Typography
          type={typographyProps.types.text14}
          color={colors.lightgray[4]}
        >
          Spent:
        </Typography>
        <Typography
          type={typographyProps.types.title14}
          color={colors.base.white}
        >
          {formatAmount({ amount: item.spent, format: formatTypes.short })}
        </Typography>
      </Row>
    </div>
  );
};

export { BarChartTooltip };
export type { CustomTooltipProps };
