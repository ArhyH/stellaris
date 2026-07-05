import { storageKeys } from './consts';
import { createStorage } from './helpers';

const storage = {
  transaction: createStorage(storageKeys.transaction),
  category: createStorage(storageKeys.category),
  budget: createStorage(storageKeys.budget),
};

export { storage };
