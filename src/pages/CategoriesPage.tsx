import { categoriesMock } from '@/shared/mocks/categories';
import { CategoriesSummary, getCategoriesSummary } from '@/widgets/summary';
import { Typography, typographyProps } from '@/shared/ui/Typography';
import { colors, sizes } from '@/shared/styles';
import { Row } from '@/shared/ui/Row/Row';
import { rowProps } from '@/shared/ui/Row/consts';
import { Page, PageCell } from './ui';
import { Categories, mapCategoriesToCategoryItems } from '@/widgets/categories';
import { transactionsMock } from '@/shared/mocks/transactions';
import { filterTransactionsByMonth } from '@/shared/helpers';
import { CategoriesFilter } from '@/widgets/categories-filter';
import { useCategoriesFilter } from './hooks';
import { AddCategory } from '@/features/AddCategory';
import { Category } from '@/entity/category';
import { useState } from 'react';
import { CategoriesState } from './types/categories';

const CategoriesPage = () => {
  const [categories, setCategories] = useState<CategoriesState>(() =>
    categoriesMock.reduce<Record<string, Category>>((acc, category) => {
      acc[category.id] = category;
      return acc;
    }, {}),
  );

  const categoriesList = Object.values(categories);

  const { setCurrentFilter, currentCategories } =
    useCategoriesFilter(categoriesList);

  const now = new Date();
  const categoriesSummary = getCategoriesSummary(categoriesList);
  const currentTransactions = filterTransactionsByMonth(transactionsMock, now);
  const categoryItems = mapCategoriesToCategoryItems(
    currentCategories,
    currentTransactions,
  );

  const onCategoryCreate = (category: Category) => {
    setCategories((prevCategories) => ({
      ...prevCategories,
      [category.id]: category,
    }));
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
          <AddCategory onSubmit={onCategoryCreate} />
        </PageCell>
      </Row>

      <CategoriesSummary summaries={categoriesSummary} />

      <CategoriesFilter onFilterChange={setCurrentFilter} />

      <Categories categories={categoryItems} />
    </Page>
  );
};

export { CategoriesPage };
