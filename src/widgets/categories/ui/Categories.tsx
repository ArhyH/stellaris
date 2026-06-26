import styles from './style.module.scss';
import { CategoryItem as CategoryItemType } from '../model/types';
import { CategoryItem } from './CategoryItem';
import { ID } from '@/shared/types';

type CategoriesProps = {
  categories: CategoryItemType[];
  onEdit: (id: ID) => void;
  onDelete: (id: ID) => void;
};

const Categories = (props: CategoriesProps) => {
  const { categories, onEdit, onDelete } = props;

  return (
    <div className={styles.categories__wrapper}>
      <ul className={styles.categories}>
        {categories.map((category) => {
          return (
            <CategoryItem
              data={category}
              key={category.categoryId}
              onEdit={onEdit}
              onDelete={onDelete}
            />
          );
        })}
      </ul>
    </div>
  );
};

export { Categories };
export type { CategoriesProps };
