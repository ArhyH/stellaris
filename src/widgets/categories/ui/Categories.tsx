import styles from './style.module.scss';
import { CategoryItem as CategoryItemType } from '../model/types';
import { CategoryItem } from './CategoryItem';
import { useMemo, useState } from 'react';
import {
  DEFAULT_FILTER,
  FilterByType,
  FilterType,
  filterDataByFinanceTransferType,
} from '@/features/FilterByFinanceTransferType';

type CategoriesProps = {
  categories: CategoryItemType[];
};

const Categories = (props: CategoriesProps) => {
  const { categories } = props;

  const [currentFilter, setCurrentFilter] =
    useState<FilterType>(DEFAULT_FILTER);

  const currentCategories = useMemo(() => {
    return filterDataByFinanceTransferType(categories, currentFilter);
  }, [categories, currentFilter]);

  return (
    <div className={styles.categories__wrapper}>
      <FilterByType onChange={setCurrentFilter} />

      <ul className={styles.categories}>
        {currentCategories.map((category) => {
          return <CategoryItem data={category} key={category.categoryId} />;
        })}
      </ul>
    </div>
  );
};

export { Categories };
export type { CategoriesProps };
