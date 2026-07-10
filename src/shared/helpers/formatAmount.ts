import { FinanceTransferTypes } from '../consts';
import { FinanceTransferType } from '../types';

const formatTypes = {
  full: 'full',
  short: 'short',
  compact: 'compact',
} as const;

type FormatTypes = keyof typeof formatTypes;

type AmountProps = {
  amount: number;
  format: FormatTypes;
  type?: FinanceTransferType;
  showSign?: boolean;
};

const formatAmount = (props: AmountProps) => {
  const { amount, format = formatTypes.full, type, showSign } = props;

  let formatted = '';

  if (format === formatTypes.full) {
    formatted = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      ...(showSign ? { signDisplay: 'exceptZero' } : {}),
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
