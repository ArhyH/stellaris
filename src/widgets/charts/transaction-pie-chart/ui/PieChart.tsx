import { Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts';

import { colors, sizes } from '@/shared/styles';
import { PieChartItem } from '../model/types';
import { PieChartTooltip } from './PieChartTooltip';
import { PieChartLegend } from './PieChartLegend';
import {
  ContentCard,
  ContentCardHeader,
  contentCardProps,
} from '@/features/ContentCard';
import { Typography, typographyProps } from '@/shared/ui/Typography';
import { FinanceTransferType } from '@/shared/types';
import { FinanceTransferTypes } from '@/shared/consts';

type PieChartProps = {
  type: FinanceTransferType;
  data: PieChartItem[];
  date: string;
};

const PieChartUi = (props: PieChartProps) => {
  const { data, date, type } = props;

  return (
    <ContentCard grow={contentCardProps.grow[2]} isStretch>
      <ContentCardHeader paddingBottom={sizes.sizes[16]}>
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
      </ContentCardHeader>
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
          <Tooltip content={PieChartTooltip} />
          <Legend
            layout="vertical"
            verticalAlign="top"
            align="right"
            content={PieChartLegend}
            wrapperStyle={{ left: 210, right: 5 }}
          />
        </PieChart>
      </ResponsiveContainer>
    </ContentCard>
  );
};

export { PieChartUi };
export type { PieChartProps };
