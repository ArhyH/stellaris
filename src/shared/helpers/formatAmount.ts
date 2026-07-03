import { FinanceTransferTypes } from '../consts';
import { FinanceTransferType } from '../types';

const formatTypes = {
  full: 'full',
  short: 'short',
  compact: 'compact',
} as const;

type FormatTypes = keyof typeof formatTypes;

const formatAmount = (
  amount: number,
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

  if (format === formatTypes.compact) {
    formatted = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      notation: 'compact',
      maximumFractionDigits: 1,
    }).format(amount);
  }

  if (type) {
    return type === FinanceTransferTypes.income
      ? `+${formatted}`
      : `-${formatted}`;
  }

  return formatted;
};

export { formatAmount, formatTypes };
