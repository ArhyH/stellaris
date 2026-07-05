import { budgetsMock } from '../../budget/model/mocks';
import { categoriesMock } from '../../category/model/mocks';
import { transactionsMock } from '../../transaction/model/mocks';
import { StorageKey, StorageMock } from './types';

const storageKeys: StorageKey = {
  category: 'category',
  transaction: 'transaction',
  budget: 'budget',
};

const mocks: StorageMock = {
  category: categoriesMock,
  transaction: transactionsMock,
  budget: budgetsMock,
};

export { storageKeys, mocks };
