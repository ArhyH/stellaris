// prettier-ignore

import { SavingItem } from "./types";

const savingsMock = {
  deposit: {
    id: 'deposit',
    name: 'Deposit',
    currency: '$',
    amount: 800,
    icon: 'landmark24',
    iconColor: 'category-green-2',
    goal: 1000,
  },
  cash: {
    id: 'cash',
    name: 'Cash',
    currency: '$',
    amount: 400,
    icon: 'coins24',
    iconColor: 'category-yellow-2',
    goal: 0,
  },
  'deposit-2': {
    id: 'deposit-2',
    name: 'Depoit EUR',
    currency: '€',
    amount: 400,
    icon: 'landmark24',
    iconColor: 'category-red-2',
    goal: 200,
  },
} satisfies SavingItem;

export { savingsMock };
