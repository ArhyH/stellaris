import { FormCell } from './FormCell';
import { CategoryColor, colors, sizes } from '@/shared/styles';
import { Button } from '@/shared/ui/Button';
import { Icon } from '@/shared/ui/Icon';
import { icons } from '@/shared/assets';

import { Picker } from '@/shared/ui/Picker';
import { isDarkColor } from '../../model/heplers';

type ColorPickerProps = {
  color: CategoryColor;
  onColorChange: (value: CategoryColor) => void;
};

const ColorPicker = (props: ColorPickerProps) => {
  const { color, onColorChange } = props;

  return (
    <FormCell title="Color" hasScroll>
      <Picker data={colors.category}>
        {({ key, value }) => (
          <Button
            size={sizes.sizes['28']}
            radius={sizes.radiuses.half}
            onClick={() => onColorChange(key as CategoryColor)}
            bgColor={value}
            key={key}
          >
            {key === color && (
              <Icon
                icon={icons.check12}
                color={isDarkColor(key) ? colors.base.white : colors.base.black}
                size={sizes.sizes[14]}
              />
            )}
          </Button>
        )}
      </Picker>
    </FormCell>
  );
};

export { ColorPicker };
