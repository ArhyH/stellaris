import { Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts';

import { colors, sizes } from '@/shared/styles';
import { PieChartItem } from '../model/types';
import { PieChartTooltip } from './PieChartTooltip';
import { PieChartLegend } from './PieChartLegend';
import { ContentCard, ContentCardHeader } from '@/features/ContentCard';
import { Typography, typographyProps } from '@/shared/ui/Typography';

type PieChartProps = {
  data: PieChartItem[];
  date: string;
};

const PieChartUi = (props: PieChartProps) => {
  const { data, date } = props;

  return (
    <ContentCard>
      <ContentCardHeader paddingBottom={sizes.sizes[16]}>
        <Typography
          type={typographyProps.types.title16}
          tag={typographyProps.tags.h3}
        >
          Expenses by Category
        </Typography>
        <Typography type={typographyProps.types.text12Lightgray}>
          {date}
        </Typography>
      </ContentCardHeader>
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
    </ContentCard>
  );
};

export { PieChartUi };
export type { PieChartProps };
