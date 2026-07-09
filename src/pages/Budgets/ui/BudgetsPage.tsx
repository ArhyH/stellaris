import { Typography, typographyProps } from '@/shared/ui/Typography';
import { colors, sizes } from '@/shared/styles';
import { BudgetList } from '@/widgets/budget';
import { Row } from '@/shared/ui/Row/Row';
import { Button, buttonProps } from '@/shared/ui/Button';
import { Icon } from '@/shared/ui/Icon';
import { icons } from '@/shared/assets';
import { rowProps } from '@/shared/ui/Row/consts';
import { BudgetSummary } from '@/widgets/summary';
import { Page, PageCell } from '@/shared/ui/Page';
import { useBudgetsPageData } from '../model/useBudgetsPageData';
import { AddBudget, useAddBudget, useEditBudget } from '@/features/budget';
import { getPageCallbacks } from '../model/getPageCallbacks';
import { Box } from '@/shared/ui/Box';

const BudgetsPage = () => {
  const {
    budgets,
    budgetsData,
    budgetSummaries,
    isCreateBudgetEnabled,
    hasCategories,
    allActiveCategoriesWithBudget,
  } = useBudgetsPageData();

  const {
    isOpen,
    editingBudget,
    onSubmit,
    onOpen,
    onClose,
    onEdit,
    onEditSubmit,
    onEditClose,
    deleteBudget,
  } = getPageCallbacks(budgets);

  const addBudgetSelectItems = useAddBudget();
  const editBudgetSelectItems = useEditBudget(editingBudget);

  return (
    <Page>
      <Row justify={rowProps.justifies.spaceBetween}>
        <PageCell gap={sizes.sizes[4]}>
          <Typography
            type={typographyProps.types.title28}
            color={colors.base.white}
            tag={typographyProps.tags.h1}
          >
            Budgets
          </Typography>

          <Typography
            type={typographyProps.types.text14}
            color={colors.lightgray[2]}
          >
            Set and track spending limits by category
          </Typography>
        </PageCell>

        <PageCell>
          <Row gap={sizes.sizes[8]}>
            {!hasCategories && (
              <Box
                width={sizes.sizes[200]}
                bgColor={colors.base.transparent}
                gap={sizes.sizes[4]}
              >
                <Typography
                  type={typographyProps.types.text16}
                  color={colors.lightgray[3]}
                >
                  You don't have any expense categories yet.
                </Typography>
                <Typography
                  type={typographyProps.types.text16}
                  color={colors.lightgray[3]}
                >
                  Create your first category to start budgeting.
                </Typography>
              </Box>
            )}

            {allActiveCategoriesWithBudget && hasCategories && (
              <Box
                width={sizes.sizes[216]}
                bgColor={colors.base.transparent}
                gap={sizes.sizes[4]}
              >
                <Typography
                  type={typographyProps.types.text16}
                  color={colors.lightgray[3]}
                >
                  Every active expense category already has a budget.
                </Typography>
                <Typography
                  type={typographyProps.types.text16}
                  color={colors.lightgray[3]}
                >
                  Create another expense category to add a new budget.
                </Typography>
              </Box>
            )}

            <Button
              theme={buttonProps.themes.green}
              height={sizes.sizes[40]}
              paddingVertical={sizes.sizes[10]}
              paddingHorizontal={sizes.sizes[16]}
              onClick={onOpen}
              isDisabled={!isCreateBudgetEnabled}
            >
              <Icon icon={icons.plus24} size={sizes.sizes[16]} />
              <Typography
                tag={typographyProps.tags.h3}
                type={typographyProps.types.title14}
              >
                Add Budget
              </Typography>
            </Button>
          </Row>
        </PageCell>
      </Row>

      <BudgetSummary summaries={budgetSummaries} />

      {isOpen && (
        <AddBudget
          selectOptions={addBudgetSelectItems}
          onSubmit={onSubmit}
          onClose={onClose}
        />
      )}

      <BudgetList
        budgets={budgetsData}
        selectOptions={editBudgetSelectItems}
        editingBudget={editingBudget}
        onClose={onEditClose}
        onSubmit={onEditSubmit}
        onEdit={onEdit}
        onDelete={deleteBudget}
      />
    </Page>
  );
};

export { BudgetsPage };
