import {
  CategoriesSummary as CategoriesSummaryType,
  SummaryKey,
} from '../model/types';
import {
  SummaryCardWrapper,
  summaryCardWrapperProps,
} from '@/shared/ui/SummaryCard';
import { CategoryCard } from './CategoryCard';

type CategoriesSummaryProps = {
  summaries: CategoriesSummaryType;
};

const CATEGORIES_CARDS_CONFIG = [
  { key: 'total', title: 'Total Categories' },
  { key: 'income', title: 'Income Categories' },
  { key: 'expense', title: 'Expense Categories' },
] as const satisfies ReadonlyArray<{
  key: SummaryKey;
  title: string;
}>;

const CategoriesSummary = (props: CategoriesSummaryProps) => {
  const { summaries } = props;

  return (
    <SummaryCardWrapper columns={summaryCardWrapperProps.columns[3]}>
      {CATEGORIES_CARDS_CONFIG.map(({ title, key }) => {
        return (
          <CategoryCard
            title={title}
            summary={summaries[key]}
            budgetKey={key}
            key={key}
          />
        );
      })}
    </SummaryCardWrapper>
  );
};

export { CategoriesSummary };
export type { CategoriesSummaryProps };
