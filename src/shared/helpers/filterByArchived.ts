import { Category } from '@/entity/category';

const filterByArchived = (
  categories: Category[],
  isArchived: boolean,
): Category[] =>
  [...categories].filter((category) => category.isArchived === isArchived);

export { filterByArchived };
