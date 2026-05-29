import styles from './style.module.scss';
import { DefaultLegendContentProps } from 'recharts';
import { PieChartItem } from '../model/types';
import { formatAmount } from '@/shared/helpers/formatAmount';
import { Typography, typographyProps } from '@/shared/ui/Typography';
import { colors } from '@/shared/styles';
import { Dot } from '@/shared/ui/Dot';

const PieChartLegend = (props: DefaultLegendContentProps) => {
  const { payload } = props;

  if (payload) {
    return (
      <ul className={styles['pie-chart__legend']}>
        {payload.map((entry, index: number) => {
          const item = entry.payload as PieChartItem;

          return (
            <li key={index} className={styles['pie-chart__legend-item']}>
              <span className={styles['pie-chart__item-cell']}>
                <Dot
                  color={
                    item.categoryColor
                      ? colors.category[item.categoryColor]
                      : colors.red[1]
                  }
                />
                <Typography
                  type={typographyProps.types.text16}
                  color={colors.lightgray[4]}
                >
                  {item.categoryName}
                </Typography>
              </span>

              <span className={styles['pie-chart__item-cell']}>
                <Typography
                  type={typographyProps.types.subtitle16}
                  color={colors.base.white}
                >
                  {formatAmount(item.value)}
                </Typography>
              </span>
            </li>
          );
        })}
      </ul>
    );
  }

  return null;
};

export { PieChartLegend };
