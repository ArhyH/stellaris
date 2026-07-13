import styles from '../style.module.scss';
import { Button, buttonProps } from '@/shared/ui/Button';
import { sizes } from '@/shared/styles';
import { Icon } from '@/shared/ui/Icon';
import { icons } from '@/shared/assets';

type ButtonsProps = {
  onOperationAdd: () => void;
  onEdit: () => void;
  onDelete: () => void;
};

const Buttons = (props: ButtonsProps) => {
  const { onOperationAdd, onEdit, onDelete } = props;

  return (
    <div className={styles['saving-item__buttons']}>
      <Button
        theme={buttonProps.themes.green}
        height={sizes.sizes[32]}
        paddingHorizontal={sizes.sizes[12]}
        radius={sizes.radiuses[12]}
        onClick={onOperationAdd}
      >
        Add Operation
      </Button>

      <Button
        theme={buttonProps.themes.lightgray}
        size={sizes.sizes[32]}
        radius={sizes.radiuses[12]}
        onClick={onEdit}
      >
        <Icon icon={icons.pen24} size={sizes.sizes[12]} />
      </Button>

      <Button
        theme={buttonProps.themes.transparentRed}
        size={sizes.sizes[32]}
        paddingHorizontal={sizes.sizes[12]}
        radius={sizes.radiuses[12]}
        onClick={onDelete}
      >
        <Icon icon={icons.trash24} size={sizes.sizes[12]} />
      </Button>
    </div>
  );
};

export { Buttons };
