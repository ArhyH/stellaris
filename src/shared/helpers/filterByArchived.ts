import { Category } from '@/entity/category';

const filterByArchived = (categories: Category[]): Category[] =>
  [...categories].filter((category) => !category.isArchived);

export { filterByArchived };
