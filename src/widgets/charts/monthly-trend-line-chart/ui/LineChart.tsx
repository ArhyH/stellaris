import { TrendChartItem } from '../model/types';
import { ContentCard, ContentCardHeader } from '@/features/ContentCard';
import { Typography, typographyProps } from '@/shared/ui/Typography';
import { colors, sizes } from '@/shared/styles';
import { Row } from '@/shared/ui/Row/Row';
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import { LineChartTooltip } from './LineChartUITooltip';
import { formatAmount } from '@/shared/helpers';
import { formatTypes } from '@/shared/helpers/formatAmount';

type LineChartProps = {
  data: TrendChartItem[];
};

const LineChartUI = (props: LineChartProps) => {
  const { data } = props;

  return (
    <ContentCard>
      <ContentCardHeader paddingBottom={sizes.sizes[20]}>
        <Typography
          type={typographyProps.types.title16}
          color={colors.base.white}
          tag={typographyProps.tags.h3}
        >
          Monthly Trend
        </Typography>
        <Row>
          <Typography
            type={typographyProps.types.text12}
            color={colors.lightgray[3]}
            tag={typographyProps.tags.p}
          >
            Income
          </Typography>
          <Typography
            type={typographyProps.types.text12}
            color={colors.lightgray[3]}
            tag={typographyProps.tags.p}
          >
            Expense
          </Typography>
        </Row>
      </ContentCardHeader>
      <ResponsiveContainer width="100%" height="100%" minHeight={240}>
        <LineChart data={data}>
          <XAxis
            dataKey="date"
            tick={{ fontSize: 10, fill: `var(--${colors.lightgray[3]})` }}
            tickLine={false}
            axisLine={false}
          />

          <YAxis
            tick={{ fontSize: 10, fill: `var(--${colors.lightgray[3]})` }}
            tickFormatter={(value) => formatAmount(value, formatTypes.compact)}
            tickLine={false}
            axisLine={false}
            width="auto"
          />
          <Tooltip content={LineChartTooltip} />

          <Line
            dataKey="expense"
            fill={`var(--${colors.red[1]})`}
            stroke={`var(--${colors.red[1]})`}
            strokeWidth={2}
            dot={{ r: 5, fill: `var(--${colors.red[1]})`, strokeWidth: 0 }}
            activeDot={{ r: 5 }}
            type="monotone"
          />

          <Line
            dataKey="income"
            fill={`var(--${colors.green[1]})`}
            stroke={`var(--${colors.green[1]})`}
            strokeWidth={2}
            dot={{ r: 5, fill: `var(--${colors.green[1]})`, strokeWidth: 0 }}
            activeDot={{ r: 5 }}
            type="monotone"
          />

          <CartesianGrid
            horizontal={true}
            vertical={false}
            stroke={`var(--${colors.lightgray[3]})`}
            strokeDasharray="4 4"
            opacity="0.2"
          />
        </LineChart>
      </ResponsiveContainer>
    </ContentCard>
  );
};

export { LineChartUI };
export type { LineChartProps };
