import { ReactNode } from 'react';
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
import { categoriesIcons } from '@/shared/assets/icons/icons';
import { Input } from '@/shared/ui/Input';

type AddCategoryModalProps = {
  onSubmit: () => void;
  category: Category;
  onNameChange: (value: string) => void;
};

const AddCategoryModal = (props: AddCategoryModalProps) => {
  const { onSubmit, onNameChange, category } = props;

  return (
    <Dialog>
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
            bgColor={
              colors.categoryOp[category?.color] ??
              colors.categoryOp['category-blue-1']
            }
            size={boxProps.sizes[64]}
          >
            <BoxWrapper hasAlign>
              <Icon
                icon={icons[category?.icon] ?? categoriesIcons.house24}
                color={
                  colors.category[category?.color] ??
                  colors.category['category-blue-1']
                }
              />
            </BoxWrapper>
          </Box>

          <Input
            value={category?.name}
            placeholder="e.g. Groceries"
            onChange={onNameChange}
            name="category-name"
            label="Category Name"
          />
        </DialogBody>
      </DialogContent>
    </Dialog>
  );
};

export { AddCategoryModal };
export type { AddCategoryModalProps };
