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
import { useBudgetsData } from '../model/useBudgetsData';
import { AddBudget } from '@/features/AddBudget';
import { getPageCallbacks } from '../model/getPageCallbacks';
import { getSelectOptions } from '../model/helpers';

const BudgetsPage = () => {
  const {
    budgets,
    budgetsList,
    activeCategories,
    budgetData,
    budgetSummaries,
  } = useBudgetsData();

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
          <Button
            theme={buttonProps.themes.green}
            height={sizes.sizes[40]}
            paddingVertical={sizes.sizes[10]}
            paddingHorizontal={sizes.sizes[16]}
            onClick={onOpen}
          >
            <Icon icon={icons.plus24} size={sizes.sizes[16]} />
            <Typography
              tag={typographyProps.tags.h3}
              type={typographyProps.types.title14}
            >
              Add Budget
            </Typography>
          </Button>
        </PageCell>
      </Row>

      <BudgetSummary summaries={budgetSummaries} />

      {isOpen && (
        <AddBudget
          selectOptions={getSelectOptions(activeCategories, budgetsList)}
          onSubmit={onSubmit}
          onClose={onClose}
        />
      )}

      <BudgetList
        budgets={budgetData}
        selectOptions={getSelectOptions(
          activeCategories,
          budgetsList,
          editingBudget,
        )}
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
