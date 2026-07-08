import { Typography, typographyProps } from '@/shared/ui/Typography';
import { colors, sizes } from '@/shared/styles';
import { BudgetList } from '@/widgets/budget-overview';
import { Row } from '@/shared/ui/Row/Row';
import { Button, buttonProps } from '@/shared/ui/Button';
import { Icon } from '@/shared/ui/Icon';
import { icons } from '@/shared/assets';
import { rowProps } from '@/shared/ui/Row/consts';
import { BudgetSummary } from '@/widgets/summary';
import { Page, PageCell } from '@/shared/ui/Page';
import { useBudgetsPageData } from '../model/useBudgetsPageData';
import { AddBudget, useAddBudget } from '@/features/AddBudget';
import { getPageCallbacks } from '../model/getPageCallbacks';
import { useEditBudget } from '@/features/EditBudget';
import { Box } from '@/shared/ui/Box';

const BudgetsPage = () => {
  const { budgets, budgetData, budgetSummaries, hasCategories } =
    useBudgetsPageData();

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
              <Box width={sizes.sizes[180]} bgColor={colors.base.transparent}>
                <Typography
                  type={typographyProps.types.text16}
                  color={colors.lightgray[3]}
                >
                  Create a category first to start budgeting.
                </Typography>
              </Box>
            )}

            <Button
              theme={buttonProps.themes.green}
              height={sizes.sizes[40]}
              paddingVertical={sizes.sizes[10]}
              paddingHorizontal={sizes.sizes[16]}
              onClick={onOpen}
              isDisabled={!hasCategories}
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
        budgets={budgetData}
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
