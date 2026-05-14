interface DashboardSummary {
  income: number;
  expense: number;
  total: number;
}

interface SummaryDeltas {
  income: number | null;
  expense: number | null;
  total: number | null;
}

export type { DashboardSummary, SummaryDeltas };
