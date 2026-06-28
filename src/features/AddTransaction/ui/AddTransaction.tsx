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
import { FinanceTransferTypes } from '@/shared/consts';
import {
  SegmentedControl,
  segmentedControlProps,
} from '@/shared/ui/SegmentedControl';
import { FinanceTransferType } from '@/shared/types';
import { SELECT_TYPES_DATA } from '@/shared/consts/consts';
import { Transaction } from '@/entity/transaction';
import { Box, boxProps } from '@/shared/ui/Box';
import { Row } from '@/shared/ui/Row';
import { Input, inputProps } from '@/shared/ui/Input';
import {
  getColor,
  getSign,
  isPositiveAmount,
  isValidInputAmount,
} from '../model/helpers';
import { Grid, gridProps } from '@/shared/ui/Grid';
import { AMOUNT_BUTTONS } from '../model/consts';

type AddTransactionProps = {
  onClose: () => void;
  onSubmit: (transaction: Transaction) => void;
};

type FormTransaction = Omit<Transaction, 'amount'> & {
  amount: string;
};

const AddTransaction = (props: AddTransactionProps) => {
  const { onClose, onSubmit } = props;

  const [transaction, setTransaction] = useState<FormTransaction>({
    id: Date().toString(),
    type: FinanceTransferTypes.expense,
    date: Date(),
    amount: '',
    categoryId: '',
    note: '',
  });

  const onTypeChange = (type: FinanceTransferType) => {
    setTransaction((prevTransaction) => ({
      ...prevTransaction,
      type,
    }));
  };

  const onValueChange = (amount: string) => {
    if (isValidInputAmount(amount)) {
      setTransaction((prevTransaction) => ({
        ...prevTransaction,
        amount,
      }));
    }
  };

  const onValueButtonClick = (value: string) => {
    setTransaction((prevTransaction) => {
      const amount =
        value === 'delete'
          ? prevTransaction.amount.slice(0, -1)
          : prevTransaction.amount + value;

      if (!isValidInputAmount(amount)) {
        return prevTransaction;
      }

      return {
        ...prevTransaction,
        amount,
      };
    });
  };

  const handleSubmit = () => {
    const amount = transaction.amount;

    if (!isPositiveAmount(amount)) {
      return;
    }

    const result = {
      ...transaction,
      amount: Number(amount),
    };

    onSubmit(result);
  };

  return (
    <Dialog onClose={onClose}>
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
          <SegmentedControl
            size={segmentedControlProps.sizes[44]}
            theme={segmentedControlProps.themes.switch}
            type={segmentedControlProps.types.stretched}
            options={SELECT_TYPES_DATA}
            defaultValue={SELECT_TYPES_DATA[0].value}
            onChange={(value) => {
              onTypeChange(value as FinanceTransferType);
            }}
          />

          <Box
            bgColor={colors.gray[1]}
            padding={sizes.sizes[16]}
            radius={sizes.radiuses[16]}
            gap={sizes.sizes[4]}
            size={boxProps.sizes.parent}
          >
            <Typography
              type={typographyProps.types.text12}
              textTransform={typographyProps.transforms.uppercase}
              color={colors.lightgray[2]}
              textAlign={typographyProps.aligns.center}
            >
              Amount
            </Typography>

            <Row color={getColor(transaction.type)}>
              <Input
                placeholder="0"
                name="transaction-amount"
                value={transaction.amount}
                theme={inputProps.themes.inherit}
                type={inputProps.types.transaction}
                onChange={onValueChange}
                sign={
                  <>
                    <Icon
                      icon={getSign(transaction.type)}
                      width={sizes.sizes[40]}
                      height={sizes.sizes[40]}
                    />

                    <Typography type={typographyProps.types.title40}>
                      $
                    </Typography>
                  </>
                }
              />
            </Row>
          </Box>

          <Grid
            templateColumns={gridProps.columns['repeat-3']}
            width={sizes.sizes.parent}
            gap={sizes.sizes[8]}
          >
            {AMOUNT_BUTTONS.map((item) => (
              <Button
                theme={buttonProps.themes.lightgray}
                size={buttonProps.sizes['48-stretched']}
                onClick={() => onValueButtonClick(item.value)}
              >
                {item.value !== 'delete' ? (
                  <Typography
                    type={typographyProps.types.text16}
                    color={colors.base.white}
                  >
                    {item.label as string}
                  </Typography>
                ) : (
                  <Icon
                    color={colors.base.white}
                    icon={item.label as UtilityTypes.SvgContent}
                  />
                )}
              </Button>
            ))}
          </Grid>

          <DialogClose>
            <Button
              theme={buttonProps.themes.green}
              size={buttonProps.sizes['44-stretched']}
              isDisabled={
                !isPositiveAmount(transaction.amount) && !transaction.categoryId
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
