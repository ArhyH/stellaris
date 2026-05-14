import classnames from 'classnames';
import { Box, boxProps } from '@/shared/ui/Box';
import { ICON } from '@/shared/types/types';
import { colors } from '@/shared/styles';
import styles from './style.module.scss';
import { formatDelta } from '../model/summary';

type BudgetCardProps = {
  title: string;
  icon: ICON;
  summary: number;
  delta?: number | null;
};

const BudgetCard = (props: BudgetCardProps) => {
  const { title, icon, summary, delta } = props;

  return (
    <Box
      size={boxProps.sizes.fitContent}
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
                [styles['is-reduced']]: delta < 0,
              })}
            >
              {formatDelta(delta)} vs last mounth
            </p>
          )}
        </div>
      </div>
    </Box>
  );
};

export { BudgetCard };
export type { BudgetCardProps };
