import { CategoryColor } from '@/shared/styles';
import { ICON, ID, LABEL } from '@/shared/types';

interface Saving {
  id: ID;
  name: LABEL;
  currency: string;
  icon: ICON;
  iconColor: CategoryColor;
  goal: number;
}

type SavingItem = Record<string, Saving>;

export type { Saving, SavingItem };
