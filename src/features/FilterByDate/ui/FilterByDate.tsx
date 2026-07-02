import { colors, sizes } from '@/shared/styles';
import { icons } from '@/shared/assets';

import { Icon } from '@/shared/ui/Icon';
import { Row } from '@/shared/ui/Row/Row';
import { Typography, typographyProps } from '@/shared/ui/Typography';
import { DatePicker } from '@/shared/ui/DatePicker';

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
        size={sizes.sizes[14]}
        color={colors.lightgray[1]}
      />

      <DatePicker onChange={onStartDateChange} name="filter-start-date" />

      <Typography
        type={typographyProps.types.text12}
        color={colors.lightgray[1]}
      >
        to
      </Typography>

      <DatePicker onChange={onEndDateChange} name="filter-end-date" />
    </Row>
  );
};

export { FilterByDate };
export type { FilterByDateProps };
