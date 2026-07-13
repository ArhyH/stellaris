import { Saving } from '@/entity/saving';
import { SavingForm } from '../../saving-form/ui/SavingForm';
import { Button, buttonProps } from '@/shared/ui/Button';
import { sizes } from '@/shared/styles';
import { Icon } from '@/shared/ui/Icon';
import { icons } from '@/shared/assets';
import { Typography, typographyProps } from '@/shared/ui/Typography';
import { createInitialSaving } from '../model/helpers';

type AddSavingProps = {
  onSubmit: (saving: Saving) => void;
};

const AddSaving = (props: AddSavingProps) => {
  const { onSubmit } = props;

  return (
    <SavingForm
      title="Add Saving"
      onSubmit={onSubmit}
      currentSaving={createInitialSaving()}
    >
      <Button
        theme={buttonProps.themes.green}
        height={sizes.sizes[40]}
        paddingVertical={sizes.sizes[10]}
        paddingHorizontal={sizes.sizes[16]}
      >
        <Icon icon={icons.plus24} size={sizes.sizes[16]} />
        <Typography
          tag={typographyProps.tags.h3}
          type={typographyProps.types.title14}
        >
          Add Saving
        </Typography>
      </Button>
    </SavingForm>
  );
};

export { AddSaving };
export type { AddSavingProps };
