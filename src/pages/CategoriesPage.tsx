import { categoriesMock } from '@/shared/mocks/categories';
import { CategoriesSummary, getCategoriesSummary } from '@/widgets/summary';
import { Typography, typographyProps } from '@/shared/ui/Typography';
import { colors, sizes } from '@/shared/styles';
import { Row } from '@/shared/ui/Row/Row';
import { Button, buttonProps } from '@/shared/ui/Button';
import { Icon } from '@/shared/ui/Icon';
import { icons } from '@/shared/assets';
import { rowProps } from '@/shared/ui/Row/consts';
import { Page, PageCell } from './ui';
import { Categories, mapCategoriesToCategoryItems } from '@/widgets/categories';
import { transactionsMock } from '@/shared/mocks/transactions';
import { filterTransactionsByMonth } from '@/shared/helpers';
import { CategoriesFilter } from '@/widgets/categories-filter';
import { useCategoriesFilter } from './hooks';

const CategoriesPage = () => {
  const { setCurrentFilter, currentCategories } =
    useCategoriesFilter(categoriesMock);

  const now = new Date();
  const categoriesSummary = getCategoriesSummary(categoriesMock);
  const currentTransactions = filterTransactionsByMonth(transactionsMock, now);
  const categories = mapCategoriesToCategoryItems(
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
          <Button theme={buttonProps.themes.green} size={buttonProps.sizes[40]}>
            <Icon
              icon={icons.plus24}
              width={sizes.sizes[16]}
              height={sizes.sizes[16]}
            />
            <Typography
              tag={typographyProps.tags.h3}
              type={typographyProps.types.title14}
            >
              Add Category
            </Typography>
          </Button>
        </PageCell>
      </Row>

      <CategoriesSummary summaries={categoriesSummary} />

      <CategoriesFilter onFilterChange={setCurrentFilter} />

      <Categories categories={categories} />
    </Page>
  );
};

export { CategoriesPage };
