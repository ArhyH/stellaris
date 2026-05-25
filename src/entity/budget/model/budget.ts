import { AMOUNT, ID } from '@/shared/types';

interface Budget {
  categoryId: ID;
  id: ID;
  limit: AMOUNT;
}

export type { Budget };
