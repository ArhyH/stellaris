const FinanceTransferTypes = {
  income: 'income',
  expense: 'expense',
  all: 'all',
};

const SELECT_TYPES_DATA = [
  { label: 'Income', value: FinanceTransferTypes.income },
  { label: 'Expense', value: FinanceTransferTypes.expense },
];

const ViewModes = {
  short: 'short',
  long: 'long',
};

export { FinanceTransferTypes, ViewModes, SELECT_TYPES_DATA };
