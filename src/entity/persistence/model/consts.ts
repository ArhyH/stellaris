import { savingsMock } from '@/entity/saving';
import { budgetsMock } from '../../budget/model/mocks';
import { categoriesMock } from '../../category/model/mocks';
import { transactionsMock } from '../../transaction/model/mocks';
import { StorageKey, StorageMock } from './types';
import { savingOperationsMock } from '@/entity/saving-operation';

const storageKeys: StorageKey = {
  category: 'category',
  transaction: 'transaction',
  budget: 'budget',
  saving: 'saving',
  savingOperation: 'savingOperation',
};

const mocks: StorageMock = {
  category: categoriesMock,
  transaction: transactionsMock,
  budget: budgetsMock,
  saving: savingsMock,
  savingOperation: savingOperationsMock,
};

export { storageKeys, mocks };
