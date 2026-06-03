import { SegmentedControl } from '@/shared/ui/SegmentedControl';
import { ValueOf } from 'type-fest';
import { filterTypes } from './consts';
// import { useState } from 'react';

type FilterByTypeProps = {
  onChange: (filter: FilterType) => void;
};

type FilterType = ValueOf<typeof filterTypes>;

const DEFAULT_FILTER: FilterType = filterTypes.all;

const FILTERS = [
  { label: 'All', value: filterTypes.all },
  { label: 'Income', value: filterTypes.income },
  { label: 'Expense', value: filterTypes.expense },
];

const FilterByType = (props: FilterByTypeProps) => {
  const { onChange } = props;

  // const [filterConfig, setFilterConfig] = useState<FilterType>(DEFAULT_FILTER);

  return (
    <SegmentedControl
      options={FILTERS}
      defaultValue={FILTERS[0].value}
      onChange={(value) => {
        // setFilterConfig(value as FilterType);
        onChange(value as FilterType);
      }}
    />
  );
};

export { FilterByType, DEFAULT_FILTER };
export type { FilterByTypeProps, FilterType };
