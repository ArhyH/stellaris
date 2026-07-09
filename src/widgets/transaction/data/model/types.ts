import { CategoryColor } from '@/shared/styles';
import {
  AMOUNT,
  DATE,
  FinanceTransferType,
  ICON,
  ID,
  LABEL,
} from '@/shared/types';
import { sortDirections, sortFields } from './consts';

interface RecentTransaction {
  id: ID;
  amount: AMOUNT;
  date: DATE;
  type: FinanceTransferType;
  note: LABEL;
  categoryIcon: ICON | undefined;
  categoryColor?: CategoryColor;
  categoryIconColor?: CategoryColor;
  categoryName: LABEL;
}

type SortField = keyof typeof sortFields;
type SortDirection = keyof typeof sortDirections;

type SortConfig = {
  field: SortField;
  direction: SortDirection;
};

export type { RecentTransaction, SortField, SortDirection, SortConfig };
