import styles from './style.module.scss';
import { Option } from './Option';
import { SelectProps } from './types';
import { Popover, PopoverContent } from '../Popover';
import { Button, ButtonIcon, buttonProps } from '../Button';
import { sizes } from '@/shared/styles';
import { Typography, typographyProps } from '../Typography';
import { Icon } from '../Icon';
import { icons } from '@/shared/assets';

const Select = (props: SelectProps) => {
  const {
    options,
    onChange,
    value,
    placeholderOption,
    isDisabled,
    isPlaceholderSelectable,
    width = sizes.sizes[140],
  } = props;

  const optionsMap = new Map(
    [...(isPlaceholderSelectable ? [placeholderOption] : []), ...options].map(
      (option) => [option.value, option],
    ),
  );

  const currentValue = optionsMap.get(value);

  return (
    <Popover>
      <Button
        height={sizes.sizes[36]}
        width={width}
        theme={buttonProps.themes.gray1}
        paddingVertical={sizes.sizes[8]}
        paddingHorizontal={sizes.sizes[12]}
        justify={buttonProps.justifies.spaceBetween}
        isDisabled={isDisabled}
        aria-haspopup="listbox"
      >
        <span className={styles.select__value}>
          {currentValue?.icon && (
            <Icon
              icon={currentValue?.icon}
              size={sizes.sizes[16]}
              color={currentValue.color}
            />
          )}

          <Typography type={typographyProps.types.text14}>
            {currentValue?.description ?? placeholderOption.description}
          </Typography>
        </span>

        <ButtonIcon>
          <Icon icon={icons.arrowDown14} size={sizes.sizes[12]} />
        </ButtonIcon>
      </Button>
      <PopoverContent>
        {({ onClose }) => (
          <ul className={styles.select__menu} role="listbox">
            {isPlaceholderSelectable && (
              <Option
                {...placeholderOption}
                onClick={() => {
                  onChange(placeholderOption.value);
                  onClose?.();
                }}
                isSelected={placeholderOption.value === currentValue?.value}
              />
            )}

            {options.map((option) => {
              return (
                <Option
                  key={option.value}
                  {...option}
                  onClick={() => {
                    onChange(option.value);
                    onClose?.();
                  }}
                  isSelected={option.value === currentValue?.value}
                />
              );
            })}
          </ul>
        )}
      </PopoverContent>
    </Popover>
  );
};

export { Select };
