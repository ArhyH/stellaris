import { CategoryColor } from '@/shared/styles';
import { AMOUNT, ICON, ID, LABEL } from '@/shared/types';

interface Saving {
  id: ID;
  name: LABEL;
  currency: string;
  amount: AMOUNT;
  icon: ICON;
  iconColor: CategoryColor;
  goal: number;
}

type SavingItem = Record<string, Saving>;

export type { Saving, SavingItem };
