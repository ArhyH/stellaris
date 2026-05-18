import { Box, boxProps } from '@/shared/ui/Box';
import { ICON } from '@/shared/types';
import { colors } from '@/shared/styles';
import styles from './style.module.scss';
import { formatDelta } from '../model/summary';
import { DashboardSummary } from '../model/types';
import { formatAmount } from '@/shared/helpers/formatAmount';
import { Typography, typographyProps } from '@/shared/ui/Typography';

type BudgetCardProps = {
  title: string;
  icon: ICON;
  summary: number;
  delta?: number | null;
  categoryKey: keyof DashboardSummary;
};

const BudgetCard = (props: BudgetCardProps) => {
  const { title, icon, summary, delta, categoryKey } = props;

  return (
    <Box
      size={boxProps.sizes.parent}
      bgColor={colors.box['gray-4']}
      grow={boxProps.grow[1]}
    >
      <div className={styles['budget-card']}>
        <div className={styles['budget-card__header']}>
          <Typography
            type={typographyProps.types.text14Lightgray}
            tag={typographyProps.tags.h3}
          >
            {title}
          </Typography>
          <span className={styles['budget-card__icon']}>{icon}</span>
        </div>
        <div className={styles['budget-card__content']}>
          <Typography type={typographyProps.types.title30}>
            {formatAmount(summary)}
          </Typography>
          {!!delta && (
            <Typography
              type={
                (categoryKey !== 'expense' && delta < 0) ||
                (categoryKey === 'expense' && delta > 0)
                  ? typographyProps.types.deltaNagative
                  : typographyProps.types.deltaPositive
              }
            >
              {`${formatDelta(delta)} vs last month`}
            </Typography>
          )}
        </div>
      </div>
    </Box>
  );
};

export { BudgetCard };
export type { BudgetCardProps };
