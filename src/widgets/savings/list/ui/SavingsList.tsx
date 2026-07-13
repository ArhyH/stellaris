import { ID } from '@/shared/types';
import { SavingItem as SavingItemType } from '../model/types';
import { GoalItem } from './GoalItem';
import { RegularItem } from './RegularItem';
import { Grid, gridProps } from '@/shared/ui/Grid';

type SavingsListProps = {
  withGoal: SavingItemType[];
  withoutGoal: SavingItemType[];
  onEdit: (id: ID) => void;
  onDelete: (id: ID) => void;
};

const SavingsList = (props: SavingsListProps) => {
  const { withGoal, withoutGoal, onEdit, onDelete } = props;

  return (
    <>
      <Grid templateColumns={gridProps.columns['repeat-2']}>
        {withGoal.map((saving) => {
          return (
            <GoalItem
              saving={saving}
              key={saving.id}
              onDelete={onDelete}
              onEdit={onEdit}
            />
          );
        })}
      </Grid>

      <Grid templateColumns={gridProps.columns['repeat-2']}>
        {withoutGoal.map((saving) => {
          return (
            <RegularItem
              saving={saving}
              key={saving.id}
              onDelete={onDelete}
              onEdit={onEdit}
            />
          );
        })}
      </Grid>
    </>
  );
};

export { SavingsList };
export type { SavingsListProps };
