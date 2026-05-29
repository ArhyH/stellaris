interface AnalyticsSummary {
  income: number;
  expense: number;
  saving: number | null;
  daily: number;
}

interface SummaryDeltas {
  income: number | null;
  expense: number | null;
  saving: number | null;
  daily: number | null;
}

export type { AnalyticsSummary, SummaryDeltas };
