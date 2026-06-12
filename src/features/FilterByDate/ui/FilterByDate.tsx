import { Row } from '@/shared/ui/Row/Row';
import { colors, sizes } from '@/shared/styles';
import { Icon } from '@/shared/ui/Icon';
import { icons } from '@/shared/assets';

import { Typography, typographyProps } from '@/shared/ui/Typography';

import { FieldPopover } from './FieldPopover';

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

      <FieldPopover onChange={onStartDateChange} />

      <Typography
        type={typographyProps.types.text12}
        color={colors.lightgray[1]}
      >
        to
      </Typography>

      <FieldPopover onChange={onEndDateChange} />
    </Row>
  );
};

export { FilterByDate };
export type { FilterByDateProps };
