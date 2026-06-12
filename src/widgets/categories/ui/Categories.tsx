import styles from './style.module.scss';
import { CategoryItem as CategoryItemType } from '../model/types';
import { CategoryItem } from './CategoryItem';

type CategoriesProps = {
  categories: CategoryItemType[];
};

const Categories = (props: CategoriesProps) => {
  const { categories } = props;

  return (
    <div className={styles.categories__wrapper}>
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
