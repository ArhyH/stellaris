import styles from './style.module.scss';
import { PieChartItem } from '../model/types';
import { formatAmount, formatTypes } from '@/shared/helpers/formatAmount';
import { Typography, typographyProps } from '@/shared/ui/Typography';
import { colors } from '@/shared/styles';
import { Dot } from '@/shared/ui/Dot';
import { CustomLegendProps } from './types';
import { pieChartProps } from './consts';

const PieChartLegend = (props: CustomLegendProps) => {
  const { payload, mode } = props;

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
                {mode === pieChartProps.modes.analytics && (
                  <Typography
                    type={typographyProps.types.text12}
                    color={colors.lightgray[3]}
                  >
                    {item.percent}%
                  </Typography>
                )}

                <Typography
                  type={typographyProps.types.subtitle16}
                  color={colors.base.white}
                >
                  {formatAmount({
                    amount: item.value,
                    format: formatTypes.full,
                  })}
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
