import { Category } from '@/entity/category';

const categoriesMock: Category[] = [
  {
    id: 'food',
    name: 'food',
    type: 'expense',
    icon: 'arrowDown18',
    color: 'category-yellow-2',
  },
  {
    id: 'shopping',
    name: 'shopping',
    type: 'expense',
    icon: 'arrowDown18',
    color: 'category-blue-1',
  },
  {
    id: 'housing',
    name: 'housing',
    type: 'expense',
    icon: 'arrowDown18',
    color: 'category-lightblue-1',
  },
  {
    id: 'transport',
    name: 'transport',
    type: 'expense',
    icon: 'arrowDown18',
    color: 'category-violet-1',
  },
  {
    id: 'salary',
    name: 'salary',
    type: 'income',
    icon: 'arrowDown18',
    color: 'category-blue-3',
  },
  {
    id: 'freelance',
    name: 'freelance',
    type: 'income',
    icon: 'arrowDown18',
    color: 'category-pink-2',
  },
];

export { categoriesMock };
