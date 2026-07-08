import { Summary } from '@/shared/types';

interface DashboardSummary extends Summary {
  total: number;
}

interface SummaryDeltas {
  income: number | null;
  expense: number | null;
  total: number | null;
}

export type { DashboardSummary, SummaryDeltas };
