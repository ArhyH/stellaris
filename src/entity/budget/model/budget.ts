import { AMOUNT, ID } from '@/shared/types/types';

interface Budget {
  categoryId: ID;
  id: ID;
  limit: AMOUNT;
}

export type { Budget };
