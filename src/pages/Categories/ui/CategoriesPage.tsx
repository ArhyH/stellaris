import { CategoriesSummary } from '@/widgets/summary';
import { Typography, typographyProps } from '@/shared/ui/Typography';
import { colors, sizes } from '@/shared/styles';
import { Row, rowProps } from '@/shared/ui/Row';
import { Page, PageCell } from '../../../shared/ui/Page';
import { CategoriesList, CategoriesFilter } from '@/widgets/category';
import { AddCategory, EditCategory, DeleteCategory } from '@/features/category';
import {
  useCategoriesData,
  useCategoriesFilter,
  useDeleteCategory,
  useEditCategory,
} from '../model';
import { useCategories } from '@/entity/category';

const CategoriesPage = () => {
  const { addCategory, editCategory } = useCategories();

  const {
    currentCategories,
    hasArchivedCategories,
    isFilterDisabled,
    onFilterTypeChange,
    onFilterStateChange,
  } = useCategoriesFilter();

  const { editingCategory, isEditOpen, handleEditCategory, setIsEditOpen } =
    useEditCategory();

  const {
    isDeleteOpen,
    deleteState,
    setIsDeleteOpen,
    handleCategoryDelete,
    onDeleteSubmit,
    onDeleteCancel,
  } = useDeleteCategory();

  const { categoriesSummary, categoryItems } =
    useCategoriesData(currentCategories);

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

      <CategoriesFilter
        onFilterTypeChange={onFilterTypeChange}
        onFilterStateChange={onFilterStateChange}
        hasArchivedCategories={hasArchivedCategories}
        isDisabled={isFilterDisabled}
      />

      <CategoriesList
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
