import { Budget } from '@/entity/budget';
import { ID } from '@/shared/types';

type DeleteState = {
  categoryId: ID;
  dependentBudget: Budget | null;
  hasTransaction: boolean;
};

export type { DeleteState };
