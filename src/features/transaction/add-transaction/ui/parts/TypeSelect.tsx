import {
  SegmentedControl,
  segmentedControlProps,
} from '@/shared/ui/SegmentedControl';
import { SELECT_TYPES_DATA } from '@/shared/consts/consts';
import { FinanceTransferType } from '@/shared/types';

type TypeSelectProps = {
  onTypeChange: (value: string) => void;
  type: string;
};

const TypeSelect = (props: TypeSelectProps) => {
  const { onTypeChange, type } = props;

  return (
    <SegmentedControl
      size={segmentedControlProps.sizes[44]}
      theme={segmentedControlProps.themes.switch}
      type={segmentedControlProps.types.stretched}
      options={SELECT_TYPES_DATA}
      defaultValue={type}
      onChange={(value) => {
        onTypeChange(value as FinanceTransferType);
      }}
    />
  );
};

export { TypeSelect };
