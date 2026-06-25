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
import { CategoryColor, colors, sizes } from '@/shared/styles';
import { Typography, typographyProps } from '@/shared/ui/Typography';
import { Box, BoxWrapper, boxProps } from '@/shared/ui/Box';
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
import { FormCell } from './FormCell';
import { Row } from '@/shared/ui/Row';

type AddCategoryProps = {
  onSubmit: () => void;
};

const AddCategory = (props: AddCategoryProps) => {
  const { onSubmit } = props;

  const createInitialCategory = (): Category => ({
    name: '',
    icon: 'house24',
    iconColor: 'category-green-1',
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

  const onColorChange = (value: CategoryColor) => {
    setCategory((prevCategory) => ({
      ...prevCategory,
      color: value,
    }));
  };

  const onIconColorCHange = (value: CategoryColor) => {
    setCategory((prevCategory) => ({
      ...prevCategory,
      iconColor: value,
    }));
  };

  const TYPES = [
    { label: 'Expense', value: FinanceTransferTypes.expense },
    { label: 'Income', value: FinanceTransferTypes.income },
  ];

  const isDarkColor = (color: CategoryColor) =>
    color === colors.category['category-gray-1'] ||
    color === colors.category['category-black-1']
      ? true
      : false;

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
                color={colors.category[category.iconColor]}
                width={sizes.sizes[38]}
                height={sizes.sizes[38]}
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

          <FormCell title="Type">
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
          </FormCell>

          <FormCell title="Icon" hasScroll maxHeight={sizes.sizes[150]}>
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
          </FormCell>

          <Row gap={sizes.sizes[12]}>
            <FormCell title="color" hasScroll>
              {Object.entries(colors.category).map(([key, value]) => (
                <Button
                  size={buttonProps.sizes['28x28']}
                  radius={sizes.radiuses.half}
                  isActive={category.icon === key}
                  onClick={() => onColorChange(key as CategoryColor)}
                  bgColor={value}
                  key={key}
                >
                  {key === category.color && (
                    <Icon
                      icon={icons.check12}
                      color={
                        isDarkColor(key) ? colors.base.white : colors.base.black
                      }
                      width={sizes.sizes[14]}
                      height={sizes.sizes[14]}
                    />
                  )}
                </Button>
              ))}
            </FormCell>

            <FormCell title="Icon Color" hasScroll>
              {Object.entries(colors.category).map(([key, value]) => (
                <Button
                  size={buttonProps.sizes['28x28']}
                  radius={sizes.radiuses.half}
                  isActive={category.icon === key}
                  onClick={() => onIconColorCHange(key as CategoryColor)}
                  bgColor={value}
                  key={key}
                >
                  {key === category.iconColor && (
                    <Icon
                      icon={icons.check12}
                      color={
                        isDarkColor(key) ? colors.base.white : colors.base.black
                      }
                      width={sizes.sizes[14]}
                      height={sizes.sizes[14]}
                    />
                  )}
                </Button>
              ))}
            </FormCell>
          </Row>

          <Button
            theme={buttonProps.themes.green}
            size={buttonProps.sizes['44-stretched']}
            isDisabled={!category.name}
          >
            <Typography
              tag={typographyProps.tags.h3}
              type={typographyProps.types.title14}
            >
              Save Category
            </Typography>
          </Button>
        </DialogBody>
      </DialogContent>
    </Dialog>
  );
};

export { AddCategory };
export type { AddCategoryProps };
