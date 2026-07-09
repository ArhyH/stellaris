import { Summary } from '@/shared/types';

interface AnalyticsSummary extends Summary {
  saving: number | null;
  daily: number | null;
  totalSavings: number | null;
}

interface SummaryDeltas {
  income: number | null;
  expense: number | null;
  saving: number | null;
  daily: number | null;
  totalSavings: number | null;
}

export type { AnalyticsSummary, SummaryDeltas };
