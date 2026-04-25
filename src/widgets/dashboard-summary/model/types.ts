interface DashboardSummary {
  income: number;
  expense: number;
  total: number;
}

interface SummaryDeltas {
  incomeDelta: number | null;
  expenseDelta: number | null;
  totalDelta: number | null;
}

export type { DashboardSummary, SummaryDeltas };
