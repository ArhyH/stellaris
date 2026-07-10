const savingOperationTypes = {
  deposit: 'deposit',
  withdraw: 'withdraw',
  transfer: 'transfer',
  convert: 'convert',
  manual: 'manual',
} as const;

const savingOperationSources = {
  manual: 'manual',
  saving: 'saving',
  availableBalance: 'available-balance',
} as const;

export { savingOperationSources, savingOperationTypes };
