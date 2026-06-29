import { FormCell } from './FormCell';
import {
  SegmentedControl,
  segmentedControlProps,
} from '@/shared/ui/SegmentedControl';
import { FinanceTransferType } from '@/shared/types';
import { SELECT_TYPES_DATA } from '@/shared/consts/consts';

type TypeSelectProps = {
  type: string;
  onTypeChange: (value: string) => void;
};

const TypeSelect = (props: TypeSelectProps) => {
  const { type, onTypeChange } = props;

  return (
    <FormCell title="Type">
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
    </FormCell>
  );
};

export { TypeSelect };
