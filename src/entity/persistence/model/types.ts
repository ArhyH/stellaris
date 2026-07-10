import { Budget } from '../../budget';
import { Category } from '../../category';
import { Transaction } from '../../transaction';

type StorageMap = {
  category: Category;
  transaction: Transaction;
  budget: Budget;
};

type StorageKey = { [K in keyof StorageMap]: K };
type StorageMock = { [K in keyof StorageMap]: DataType<K> };

type DataType<K extends keyof StorageMap> = Record<string, StorageMap[K]>;

export type { StorageMap, StorageKey, StorageMock, DataType };
