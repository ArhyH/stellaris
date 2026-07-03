import { Category } from '@/entity/category';
import { FilterByArchivedValue } from '../model/types';
import { filterTypes } from './consts';
import { filterByArchived } from '@/shared/helpers';

const filterCategoriesByArchived = (
  categories: Category[],
  state: FilterByArchivedValue,
) => {
  if (state === filterTypes.archived) {
    return filterByArchived(categories, true);
  }

  return filterByArchived(categories, false);
};

export { filterCategoriesByArchived };
