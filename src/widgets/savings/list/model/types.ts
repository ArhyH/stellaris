import { savingStatus } from '@/entity/saving';
import { CategoryColor } from '@/shared/styles';
import { AMOUNT, ICON, ID, LABEL } from '@/shared/types';
import { ValueOf } from 'type-fest';
import { savingsListKeys } from './consts';

interface SavingProgress {
  goalPercent?: number;
  clampedPercent?: number;
  remaining?: number;
  overflow?: number;
  status?: ValueOf<typeof savingStatus>;
}

interface SavingItem extends SavingProgress {
  id: ID;
  name: LABEL;
  amount: AMOUNT;
  currency: string;
  operationsCount: number;
  icon: ICON;
  iconColor: CategoryColor;
  goal: number;
}

type SavingsListKey = keyof typeof savingsListKeys;

export type { SavingItem, SavingProgress, SavingsListKey };
