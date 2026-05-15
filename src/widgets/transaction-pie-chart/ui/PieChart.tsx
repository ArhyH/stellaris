import {
  Legend,
  LegendType,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
} from 'recharts';
import { PieChartItem } from '../model/types';
import { Box, boxProps } from '@/shared/ui/Box';
import styles from './style.module.scss';
import { colors, sizes } from '@/shared/styles';

type PieChartProps = {
  data: PieChartItem[];
};

type LegendPayloadItem = {
  color: string;
  value: string;
  type: LegendType;
  payload: PieChartItem;
};

type CustomLegendProps = {
  payload?: LegendPayloadItem[];
};

const PieChartUi = (props: PieChartProps) => {
  const { data } = props;

  const renderLegend = (props: CustomLegendProps) => {
    const { payload } = props;

    if (payload) {
      return (
        <ul className={styles['pie-chart__legend']}>
          {payload.map((entry, index: number) => (
            <li key={index} className={styles['pie-chart__legend-item']}>
              <span className={styles['pie-chart__category']}>
                <span
                  className={styles['pie-chart__dot']}
                  style={{ background: entry.color }}
                />
                {entry.payload.categoryName}
              </span>
              <span className={styles['pie-chart__total']}>
                ${entry.payload.value}
              </span>
            </li>
          ))}
        </ul>
      );
    }
  };

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
          <Tooltip />
          <Legend
            layout="vertical"
            verticalAlign="top"
            align="right"
            content={renderLegend}
            wrapperStyle={{ left: '50%', right: 5 }}
          />
        </PieChart>
      </ResponsiveContainer>
    </Box>
  );
};

export { PieChartUi };
export type { PieChartProps };
