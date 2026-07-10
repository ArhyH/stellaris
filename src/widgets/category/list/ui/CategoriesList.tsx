import styles from './style.module.scss';
import { CategoryItem as CategoryItemType } from '../model/types';
import { CategoryItem } from './CategoryItem';
import { ID } from '@/shared/types';
import { CategoryPlaceholder } from './CategoryPlaceholder';

type CategoriesListProps = {
  categories: CategoryItemType[];
  onEdit: (id: ID) => void;
  onDelete: (id: ID) => void;
};

const CategoriesList = (props: CategoriesListProps) => {
  const { categories, onEdit, onDelete } = props;

  const hasCategories = categories.length > 0;

  return (
    <div className={styles.categories__wrapper}>
      {hasCategories ? (
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
      ) : (
        <CategoryPlaceholder />
      )}
    </div>
  );
};

export { CategoriesList };
export type { CategoriesListProps };
