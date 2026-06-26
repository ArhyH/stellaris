import { Category } from '@/entity/category';

const categoriesMock: Category[] = [
  {
    id: 'food',
    name: 'food',
    type: 'expense',
    icon: 'burger24',
    color: 'category-yellow-2',
    iconColor: 'category-yellow-2',
  },
  {
    id: 'shopping',
    name: 'shopping',
    type: 'expense',
    icon: 'shoppingBag24',
    color: 'category-blue-1',
    iconColor: 'category-blue-1',
  },
  {
    id: 'housing',
    name: 'housing',
    type: 'expense',
    icon: 'house24',
    color: 'category-lightblue-1',
    iconColor: 'category-lightblue-1',
  },
  {
    id: 'transport',
    name: 'transport',
    type: 'expense',
    icon: 'car24',
    color: 'category-violet-1',
    iconColor: 'category-violet-1',
  },
  {
    id: 'salary',
    name: 'salary',
    type: 'income',
    icon: 'briefcase24',
    color: 'category-blue-3',
    iconColor: 'category-blue-3',
  },
  {
    id: 'freelance',
    name: 'freelance',
    type: 'income',
    icon: 'laptop24',
    color: 'category-pink-2',
    iconColor: 'category-pink-2',
  },
];

export { categoriesMock };
