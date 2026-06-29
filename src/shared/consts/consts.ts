const FinanceTransferTypes = {
  income: 'income',
  expense: 'expense',
  all: 'all',
};

const SELECT_TYPES_DATA = [
  { label: 'Expense', value: FinanceTransferTypes.expense },
  { label: 'Income', value: FinanceTransferTypes.income },
];

export { FinanceTransferTypes, SELECT_TYPES_DATA };
