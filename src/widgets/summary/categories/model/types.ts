interface CategoriesSummary {
  total: number;
  income: number;
  expense: number;
}

type SummaryKey = keyof CategoriesSummary;

export type { CategoriesSummary, SummaryKey };
