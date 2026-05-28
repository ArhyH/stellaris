import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import {
  ContentCard,
  ContentCardHeader,
  contentCardProps,
} from '@/features/ContentCard';
import { Typography, typographyProps } from '@/shared/ui/Typography';
import { colors } from '@/shared/styles';
import { BarChartItem } from '../model/types';
import { BarChartTooltip } from './BarChartTooltip';

type BarChartProps = {
  month: string;
  data: BarChartItem[];
};

const BarChartUI = (props: BarChartProps) => {
  const { month, data } = props;

  return (
    <ContentCard grow={contentCardProps.grow[1]}>
      <ContentCardHeader>
        <Typography
          type={typographyProps.types.title14}
          color={colors.base.white}
          tag={typographyProps.tags.h3}
        >
          Daily Spending {`(${month})`}
        </Typography>
      </ContentCardHeader>
      <ResponsiveContainer width="100%" height={140}>
        <BarChart
          barCategoryGap="10%"
          barSize={undefined}
          data={data}
          layout="horizontal"
          stackOffset="none"
          syncMethod="index"
          throttleDelay="raf"
          throttledEvents={[
            'mousemove',
            'touchmove',
            'pointermove',
            'scroll',
            'wheel',
          ]}
        >
          <XAxis
            dataKey="date"
            tick={{ fontSize: 10, fill: `var(--${colors.lightgray[3]})` }}
            tickLine={false}
            axisLine={false}
          />

          <YAxis
            tick={{ fontSize: 10, fill: `var(--${colors.lightgray[3]})` }}
            tickLine={false}
            axisLine={false}
            width="auto"
          />

          <Bar
            dataKey="spent"
            fill={`var(--${colors.red[1]})`}
            radius={[4, 4, 0, 0]}
          />

          <Tooltip content={BarChartTooltip} />

          <CartesianGrid
            horizontal={true}
            vertical={false}
            stroke={`var(--${colors.lightgray[3]})`}
            strokeDasharray="4 4"
            opacity="0.2"
          />
        </BarChart>
      </ResponsiveContainer>
    </ContentCard>
  );
};

export { BarChartUI };
export type { BarChartProps };
