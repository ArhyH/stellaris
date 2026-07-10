import { storageKeys } from './consts';
import { createStorage } from './helpers';

const storage = {
  transaction: createStorage(storageKeys.transaction),
  category: createStorage(storageKeys.category),
  budget: createStorage(storageKeys.budget),
  saving: createStorage(storageKeys.saving),
  savingOperation: createStorage(storageKeys.savingOperation),
};

export { storage };
