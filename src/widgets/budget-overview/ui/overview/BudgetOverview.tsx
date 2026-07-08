import {
  ContentCard,
  ContentCardHeader,
  contentCardProps,
} from '@/features/ContentCard';
import { colors, sizes } from '@/shared/styles';
import { Typography, typographyProps } from '@/shared/ui/Typography';
import { RouterLink } from '@/shared/ui/RouterLink/RouterLink';
import { BudgetOverviewItem } from './BudgetOverviewItem';
import styles from './style.module.scss';
import { Icon } from '@/shared/ui/Icon';
import { icons } from '@/shared/assets';
import { BudgetOverviewItem as BudgetOverviewItemType } from '@/entity/budget';
import { BudgetsPlaceholder } from './BudgetsPlaceholder';

type BudgetOverviewProps = {
  budgets: BudgetOverviewItemType[];
};

const BudgetOverview = (props: BudgetOverviewProps) => {
  const { budgets } = props;

  if (!budgets) {
    return;
  }

  const hasBudgets = budgets.length > 0;

  return (
    <ContentCard grow={contentCardProps.grow[3]}>
      <ContentCardHeader paddingBottom={sizes.sizes[20]}>
        <Typography
          type={typographyProps.types.title16}
          color={colors.base.white}
        >
          Budget Overview
        </Typography>
        <RouterLink to={'/budgets'}>
          <Typography type={typographyProps.types.text12}>View All</Typography>
          <Icon icon={icons.arrowRight12} size={sizes.sizes[12]} />
        </RouterLink>
      </ContentCardHeader>
      {hasBudgets ? (
        <ul className={styles['budget-overview']}>
          {budgets.map((budget) => {
            return <BudgetOverviewItem key={budget.id} budget={budget} />;
          })}
        </ul>
      ) : (
        <BudgetsPlaceholder />
      )}
    </ContentCard>
  );
};

export { BudgetOverview };
export type { BudgetOverviewProps };
