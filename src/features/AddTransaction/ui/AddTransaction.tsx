import { useState } from 'react';
import {
  Dialog,
  DialogBody,
  DialogClose,
  DialogContent,
  DialogHeader,
} from '@/shared/ui/Dialog';
import { Typography, typographyProps } from '@/shared/ui/Typography';
import { colors, sizes } from '@/shared/styles';
import { Button, buttonProps } from '@/shared/ui/Button';
import { Icon } from '@/shared/ui/Icon';
import { icons } from '@/shared/assets';
import { createTransaction, isPositiveAmount } from '../model/helpers';
import { Grid, gridProps } from '@/shared/ui/Grid';
import { getModalCallbacks } from '../model/getModalCallbacks';
import { AddTransactionProps, FormTransaction } from '../model/types';
import {
  AmountField,
  AmountButtons,
  CategoryPicker,
  DatePicker,
  NoteField,
  TypeSelect,
} from './parts';
import { useCurrentCategories } from '../model/useCurrentCategories';

const AddTransaction = (props: AddTransactionProps) => {
  const { categories, onSubmit } = props;

  const [transaction, setTransaction] =
    useState<FormTransaction>(createTransaction());

  const {
    onTypeChange,
    onValueChange,
    onValueButtonClick,
    onCategoryButtonClick,
    onDateChange,
    onNoteChange,
    handleSubmit,
  } = getModalCallbacks(transaction, setTransaction, onSubmit);

  const currentCategories = useCurrentCategories(categories, transaction.type);

  return (
    <Dialog onClose={() => setTransaction(createTransaction())}>
      <Button
        theme={buttonProps.themes.green}
        size={buttonProps.sizes['44-stretched']}
      >
        <Icon
          icon={icons.plus24}
          width={sizes.sizes[18]}
          height={sizes.sizes[18]}
        />
        <Typography
          tag={typographyProps.tags.h3}
          type={typographyProps.types.title14}
        >
          Add Transaction
        </Typography>
      </Button>

      <DialogContent>
        <DialogHeader>
          <Typography
            tag={typographyProps.tags.h3}
            type={typographyProps.types.title18}
            color={colors.base.white}
          >
            Add Transaction
          </Typography>

          <DialogClose>
            <Button
              theme={buttonProps.themes.lightgray}
              size={buttonProps.sizes['32x32']}
              radius={buttonProps.radiuses[14]}
            >
              <Icon
                icon={icons.cross14}
                width={sizes.sizes[14]}
                height={sizes.sizes[14]}
              />
            </Button>
          </DialogClose>
        </DialogHeader>

        <DialogBody>
          <TypeSelect onTypeChange={onTypeChange} />

          <AmountField
            type={transaction.type}
            amount={transaction.amount}
            onValueChange={onValueChange}
          />

          <AmountButtons onValueButtonClick={onValueButtonClick} />

          <CategoryPicker
            categories={currentCategories}
            transaction={transaction}
            onCategoryButtonClick={onCategoryButtonClick}
          />

          <Grid
            templateColumns={gridProps.columns['1-1']}
            gap={sizes.sizes[12]}
            width={sizes.sizes.parent}
          >
            <DatePicker onDateChange={onDateChange} />

            <NoteField value={transaction.note} onNoteChange={onNoteChange} />
          </Grid>

          <DialogClose>
            <Button
              theme={buttonProps.themes.green}
              size={buttonProps.sizes['44-stretched']}
              isDisabled={
                !isPositiveAmount(transaction.amount) || !transaction.categoryId
              }
              onClick={handleSubmit}
            >
              <Typography
                tag={typographyProps.tags.h3}
                type={typographyProps.types.title14}
              >
                Save Transaction
              </Typography>
            </Button>
          </DialogClose>
        </DialogBody>
      </DialogContent>
    </Dialog>
  );
};

export { AddTransaction };
export type { AddTransactionProps };
