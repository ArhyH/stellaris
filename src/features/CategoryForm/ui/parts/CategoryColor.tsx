import { FormCell } from '../FormCell';
import {
  CategoryColor as CategoryColorType,
  colors,
  sizes,
} from '@/shared/styles';
import { Button, buttonProps } from '@/shared/ui/Button';
import { Icon } from '@/shared/ui/Icon';
import { icons } from '@/shared/assets';
import { isDarkColor } from '../../model/heplers';

type CategoryColorProps = {
  color: CategoryColorType;
  onCategoryColorChange: (value: CategoryColorType) => void;
};

const CategoryColor = (props: CategoryColorProps) => {
  const { color, onCategoryColorChange } = props;

  return (
    <FormCell title="Category Color" hasScroll>
      {Object.entries(colors.category).map(([key, value]) => (
        <Button
          size={buttonProps.sizes['28x28']}
          radius={sizes.radiuses.half}
          onClick={() => onCategoryColorChange(key as CategoryColorType)}
          bgColor={value}
          key={key}
        >
          {key === color && (
            <Icon
              icon={icons.check12}
              color={isDarkColor(key) ? colors.base.white : colors.base.black}
              width={sizes.sizes[14]}
              height={sizes.sizes[14]}
            />
          )}
        </Button>
      ))}
    </FormCell>
  );
};

export { CategoryColor };
export type { CategoryColorProps };
