import { ReactElement, useState } from 'react';
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
import { getModalCallbacks } from '../model/getModalCallbacks';
import { ColorPicker, IconPicker, NameField, TypeSelect } from './parts';

type CategoryFormProps = {
  title: string;
  currentCategory: Category;
  onSubmit: (category: Category) => void;
  children?: ReactElement;
  open?: boolean;
  onOpen?: (value: boolean) => void;
};

const CategoryForm = (props: CategoryFormProps) => {
  const { title, children, currentCategory, onSubmit, open, onOpen } = props;

  const [category, setCategory] = useState<Category>(currentCategory);

  const {
    onClose,
    onNameChange,
    onTypeChange,
    onIconChange,
    onCategoryColorChange,
    onIconColorChange,
  } = getModalCallbacks(setCategory, currentCategory);

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
              size={buttonProps.sizes['32x32']}
              radius={buttonProps.radiuses[14]}
            >
              <Icon icon={icons.cross14} size={sizes.sizes[14]} />
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
                size={sizes.sizes[38]}
              />
            </BoxWrapper>
          </Box>

          <NameField name={category.name} onNameChange={onNameChange} />

          <TypeSelect type={category.type} onTypeChange={onTypeChange} />

          <IconPicker icon={category.icon} onIconChange={onIconChange} />

          <Row gap={sizes.sizes[12]}>
            <ColorPicker
              color={category.color}
              onColorChange={onCategoryColorChange}
            />

            <ColorPicker
              color={category.iconColor}
              onColorChange={onIconColorChange}
            />
          </Row>

          <DialogClose>
            <Button
              theme={buttonProps.themes.green}
              size={buttonProps.sizes['44-stretched']}
              isDisabled={!category.name}
              onClick={() => onSubmit(category)}
            >
              <Typography
                tag={typographyProps.tags.h3}
                type={typographyProps.types.title14}
              >
                Save Category
              </Typography>
            </Button>
          </DialogClose>
        </DialogBody>
      </DialogContent>
    </Dialog>
  );
};

export { CategoryForm };
export type { CategoryFormProps };
