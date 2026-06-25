import { useState } from 'react';
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
import { Box, BoxWrapper, boxProps } from '@/shared/ui/Box';
import { Category } from '@/entity/category';
import { Row } from '@/shared/ui/Row';
import { createInitialCategory } from '../model/heplers';
import { getModalCallbacks } from '../model/getModalCallbacks';
import {
  CategoryName,
  CategoryType,
  CategoryIcon,
  CategoryColor,
  CategoryIconColor,
} from './parts';

type AddCategoryProps = {
  onSubmit: () => void;
};

const AddCategory = (props: AddCategoryProps) => {
  const { onSubmit } = props;

  const [category, setCategory] = useState<Category>(createInitialCategory);
  const {
    onClose,
    onNameChange,
    onTypeChange,
    onIconChange,
    onCategoryColorChange,
    onIconColorChange,
  } = getModalCallbacks(setCategory);

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

          <CategoryName name={category.name} onNameChange={onNameChange} />

          <CategoryType type={category.type} onTypeChange={onTypeChange} />

          <CategoryIcon icon={category.icon} onIconChange={onIconChange} />

          <Row gap={sizes.sizes[12]}>
            <CategoryColor
              color={category.color}
              onCategoryColorChange={onCategoryColorChange}
            />

            <CategoryIconColor
              iconColor={category.iconColor}
              onIconColorChange={onIconColorChange}
            />
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
