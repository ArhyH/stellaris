import { Page, PageCell } from '@/shared/ui/Page';
import { colors, sizes } from '@/shared/styles';
import { Typography, typographyProps } from '@/shared/ui/Typography';
import { SavingsList, useSavingsList } from '@/widgets/savings';
import { HistoryList, useSavingsHistory } from '@/widgets/savings/history';
import { useSavingOperations } from '@/entity/saving-operation/model/hooks';

const SavingsPage = () => {
  const { savingOperationsList, deleteSavingOperation } = useSavingOperations();

  const historyItems = useSavingsHistory(savingOperationsList);

  const { withGoal, withoutGoal } = useSavingsList();

  // localStorage.removeItem('savingOperation');

  console.log(savingOperationsList);
  return (
    <Page>
      <PageCell gap={sizes.sizes[4]}>
        <Typography
          type={typographyProps.types.title28}
          color={colors.base.white}
          tag={typographyProps.tags.h1}
        >
          Savings Overview
        </Typography>

        <Typography
          type={typographyProps.types.text14}
          color={colors.lightgray[2]}
        >
          Manage your savings goals
        </Typography>
      </PageCell>

      <SavingsList withGoal={withGoal} withoutGoal={withoutGoal} />

      <HistoryList
        historyItems={historyItems}
        onDelete={deleteSavingOperation}
      />
    </Page>
  );
};

export { SavingsPage };
