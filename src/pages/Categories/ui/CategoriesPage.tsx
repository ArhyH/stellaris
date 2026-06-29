import { CategoriesSummary, getCategoriesSummary } from '@/widgets/summary';
import { Typography, typographyProps } from '@/shared/ui/Typography';
import { colors, sizes } from '@/shared/styles';
import { Row, rowProps } from '@/shared/ui/Row';
import { Page, PageCell } from '../../../shared/ui/Page';
import { Categories, mapCategoriesToCategoryItems } from '@/widgets/categories';
import { transactionsMock } from '@/shared/mocks/transactions';
import { filterTransactionsByMonth } from '@/shared/helpers';
import { CategoriesFilter } from '@/widgets/categories-filter';
import { AddCategory } from '@/features/AddCategory';
import { EditCategory } from '@/features/EditCategory';
import { useCategoriesFilter, useEditCategory } from '../model';
import { useCategories } from '@/entity/category';

const CategoriesPage = () => {
  const {
    categories,
    categoriesList,
    addCategory,
    editCategory,
    deleteCategory,
  } = useCategories();

  const { setCurrentFilter, currentCategories } =
    useCategoriesFilter(categoriesList);

  const { editingCategory, isEditOpen, handleEditCategory, setIsEditOpen } =
    useEditCategory(categories);

  const now = new Date();
  const categoriesSummary = getCategoriesSummary(categoriesList);
  const currentTransactions = filterTransactionsByMonth(transactionsMock, now);
  const categoryItems = mapCategoriesToCategoryItems(
    currentCategories,
    currentTransactions,
  );

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
        onDelete={deleteCategory}
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
