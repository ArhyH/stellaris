import { FormCell } from '../FormCell';
import {
  SegmentedControl,
  segmentedControlProps,
} from '@/shared/ui/SegmentedControl';
import { TYPES } from '../../model/consts';
import { FinanceTransferType } from '@/shared/types';

type CategoryTypeProps = {
  type: string;
  onTypeChange: (value: string) => void;
};

const CategoryType = (props: CategoryTypeProps) => {
  const { type, onTypeChange } = props;

  return (
    <FormCell title="Type">
      <SegmentedControl
        size={segmentedControlProps.sizes[44]}
        theme={segmentedControlProps.themes.switch}
        type={segmentedControlProps.types.stretched}
        options={TYPES}
        defaultValue={type}
        onChange={(value) => {
          onTypeChange(value as FinanceTransferType);
        }}
      />
    </FormCell>
  );
};

export { CategoryType };
export type { CategoryTypeProps };
