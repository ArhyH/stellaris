import {
  Dialog,
  DialogBody,
  DialogClose,
  DialogContent,
  DialogHeader,
} from '@/shared/ui/Dialog';
import { Button, buttonProps } from '@/shared/ui/Button';
import { Icon } from '@/shared/ui/Icon';
import { icons } from '@/shared/assets';
import { colors, sizes } from '@/shared/styles';
import { Typography, typographyProps } from '@/shared/ui/Typography';
import { Box, BoxScrollWrapper, BoxWrapper, boxProps } from '@/shared/ui/Box';
import { Category } from '@/entity/category';
import { IconName, categoriesIcons } from '@/shared/assets/icons/icons';
import { Input } from '@/shared/ui/Input';
import { useState } from 'react';
import { FinanceTransferTypes } from '@/shared/consts';
import {
  SegmentedControl,
  segmentedControlProps,
} from '@/shared/ui/SegmentedControl';
import { FinanceTransferType } from '@/shared/types';
import { Cell } from '@/shared/ui/Cell';

type AddCategoryProps = {
  onSubmit: () => void;
};

const AddCategory = (props: AddCategoryProps) => {
  const { onSubmit } = props;

  const createInitialCategory = (): Category => ({
    name: '',
    icon: 'house24',
    iconColor: 'category-blue-1',
    color: 'category-blue-1',
    type: FinanceTransferTypes.expense,
    id: Date.now().toString(),
  });

  const [category, setCategory] = useState<Category>(createInitialCategory);

  const onClose = () => {
    setCategory(createInitialCategory());
  };

  const onNameChange = (value: string) => {
    setCategory((prevCategory) => ({
      ...prevCategory,
      name: value,
    }));
  };

  const onTypeChange = (value: FinanceTransferType) => {
    setCategory((prevCategory) => ({
      ...prevCategory,
      type: value,
    }));
  };

  const onIconChange = (value: IconName) => {
    setCategory((prevCategory) => ({
      ...prevCategory,
      icon: value,
    }));
  };

  const TYPES = [
    { label: 'Expense', value: FinanceTransferTypes.expense },
    { label: 'Income', value: FinanceTransferTypes.income },
  ];

  console.log(category);

  return (
    <Dialog onClose={onClose}>
      <Button theme={buttonProps.themes.green} size={buttonProps.sizes[40]}>
        <Icon
          icon={icons.plus24}
          width={sizes.sizes[16]}
          height={sizes.sizes[16]}
        />
        <Typography
          tag={typographyProps.tags.h3}
          type={typographyProps.types.title14}
        >
          Add Category
        </Typography>
      </Button>

      <DialogContent>
        <DialogHeader>
          <Typography
            tag={typographyProps.tags.h3}
            type={typographyProps.types.title18}
            color={colors.base.white}
          >
            Add Category
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
          <Box
            bgColor={colors.categoryOp[category.color]}
            size={boxProps.sizes[64]}
          >
            <BoxWrapper hasAlign>
              <Icon
                icon={icons[category.icon]}
                color={colors.category[category.color]}
                width={sizes.sizes[32]}
                height={sizes.sizes[32]}
              />
            </BoxWrapper>
          </Box>

          <Input
            value={category.name}
            placeholder="e.g. Groceries"
            onChange={onNameChange}
            name="category-name"
            label="Category Name"
          />

          <Cell width={sizes.sizes.parent} gap={sizes.sizes[6]}>
            <Typography
              type={typographyProps.types.text12}
              color={colors.lightgray[2]}
              textTransform={typographyProps.transforms.uppercase}
            >
              Type
            </Typography>

            <SegmentedControl
              size={segmentedControlProps.sizes[44]}
              theme={segmentedControlProps.themes.switch}
              type={segmentedControlProps.types.stretched}
              options={TYPES}
              defaultValue={category.type}
              onChange={(value) => {
                onTypeChange(value as FinanceTransferType);
              }}
            />
          </Cell>

          <Cell width={sizes.sizes.parent} gap={sizes.sizes[6]}>
            <Typography
              type={typographyProps.types.text12}
              color={colors.lightgray[2]}
              textTransform={typographyProps.transforms.uppercase}
            >
              Icon
            </Typography>

            <Box>
              <BoxScrollWrapper>
                {Object.entries(categoriesIcons).map(([key, value]) => (
                  <Button
                    size={buttonProps.sizes['36x36']}
                    theme={buttonProps.themes.transparentGray}
                    isActive={category.icon === key}
                    onClick={() => onIconChange(key as IconName)}
                    key={key}
                  >
                    <Icon icon={value} />
                  </Button>
                ))}
              </BoxScrollWrapper>
            </Box>
          </Cell>
        </DialogBody>
      </DialogContent>
    </Dialog>
  );
};

export { AddCategory };
export type { AddCategoryProps };
