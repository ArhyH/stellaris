import { ReactElement, useState } from 'react';
import {
  Dialog,
  DialogBody,
  DialogClose,
  DialogContent,
  DialogHeader,
} from '@/shared/ui/Dialog';
import { Typography, typographyProps } from '@/shared/ui/Typography';
import { CategoryColor, colors, sizes } from '@/shared/styles';
import { Button, buttonProps } from '@/shared/ui/Button';
import { Icon } from '@/shared/ui/Icon';
import { IconName, icons } from '@/shared/assets';
import { Box, BoxWrapper } from '@/shared/ui/Box';
import { Saving } from '@/entity/saving';
import { NameField } from './parts';
import { capitalizeFirstLetter, isValidInputAmount } from '@/shared/helpers';
import { IconPicker } from './parts/IconPicker';
import { ColorPicker } from './parts/ColorPicker';
import { GoalField } from './parts/GoalField';
import { Row } from '@/shared/ui/Row';

type SavingFormProps = {
  currentSaving: FormSaving;
  onSubmit: (saving: Saving) => void;
  title: string;
  children?: ReactElement;
  onOpen?: (value: boolean) => void;
  open?: boolean;
};

type FormSaving = Omit<Saving, 'goal'> & {
  goal?: string;
};

const SavingForm = (props: SavingFormProps) => {
  const { currentSaving, title, onSubmit, children, onOpen, open } = props;

  const [saving, setSaving] = useState<FormSaving>(currentSaving);

  const onClose = () => {
    setSaving(currentSaving);
  };

  const onNameChange = (name: string) => {
    setSaving((prev) => ({
      ...prev,
      name: capitalizeFirstLetter(name),
    }));
  };

  const onIconChange = (icon: IconName) => {
    setSaving((prev) => ({
      ...prev,
      icon,
    }));
  };

  const onColorChange = (iconColor: CategoryColor) => {
    setSaving((prev) => ({
      ...prev,
      iconColor,
    }));
  };

  const onGoalChange = (goal: string) => {
    if (isValidInputAmount(goal)) {
      setSaving((prev) => ({
        ...prev,
        goal,
      }));
    }
  };

  const handleSubmit = (): Saving | undefined => {
    const goal = saving.goal;

    if (goal && Number(goal) < 0) {
      return;
    }

    const result = {
      ...saving,
      goal: Number(goal),
    };

    onSubmit(result);
  };

  return (
    <Dialog onClose={onClose} onOpen={onOpen} open={open}>
      {children}

      <DialogContent>
        <DialogHeader>
          <Typography
            tag={typographyProps.tags.h3}
            type={typographyProps.types.title18}
            color={colors.base.white}
          >
            {title}
          </Typography>

          <DialogClose>
            <Button
              theme={buttonProps.themes.lightgray}
              size={sizes.sizes['32']}
              radius={sizes.radiuses[14]}
            >
              <Icon icon={icons.cross14} size={sizes.sizes[14]} />
            </Button>
          </DialogClose>
        </DialogHeader>

        <DialogBody>
          <Box bgColor={colors.gray[5]} size={sizes.sizes[64]}>
            <BoxWrapper hasAlign>
              <Icon
                icon={icons[saving.icon]}
                color={colors.category[saving.iconColor]}
                size={sizes.sizes[38]}
              />
            </BoxWrapper>
          </Box>

          <Row>
            <NameField value={saving.name} onNameChange={onNameChange} />

            <GoalField value={saving.goal} onGoalChange={onGoalChange} />
          </Row>

          <IconPicker icon={saving.icon} onIconChange={onIconChange} />

          <ColorPicker color={saving.iconColor} onColorChange={onColorChange} />

          <DialogClose>
            <Button
              theme={buttonProps.themes.green}
              height={sizes.sizes[44]}
              width={sizes.sizes.parent}
              isDisabled={!saving.name}
              onClick={handleSubmit}
            >
              <Typography
                tag={typographyProps.tags.h3}
                type={typographyProps.types.title14}
              >
                Save Saving
              </Typography>
            </Button>
          </DialogClose>
        </DialogBody>
      </DialogContent>
    </Dialog>
  );
};

export { SavingForm };
