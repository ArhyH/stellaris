import {
  ContentCard,
  ContentCardHeader,
  contentCardProps,
} from '@/features/ContentCard';
import { sizes } from '@/shared/styles';
import { Typography, typographyProps } from '@/shared/ui/Typography';
import { RouterLink } from '@/shared/ui/RouterLink/RouterLink';
import { BudgetOverviewItem as BudgetOverviewItemType } from '../model/types';
import { BudgetOverviewItem } from './BudgetOverviewItem';
import styles from './style.module.scss';

type BudgetOverviewProps = {
  budgets: BudgetOverviewItemType[];
};

const BudgetOverview = (props: BudgetOverviewProps) => {
  const { budgets } = props;

  return (
    <ContentCard grow={contentCardProps.grow[5]}>
      <ContentCardHeader paddingBottom={sizes.sizes[20]}>
        <Typography type={typographyProps.types.title16}>
          Budget Overview
        </Typography>
        <RouterLink to={'/budgets'}>View All</RouterLink>
      </ContentCardHeader>
      <ul className={styles['budget-overview']}>
        {budgets.map((budget) => {
          return <BudgetOverviewItem budget={budget} />;
        })}
      </ul>
    </ContentCard>
  );
};

export { BudgetOverview };
export type { BudgetOverviewProps };
