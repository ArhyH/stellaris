import { SegmentedControl } from '@/shared/ui/SegmentedControl';
import { FILTERS } from './consts';
import { FilterByTypeProps, FilterByTypeValue } from './types';
import { getFilterSettings } from '../model/helpers';

const FilterByType = (props: FilterByTypeProps) => {
  const { onChange, filterMode, isDisabled } = props;

  return (
    <SegmentedControl
      {...getFilterSettings(filterMode)}
      options={FILTERS}
      defaultValue={FILTERS[0].value}
      isDisabled={isDisabled}
      onChange={(value) => {
        onChange(value as FilterByTypeValue);
      }}
    />
  );
};

export { FilterByType };
