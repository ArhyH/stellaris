import { FinanceTransferTypes } from '../consts';
import { AMOUNT, FinanceTransferType } from '../types';

const formatTypes = {
  full: 'full',
  short: 'short',
} as const;

type FormatTypes = keyof typeof formatTypes;

const formatAmount = (
  amount: AMOUNT,
  format: FormatTypes = formatTypes.full,
  type?: FinanceTransferType,
) => {
  let formatted = '';

  if (format === formatTypes.full) {
    formatted = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(amount);
  }

  if (format === formatTypes.short) {
    formatted = `$${new Intl.NumberFormat('ru-RU', {
      maximumFractionDigits: 2,
      minimumFractionDigits: 0,
    }).format(amount)}`;
  }

  if (type) {
    return type === FinanceTransferTypes.income
      ? `+${formatted}`
      : `-${formatted}`;
  }

  return formatted;
};

export { formatAmount, formatTypes };
