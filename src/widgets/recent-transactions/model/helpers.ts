import { FinanceTransferTypes } from '@/shared/consts/consts';
import { AMOUNT, FinanceTransferType } from '@/shared/types/types';

const formatAmount = (amount: AMOUNT, type: FinanceTransferType): string => {
  return type === FinanceTransferTypes.income ? `+${amount}` : `-${amount}`;
};

export { formatAmount };
