import { FormCell } from './FormCell';
import { IconName, categoriesIcons } from '@/shared/assets/icons/icons';
import { sizes } from '@/shared/styles';
import { Button, buttonProps } from '@/shared/ui/Button';
import { Icon } from '@/shared/ui/Icon';

type IconPickerProps = {
  icon: string;
  onIconChange: (value: IconName) => void;
};

const IconPicker = (props: IconPickerProps) => {
  const { icon, onIconChange } = props;

  return (
    <FormCell title="Icon" hasScroll maxHeight={sizes.sizes[150]}>
      {Object.entries(categoriesIcons).map(([key, value]) => (
        <Button
          size={buttonProps.sizes['36x36']}
          theme={buttonProps.themes.transparentGray}
          isActive={icon === key}
          onClick={() => onIconChange(key as IconName)}
          key={key}
        >
          <Icon icon={value} />
        </Button>
      ))}
    </FormCell>
  );
};

export { IconPicker };
