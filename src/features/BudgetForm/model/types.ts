import { Budget } from '@/entity/budget';

type FormBudget = Omit<Budget, 'limit'> & {
  limit: string;
};

export type { FormBudget };
