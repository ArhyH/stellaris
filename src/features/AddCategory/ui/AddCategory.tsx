import { Button, buttonProps } from '@/shared/ui/Button';
import { Icon } from '@/shared/ui/Icon';
import { icons } from '@/shared/assets';
import { sizes } from '@/shared/styles';
import { Typography, typographyProps } from '@/shared/ui/Typography';
import { Category } from '@/entity/category';
import { createInitialCategory } from '../model/heplers';
import { CategoryForm } from '@/features/CategoryForm';

type AddCategoryProps = {
  onSubmit: (category: Category) => void;
};

const AddCategory = (props: AddCategoryProps) => {
  const { onSubmit } = props;

  return (
    <CategoryForm
      title="Add Category"
      currentCategory={createInitialCategory()}
      onSubmit={onSubmit}
    >
      <Button theme={buttonProps.themes.green} size={buttonProps.sizes[40]}>
        <Icon icon={icons.plus24} size={sizes.sizes[16]} />
        <Typography
          tag={typographyProps.tags.h3}
          type={typographyProps.types.title14}
        >
          Add Category
        </Typography>
      </Button>
    </CategoryForm>
  );
};

export { AddCategory };
export type { AddCategoryProps };
