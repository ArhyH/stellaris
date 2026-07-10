import { sortFields } from './consts';
import { RecentTransaction } from './types';

const SORT_CONFIG = {
  [sortFields.date]: (a: RecentTransaction, b: RecentTransaction) =>
    new Date(b.date).getTime() - new Date(a.date).getTime(),
  [sortFields.category]: (a: RecentTransaction, b: RecentTransaction) =>
    a.categoryName.localeCompare(b.categoryName),
  [sortFields.amount]: (a: RecentTransaction, b: RecentTransaction) =>
    b.amount - a.amount,
};

export { SORT_CONFIG };
