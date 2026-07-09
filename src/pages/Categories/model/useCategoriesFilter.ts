import { useMemo, useState } from 'react';
import { Category, useCategories } from '@/entity/category';
import {
  DEFAULT_FILTER as DEFAULT_FILTER_TYPE,
  FilterByTypeValue,
  filterDataByFinanceTransferType,
} from '@/features/FilterByFinanceTransferType';
import {
  DEFAULT_FILTER as DEFAULT_FILTER_STATE,
  FilterByArchivedValue,
  filterCategoriesByArchived,
} from '@/features/FilterByArchived';

type Filter = {
  state: FilterByArchivedValue;
  type: FilterByTypeValue;
};

const useCategoriesFilter = () => {
  const { categoriesList, activeCategories } = useCategories();

  const hasArchivedCategories =
    activeCategories.length !== categoriesList.length;

  const isFilterDisabled = categoriesList.length === 0;

  const [currentFilter, setCurrentFilter] = useState<Filter>({
    state: DEFAULT_FILTER_STATE,
    type: DEFAULT_FILTER_TYPE,
  });

  const filteredCategories = useMemo(
    () => filterCategoriesByArchived(categoriesList, currentFilter.state),
    [categoriesList, currentFilter.state],
  );

  const currentCategories: Category[] = useMemo(() => {
    return filterDataByFinanceTransferType(
      filteredCategories,
      currentFilter.type,
    );
  }, [filteredCategories, currentFilter.type]);

  const onFilterTypeChange = (type: FilterByTypeValue) => {
    setCurrentFilter((prev) => ({
      ...prev,
      type,
    }));
  };

  const onFilterStateChange = (state: FilterByArchivedValue) => {
    setCurrentFilter((prev) => ({
      ...prev,
      state,
    }));
  };

  return {
    hasArchivedCategories,
    isFilterDisabled,
    currentCategories,
    onFilterTypeChange,
    onFilterStateChange,
  };
};

export { useCategoriesFilter };
