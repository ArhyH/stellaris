import { mocks } from './consts';
import { DataType, StorageMap } from './types';

const saveData = <K extends keyof StorageMap>(key: K, data: DataType<K>) =>
  localStorage.setItem(key, JSON.stringify(data));

const loadData = <K extends keyof StorageMap>(key: K): DataType<K> => {
  const data = localStorage.getItem(key);
  const mock = mocks[key];

  if (!data) {
    saveData(key, mock);
    return mock;
  }

  try {
    return JSON.parse(data) as DataType<K>;
  } catch {
    saveData(key, mock);
    return mock;
  }
};

const clearData = (key: keyof StorageMap) => localStorage.removeItem(key);

const createStorage = <K extends keyof StorageMap>(key: K) => ({
  load: () => loadData(key),
  save: (data: DataType<K>) => saveData(key, data),
  clear: () => clearData(key),
});

export { createStorage };
