import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import { Typography, typographyProps } from '@/shared/ui/Typography';
import { colors, sizes } from '@/shared/styles';
import { BarChartItem } from '../model/types';
import { BarChartTooltip } from './BarChartTooltip';
import { Box, BoxHeader } from '@/shared/ui/Box';

type BarChartProps = {
  date: string;
  data: BarChartItem[];
};

const BarChartUI = (props: BarChartProps) => {
  const { data, date } = props;

  const hasData = data.length > 0;

  return (
    <Box padding={sizes.sizes[24]}>
      <BoxHeader paddingBottom={sizes.sizes[16]}>
        <Typography
          type={typographyProps.types.title14}
          color={colors.base.white}
          tag={typographyProps.tags.h3}
        >
          Daily Spending
        </Typography>
        <Typography
          type={typographyProps.types.text12}
          color={colors.lightgray[2]}
        >
          {date}
        </Typography>
      </BoxHeader>
      {hasData ? (
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
      ) : (
        <Typography
          type={typographyProps.types.text16}
          color={colors.lightgray[3]}
        >
          No expense transactions yet. Add expenses to see your daily spending
          throughout the month.
        </Typography>
      )}
    </Box>
  );
};

export { BarChartUI };
export type { BarChartProps };
