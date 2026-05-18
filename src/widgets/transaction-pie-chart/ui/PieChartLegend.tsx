import styles from './style.module.scss';
import { DefaultLegendContentProps } from 'recharts';
import { PieChartItem } from '../model/types';
import { formatAmount } from '@/shared/helpers/formatAmount';
import { Typography, typographyProps } from '@/shared/ui/Typography';

const PieChartLegend = (props: DefaultLegendContentProps) => {
  const { payload } = props;

  if (payload) {
    return (
      <ul className={styles['pie-chart__legend']}>
        {payload.map((entry, index: number) => {
          const item = entry.payload as PieChartItem;
          return (
            <li key={index} className={styles['pie-chart__legend-item']}>
              <Typography type={typographyProps.types.text16Lightgray}>
                <>
                  <span
                    className={styles['pie-chart__dot']}
                    style={{ background: entry.color }}
                  />
                  {item.categoryName}
                </>
              </Typography>
              <Typography type={typographyProps.types.subtitle16}>
                {formatAmount(item.value)}
              </Typography>
            </li>
          );
        })}
      </ul>
    );
  }
};

export { PieChartLegend };
