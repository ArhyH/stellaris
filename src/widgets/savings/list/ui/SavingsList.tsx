import { SavingItem as SavingItemType } from '../model/types';
import { GoalItem } from './GoalItem';
import { RegularItem } from './RegularItem';
import { Grid, gridProps } from '@/shared/ui/Grid';

type SavingsListProps = {
  withGoal: SavingItemType[];
  withoutGoal: SavingItemType[];
};

const SavingsList = (props: SavingsListProps) => {
  const { withGoal, withoutGoal } = props;

  return (
    <>
      <Grid templateColumns={gridProps.columns['repeat-2']}>
        {withGoal.map((saving) => {
          return <GoalItem saving={saving} key={saving.id} />;
        })}
      </Grid>

      <Grid templateColumns={gridProps.columns['repeat-2']}>
        {withoutGoal.map((saving) => {
          return <RegularItem saving={saving} key={saving.id} />;
        })}
      </Grid>
    </>
  );
};

export { SavingsList };
export type { SavingsListProps };
