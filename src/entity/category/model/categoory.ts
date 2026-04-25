import {
  COLOR,
  FinanceTransferType,
  ICON,
  ID,
  LABEL,
} from '@/shared/types/types';

interface Category {
  id: ID;
  name: LABEL;
  icon: ICON;
  color: COLOR;
  type: FinanceTransferType;
}

export type { Category };
