import { CategoriesSummary } from '@/widgets/summary';
import { Typography, typographyProps } from '@/shared/ui/Typography';
import { colors, sizes } from '@/shared/styles';
import { Row, rowProps } from '@/shared/ui/Row';
import { Page, PageCell } from '../../../shared/ui/Page';
import { Categories } from '@/widgets/categories';
import { CategoriesFilter } from '@/widgets/categories-filter';
import { AddCategory } from '@/features/AddCategory';
import { EditCategory } from '@/features/EditCategory';
import {
  useCategoriesData,
  useCategoriesFilter,
  useEditCategory,
} from '../model';
import { useCategories } from '@/entity/category';
import { useBudgets } from '@/entity/budget';
import { ID } from '@/shared/types';

const CategoriesPage = () => {
  const {
    categories,
    activeCategories,
    addCategory,
    editCategory,
    deleteCategory,
  } = useCategories();

  const { budgetsList, deleteBudget } = useBudgets();

  const { setCurrentFilter, currentCategories } =
    useCategoriesFilter(activeCategories);

  const { editingCategory, isEditOpen, handleEditCategory, setIsEditOpen } =
    useEditCategory(categories);

  const { categoriesSummary, categoryItems } = useCategoriesData(
    activeCategories,
    currentCategories,
  );

  const handleCategoryDelete = (id: ID) => {
    const [connectedBudget] = budgetsList.filter(
      (budget) => budget.categoryId === id,
    );

    if (connectedBudget) {
      console.log(connectedBudget);
      deleteBudget(connectedBudget.id);
    }

    deleteCategory(id);
  };

  return (
    <Page>
      <Row justify={rowProps.justifies.spaceBetween}>
        <PageCell gap={sizes.sizes[4]}>
          <Typography
            type={typographyProps.types.title28}
            color={colors.base.white}
            tag={typographyProps.tags.h1}
          >
            Categories
          </Typography>

          <Typography
            type={typographyProps.types.text14}
            color={colors.lightgray[2]}
          >
            {categoriesSummary.expense} expense · {categoriesSummary.income}{' '}
            income
          </Typography>
        </PageCell>

        <PageCell>
          <AddCategory onSubmit={addCategory} />
        </PageCell>
      </Row>

      <CategoriesSummary summaries={categoriesSummary} />

      <CategoriesFilter onFilterChange={setCurrentFilter} />

      <Categories
        categories={categoryItems}
        onEdit={handleEditCategory}
        onDelete={handleCategoryDelete}
      />

      <EditCategory
        category={editingCategory}
        open={isEditOpen}
        onOpen={setIsEditOpen}
        onSubmit={editCategory}
      />
    </Page>
  );
};

export { CategoriesPage };
