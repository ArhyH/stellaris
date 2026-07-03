const FinanceTransferTypes = {
  income: 'income',
  expense: 'expense',
  all: 'all',
};

const SELECT_TYPES_DATA = [
  { label: 'Income', value: FinanceTransferTypes.income },
  { label: 'Expense', value: FinanceTransferTypes.expense },
];

export { FinanceTransferTypes, SELECT_TYPES_DATA };
