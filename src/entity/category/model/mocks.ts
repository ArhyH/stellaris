import { CategoryItem } from './types';

// prettier-ignore

const categoriesMock = {
  'food': {
    id: 'food',
    name: 'food',
    type: 'expense',
    icon: 'burger24',
    color: 'category-yellow-2',
    iconColor: 'category-yellow-2',
    isArchived: false,
  },
  'shopping': {
    id: 'shopping',
    name: 'shopping',
    type: 'expense',
    icon: 'shoppingBag24',
    color: 'category-blue-1',
    iconColor: 'category-blue-1',
    isArchived: false,
  },
  'other': {
    id: 'other',
    name: 'other',
    type: 'expense',
    icon: 'lightbulb24',
    color: 'category-red-1',
    iconColor: 'category-red-1',
    isArchived: false,
  },
  'housing': {
    id: 'housing',
    name: 'housing',
    type: 'expense',
    icon: 'house24',
    color: 'category-lightblue-1',
    iconColor: 'category-lightblue-1',
    isArchived: false,
  },
  'transport': {
    id: 'transport',
    name: 'transport',
    type: 'expense',
    icon: 'car24',
    color: 'category-violet-1',
    iconColor: 'category-violet-1',
    isArchived: false,
  },
  'salary': {
    id: 'salary',
    name: 'salary',
    type: 'income',
    icon: 'briefcase24',
    color: 'category-blue-3',
    iconColor: 'category-blue-3',
    isArchived: false,
  },
  'freelance': {
    id: 'freelance',
    name: 'freelance',
    type: 'income',
    icon: 'laptop24',
    color: 'category-pink-2',
    iconColor: 'category-pink-2',
    isArchived: false,
  },
  'other-old': {
    id: 'other-old',
    name: 'other',
    type: 'expense',
    icon: 'lightbulb24',
    color: 'category-red-1',
    iconColor: 'category-red-1',
    isArchived: true,
  },
  'salary-old': {
    id: 'salary-old',
    name: 'salary',
    type: 'income',
    icon: 'briefcase24',
    color: 'category-blue-3',
    iconColor: 'category-blue-3',
    isArchived: true,
  },
} satisfies CategoryItem;

export { categoriesMock };
