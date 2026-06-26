import { icons } from '@/shared/assets';
import { FormCell } from '../FormCell';
import { CategoryColor, colors, sizes } from '@/shared/styles';
import { Button, buttonProps } from '@/shared/ui/Button';
import { Icon } from '@/shared/ui/Icon';
import { isDarkColor } from '../../model/heplers';

type CategoryIconColorProps = {
  iconColor: CategoryColor;
  onIconColorChange: (value: CategoryColor) => void;
};

const CategoryIconColor = (props: CategoryIconColorProps) => {
  const { iconColor, onIconColorChange } = props;

  return (
    <FormCell title="Icon Color" hasScroll>
      {Object.entries(colors.category).map(([key, value]) => (
        <Button
          size={buttonProps.sizes['28x28']}
          radius={sizes.radiuses.half}
          onClick={() => onIconColorChange(key as CategoryColor)}
          bgColor={value}
          key={key}
        >
          {key === iconColor && (
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

export { CategoryIconColor };
export type { CategoryIconColorProps };
