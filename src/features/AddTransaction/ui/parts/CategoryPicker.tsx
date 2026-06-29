import { Row } from '@/shared/ui/Row';
import { colors, sizes } from '@/shared/styles';
import { Category } from '@/entity/category';
import { Button, buttonProps } from '@/shared/ui/Button';
import { Icon } from '@/shared/ui/Icon';
import { icons } from '@/shared/assets';
import { Typography, typographyProps } from '@/shared/ui/Typography';
import { FormTransaction } from '../../model/types';

type CategoryPickerProps = {
  categories: Category[];
  transaction: FormTransaction;
  onCategoryButtonClick: (value: string) => void;
};

const CategoryPicker = (props: CategoryPickerProps) => {
  const { categories, transaction, onCategoryButtonClick } = props;

  return (
    <Row gap={sizes.sizes[8]} width={sizes.sizes.parent} wrap>
      {categories.map((category) => {
        const isActiveCategory = transaction.categoryId === category.id;

        return (
          <Button
            key={category.id}
            theme={buttonProps.themes.transparentCategory}
            height={sizes.sizes[34]}
            paddingVertical={sizes.sizes[6]}
            paddingHorizontal={sizes.sizes[12]}
            activeBgColor={category.color}
            isActive={isActiveCategory}
            onClick={() => onCategoryButtonClick(category.id)}
          >
            <Icon
              icon={icons[category.icon]}
              size={sizes.sizes[14]}
              color={isActiveCategory ? colors.base.black : category.color}
            />
            <Typography type={typographyProps.types.text14}>
              {category.name}
            </Typography>
          </Button>
        );
      })}
    </Row>
  );
};

export { CategoryPicker };
