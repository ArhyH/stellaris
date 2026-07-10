import { FilterByTypeValue } from './types';

const filterTypes = {
  all: 'all',
  income: 'income',
  expense: 'expense',
} as const;

const DEFAULT_TYPE_FILTER: FilterByTypeValue = filterTypes.all;

const FILTERS = [
  { label: 'All', value: filterTypes.all },
  { label: 'Income', value: filterTypes.income },
  { label: 'Expense', value: filterTypes.expense },
];

const filterModes = {
  categories: 'categories',
  transactions: 'transactions',
};

export { filterTypes, DEFAULT_TYPE_FILTER, FILTERS, filterModes };
