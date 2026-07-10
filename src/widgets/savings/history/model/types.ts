import {
  SavingOperationSource,
  SavingOperationType,
} from '@/entity/saving-operation';
import { CategoryColor } from '@/shared/styles';
import { AMOUNT, DATE, ICON, ID } from '@/shared/types';

type HistoryItem = {
  id: ID;
  amount: AMOUNT;
  date: DATE;
  type: SavingOperationType;
  source: SavingOperationSource;
  savingId: ID;
  savingIcon?: ICON;
  savingIconColor?: CategoryColor;
  sourceId?: ID;
};

export type { HistoryItem };
