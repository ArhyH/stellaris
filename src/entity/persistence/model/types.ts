import { Saving } from '@/entity/saving';
import { Budget } from '../../budget';
import { Category } from '../../category';
import { Transaction } from '../../transaction';
import { SavingOperation } from '@/entity/saving-operation';

type StorageMap = {
  category: Category;
  transaction: Transaction;
  budget: Budget;
  saving: Saving;
  savingOperation: SavingOperation;
};

type StorageKey = { [K in keyof StorageMap]: K };
type StorageMock = { [K in keyof StorageMap]: DataType<K> };

type DataType<K extends keyof StorageMap> = Record<string, StorageMap[K]>;

export type { StorageMap, StorageKey, StorageMock, DataType };
