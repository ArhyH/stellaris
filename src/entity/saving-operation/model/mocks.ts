// prettier-ignore

import { SavingOperationItem } from "./types";

const savingOperationsMock = {
  'so-1': {
    id: 'so-1',
    type: 'deposit',
    savingId: 'deposit',
    source: 'available-balance',
    amount: 500,
    date: '2026-05-05',
  },
  'so-2': {
    id: 'so-2',
    type: 'deposit',
    savingId: 'deposit',
    source: 'available-balance',
    amount: 300,
    date: '2026-06-05',
  },
  'so-3': {
    id: 'so-3',
    type: 'manual',
    savingId: 'cash',
    source: 'manual',
    amount: 400,
    date: '2026-06-07',
  },
  'so-4': {
    id: 'so-4',
    type: 'manual',
    savingId: 'deposit-2',
    source: 'manual',
    amount: 400,
    date: '2026-07-02',
  },
} satisfies SavingOperationItem;

export { savingOperationsMock };
