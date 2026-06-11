import { Row } from '@/shared/ui/Row/Row';
import { colors, sizes } from '@/shared/styles';
import { Icon } from '@/shared/ui/Icon';
import { icons } from '@/shared/assets';
import { Input, inputProps } from '@/shared/ui/Input';
import { Typography, typographyProps } from '@/shared/ui/Typography';
import { Button, buttonProps } from '@/shared/ui/Button';

type FilterByDateProps = {
  onStartDateChange: (value: string) => void;
  onEndDateChange: (value: string) => void;
};

const FilterByDate = (props: FilterByDateProps) => {
  const { onStartDateChange, onEndDateChange } = props;

  return (
    <Row gap={sizes.sizes[8]}>
      <Icon
        icon={icons.dateTrigger14}
        width={sizes.sizes[14]}
        height={sizes.sizes[14]}
        color={colors.lightgray[1]}
      />

      <Input
        type={inputProps.types.date}
        placeholder="дд.мм.гггг"
        name="start-date"
        onChange={onStartDateChange}
        rightElement={
          <Button
            size={buttonProps.sizes['18x18']}
            theme={buttonProps.themes.transparent}
          >
            <Icon
              icon={icons.calendar24}
              width={sizes.sizes[18]}
              height={sizes.sizes[18]}
              color={colors.base.white}
            />
          </Button>
        }
      />

      <Typography
        type={typographyProps.types.text12}
        color={colors.lightgray[1]}
      >
        to
      </Typography>

      <Input
        type={inputProps.types.date}
        placeholder="дд.мм.гггг"
        name="end-date"
        onChange={onEndDateChange}
        rightElement={
          <Button
            size={buttonProps.sizes['18x18']}
            theme={buttonProps.themes.transparent}
          >
            <Icon
              icon={icons.calendar24}
              width={sizes.sizes[18]}
              height={sizes.sizes[18]}
              color={colors.base.white}
            />
          </Button>
        }
      />
    </Row>
  );
};

export { FilterByDate };
export type { FilterByDateProps };
