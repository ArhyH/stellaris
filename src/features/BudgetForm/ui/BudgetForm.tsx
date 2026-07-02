import { Budget } from '@/entity/budget';
import { isPositiveAmount } from '@/shared/helpers';
import { colors, sizes } from '@/shared/styles';
import { Box } from '@/shared/ui/Box';
import { Grid, gridProps } from '@/shared/ui/Grid';
import { Input, inputProps } from '@/shared/ui/Input';
import { Select, SelectOption } from '@/shared/ui/Select';
import { Typography, typographyProps } from '@/shared/ui/Typography';
import { useState } from 'react';
import { Row } from '@/shared/ui/Row';
import { Button, buttonProps } from '@/shared/ui/Button';
import { Icon } from '@/shared/ui/Icon';
import { icons } from '@/shared/assets';
import { FormBudget } from '../model/types';
import { getModalCallbacks } from '../model/getModalCallbacks';

type BudgetFormProps = {
  title: string;
  currentBudget: FormBudget;
  isEditMode?: boolean;
  selectOptions: SelectOption[];
  onSubmit: (budget: Budget) => void;
  onClose: () => void;
};

const BudgetForm = (props: BudgetFormProps) => {
  const { title, currentBudget, isEditMode, selectOptions, onSubmit, onClose } =
    props;

  const [budget, setBudget] = useState<FormBudget>(currentBudget);

  const { onLimitChange, onCategoryChange, handleCancel, handleSubmit } =
    getModalCallbacks(budget, setBudget, onSubmit, onClose, currentBudget);

  return (
    <Box
      bgColor={colors.gray[4]}
      padding={sizes.sizes[20]}
      radius={sizes.radiuses[16]}
      gap={sizes.sizes[16]}
    >
      <Typography
        type={typographyProps.types.title14}
        color={colors.base.white}
      >
        {title}
      </Typography>

      <Grid templateColumns={gridProps.columns['1-1']} gap={sizes.sizes[12]}>
        <Box gap={sizes.sizes[6]}>
          <Typography
            type={typographyProps.types.text12}
            color={colors.lightgray[2]}
            textTransform={typographyProps.transforms.uppercase}
          >
            Category
          </Typography>

          <Select
            options={selectOptions}
            value={isEditMode ? currentBudget.categoryId : budget.categoryId}
            onChange={onCategoryChange}
            placeholderOption={{ value: '', description: 'Select Category...' }}
            width={sizes.sizes.parent}
            isDisabled={isEditMode}
          />
        </Box>

        <Input
          label="Monthly Limit ($)"
          theme={inputProps.themes.lightgray}
          type={inputProps.types.regular}
          placeholder="0"
          name="budget-limit"
          value={budget.limit}
          onChange={onLimitChange}
        />
      </Grid>

      <Row gap={sizes.sizes[8]}>
        <Button
          height={sizes.sizes[36]}
          paddingVertical={sizes.sizes[8]}
          paddingHorizontal={sizes.sizes[16]}
          theme={buttonProps.themes.green}
          isDisabled={!isPositiveAmount(budget.limit) || !budget.categoryId}
          onClick={handleSubmit}
        >
          <Icon icon={icons.check12} size={sizes.sizes[14]} />
          <Typography type={typographyProps.types.title14}>Save</Typography>
        </Button>

        <Button
          height={sizes.sizes[36]}
          paddingVertical={sizes.sizes[8]}
          paddingHorizontal={sizes.sizes[16]}
          theme={buttonProps.themes.lightgray}
          radius={sizes.radiuses[14]}
          onClick={handleCancel}
        >
          <Icon icon={icons.cross14} size={sizes.sizes[14]} />
          <Typography type={typographyProps.types.title14}>Cancel</Typography>
        </Button>
      </Row>
    </Box>
  );
};

export { BudgetForm };
