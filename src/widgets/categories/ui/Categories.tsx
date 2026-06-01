import styles from './style.module.scss';
import { CategoryItem as CategoryItemType } from '../model/types';
import { CategoryItem } from './CategoryItem';
import { SegmentedControl } from '@/shared/ui/SegmentedControl';

type CategoriesProps = {
  categories: CategoryItemType[];
};

const FILTERS = [
  { label: 'All', value: 'all' },
  { label: 'Income', value: 'income' },
  { label: 'Expense', value: 'expense' },
];

const Categories = (props: CategoriesProps) => {
  const { categories } = props;

  return (
    <div className={styles.categories__wrapper}>
      <SegmentedControl options={FILTERS} defaultValue={FILTERS[0].value} />

      <ul className={styles.categories}>
        {categories.map((category) => {
          return <CategoryItem data={category} key={category.categoryId} />;
        })}
      </ul>
    </div>
  );
};

export { Categories };
export type { CategoriesProps };
