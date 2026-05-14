import classnames from 'classnames';
import { Box, boxProps } from '@/shared/ui/Box';
import { ICON } from '@/shared/types/types';
import { colors } from '@/shared/styles';
import styles from './style.module.scss';
import { formatDelta } from '../model/summary';
import { DashboardSummary } from '../model/types';

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
          <p className={styles['budget-card__title']}>{title}</p>
          <span className={styles['budget-card__icon']}>{icon}</span>
        </div>
        <div className={styles['budget-card__content']}>
          <p className={styles['budget-card__summary']}>{summary}</p>
          {!!delta && (
            <p
              className={classnames(styles['budget-card__delta'], {
                [styles['is-red']]:
                  (categoryKey !== 'expense' && delta < 0) ||
                  (categoryKey === 'expense' && delta > 0),
              })}
            >
              {formatDelta(delta)} vs last month
            </p>
          )}
        </div>
      </div>
    </Box>
  );
};

export { BudgetCard };
export type { BudgetCardProps };
