import { Summary } from '@/shared/types';

interface CategoriesSummary extends Summary {
  total: number;
}

type SummaryKey = keyof CategoriesSummary;

export type { CategoriesSummary, SummaryKey };
