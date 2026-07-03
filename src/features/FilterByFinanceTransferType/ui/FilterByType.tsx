import { SegmentedControl } from '@/shared/ui/SegmentedControl';
import { FILTERS } from './consts';
import { FilterByTypeProps, FilterByTypeValue } from './types';
import { getFilterSettings } from '../model/helpers';

const FilterByType = (props: FilterByTypeProps) => {
  const { onChange, filterMode } = props;

  return (
    <SegmentedControl
      {...getFilterSettings(filterMode)}
      options={FILTERS}
      defaultValue={FILTERS[0].value}
      onChange={(value) => {
        onChange(value as FilterByTypeValue);
      }}
    />
  );
};

export { FilterByType };
