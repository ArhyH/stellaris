interface BudgetsSummary {
  total: number;
  spent: number;
  remaining: number;
  over: number;
}

type SummaryKey = keyof BudgetsSummary;

export type { BudgetsSummary, SummaryKey };
