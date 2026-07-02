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
  useDeleteCategory,
  useEditCategory,
} from '../model';
import { useCategories } from '@/entity/category';
import { DeleteCategory } from '@/features/DeleteCategory';

const CategoriesPage = () => {
  const { categories, activeCategories, addCategory, editCategory } =
    useCategories();

  const { setCurrentFilter, currentCategories } =
    useCategoriesFilter(activeCategories);

  const { editingCategory, isEditOpen, handleEditCategory, setIsEditOpen } =
    useEditCategory(categories);

  const {
    isDeleteOpen,
    deleteState,
    setIsDeleteOpen,
    handleCategoryDelete,
    onDeleteSubmit,
    onDeleteCancel,
  } = useDeleteCategory();

  const { categoriesSummary, categoryItems } = useCategoriesData(
    activeCategories,
    currentCategories,
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
        onDelete={handleCategoryDelete}
      />

      <EditCategory
        category={editingCategory}
        open={isEditOpen}
        onOpen={setIsEditOpen}
        onSubmit={editCategory}
      />

      <DeleteCategory
        open={isDeleteOpen}
        onOpen={setIsDeleteOpen}
        onSubmit={onDeleteSubmit}
        onClose={onDeleteCancel}
        deleteState={deleteState}
      />
    </Page>
  );
};

export { CategoriesPage };
