import {
  SegmentedControl,
  segmentedControlProps,
} from '@/shared/ui/SegmentedControl';
import { FilterByArchivedValue } from '../model/types';
import { DEFAULT_FILTER, FILTERS } from '../model/consts';

type FilterByArchivedProps = {
  onChange: (filter: FilterByArchivedValue) => void;
};

const FilterByArchived = (props: FilterByArchivedProps) => {
  const { onChange } = props;

  return (
    <SegmentedControl
      size={segmentedControlProps.sizes[44]}
      theme={segmentedControlProps.themes.gray4}
      options={FILTERS}
      defaultValue={DEFAULT_FILTER}
      onChange={(value) => {
        onChange(value as FilterByArchivedValue);
      }}
    />
  );
};

export { FilterByArchived };
