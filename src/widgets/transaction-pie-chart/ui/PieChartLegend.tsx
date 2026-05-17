import styles from './style.module.scss';
import { DefaultLegendContentProps } from 'recharts';
import { PieChartItem } from '../model/types';
import { formatAmount } from '@/shared/helpers/formatAmount';

const PieChartLegend = (props: DefaultLegendContentProps) => {
  const { payload } = props;

  if (payload) {
    return (
      <ul className={styles['pie-chart__legend']}>
        {payload.map((entry, index: number) => {
          const item = entry.payload as PieChartItem;
          return (
            <li key={index} className={styles['pie-chart__legend-item']}>
              <span className={styles['pie-chart__category']}>
                <span
                  className={styles['pie-chart__dot']}
                  style={{ background: entry.color }}
                />
                {item.categoryName}
              </span>
              <span className={styles['pie-chart__total']}>
                {formatAmount(item.value)}
              </span>
            </li>
          );
        })}
      </ul>
    );
  }
};

export { PieChartLegend };
