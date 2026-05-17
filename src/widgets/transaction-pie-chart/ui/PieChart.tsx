import { Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts';

import { Box, boxProps } from '@/shared/ui/Box';
import { colors, sizes } from '@/shared/styles';
import { PieChartItem } from '../model/types';
import { PieChartTooltip } from './PieChartTooltip';
import { PieChartLegend } from './PieChartLegend';

type PieChartProps = {
  data: PieChartItem[];
};

const PieChartUi = (props: PieChartProps) => {
  const { data } = props;

  return (
    <Box grow={boxProps.grow[1]} padding={sizes.sizes[24]}>
      <ResponsiveContainer width="100%" height={350}>
        <PieChart>
          <Pie
            cx={100}
            cy="30%"
            data={data}
            dataKey="value"
            innerRadius={60}
            outerRadius={100}
            paddingAngle={3}
            isAnimationActive
            fill={`var(--${colors.gray[4]})`}
          />
          <Tooltip content={PieChartTooltip} />
          <Legend
            layout="vertical"
            verticalAlign="top"
            align="right"
            content={PieChartLegend}
            wrapperStyle={{ left: '55%', right: 5 }}
          />
        </PieChart>
      </ResponsiveContainer>
    </Box>
  );
};

export { PieChartUi };
export type { PieChartProps };
