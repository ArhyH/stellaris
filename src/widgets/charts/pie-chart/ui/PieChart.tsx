import { Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts';
import { colors, sizes } from '@/shared/styles';
import { PieChartTooltip } from './PieChartTooltip';
import { PieChartLegend } from './PieChartLegend';
import { Typography, typographyProps } from '@/shared/ui/Typography';
import { FinanceTransferTypes } from '@/shared/consts';
import { PieChartPlaceholder } from './PieChartPlaceholder';
import { Box, BoxHeader } from '@/shared/ui/Box';
import { PieChartProps } from './types';

const PieChartUi = (props: PieChartProps) => {
  const { data, date, type, mode } = props;

  if (!date || !type) {
    return;
  }

  const enoughtChartData = data.length !== 0;

  return (
    <Box padding={sizes.sizes[24]} isStretch>
      <BoxHeader paddingBottom={sizes.sizes[16]}>
        <Typography
          type={typographyProps.types.title16}
          color={colors.base.white}
          tag={typographyProps.tags.h3}
        >
          {type === FinanceTransferTypes.expense
            ? 'Expenses by Category'
            : 'Income by Source'}
        </Typography>
        <Typography
          type={typographyProps.types.text12}
          color={colors.lightgray[2]}
        >
          {date}
        </Typography>
      </BoxHeader>
      {enoughtChartData ? (
        <ResponsiveContainer width="100%" height="100%" minHeight={200}>
          <PieChart>
            <Pie
              cx={90}
              cy={90}
              data={data}
              dataKey="value"
              innerRadius={55}
              outerRadius={90}
              paddingAngle={3}
              isAnimationActive
              fill={`var(--${colors.gray[4]})`}
            />
            <Tooltip
              content={(props) => <PieChartTooltip {...props} mode={mode} />}
            />
            <Legend
              layout="vertical"
              verticalAlign="top"
              align="right"
              content={(props) => <PieChartLegend {...props} mode={mode} />}
              wrapperStyle={{ left: 210, right: 5 }}
            />
          </PieChart>
        </ResponsiveContainer>
      ) : (
        <PieChartPlaceholder date={date} type={type} />
      )}
    </Box>
  );
};

export { PieChartUi };
export type { PieChartProps };
