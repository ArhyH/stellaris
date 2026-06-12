import {
  SummaryCardWrapper,
  summaryCardWrapperProps,
} from '@/shared/ui/SummaryCard';
import {
  SummaryKey,
  TransactionsSummary as TransactionsSummaryType,
} from '../model/types';
import { TransactionCard } from './TransactionCard';

type TransactionsSummaryProps = {
  summaries: TransactionsSummaryType;
};

const TRANSACTION_CARDS_CONFIG = [
  { key: 'income', title: 'Filtered Income' },
  { key: 'expense', title: 'Filtered Expenses' },
  { key: 'delta', title: 'Net' },
] as const satisfies ReadonlyArray<{
  key: SummaryKey;
  title: string;
}>;

const TransactionsSummary = (props: TransactionsSummaryProps) => {
  const { summaries } = props;

  return (
    <SummaryCardWrapper columns={summaryCardWrapperProps.columns[3]}>
      {TRANSACTION_CARDS_CONFIG.map(({ title, key }) => {
        return (
          <TransactionCard
            title={title}
            key={key}
            budgetKey={key}
            summary={summaries[key]}
          />
        );
      })}
    </SummaryCardWrapper>
  );
};

export { TransactionsSummary };
export type { TransactionsSummaryProps };
