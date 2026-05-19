import {
  ContentCard,
  ContentCardHeader,
  contentCardProps,
} from '@/features/ContentCard';
import { sizes } from '@/shared/styles';
import { Typography, typographyProps } from '@/shared/ui/Typography';
import { RouterLink } from '@/shared/ui/RouterLink/RouterLink';
import { BudgetOverviewItem } from './BudgetOverviewItem';
import styles from '../style.module.scss';
import { Icon } from '@/shared/ui/Icon';
import { icons } from '@/shared/assets';
import { BudgetOverviewItem as BudgetOverviewItemType } from '@/entity/budget';

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
        <RouterLink to={'/budgets'}>
          <Typography type={typographyProps.types.text12}>View All</Typography>
          <Icon
            icon={icons.arrowRight12}
            width={sizes.sizes[12]}
            height={sizes.sizes[12]}
          />
        </RouterLink>
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
