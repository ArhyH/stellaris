import {
  SegmentedControl,
  SegmentedControlProps,
  segmentedControlProps,
} from '@/shared/ui/SegmentedControl';
import { FILTERS, filterModes } from './consts';
import { FilterByTypeProps, FilterMode, FilterType } from './types';

const getFilterSettings = (
  mode: FilterMode,
): Pick<SegmentedControlProps, 'size' | 'theme'> => {
  if (mode === filterModes.categories) {
    return {
      size: segmentedControlProps.sizes[44],
      theme: segmentedControlProps.themes.gray4,
    };
  }

  return {
    size: segmentedControlProps.sizes[36],
    theme: segmentedControlProps.themes.gray1,
  };
};

const FilterByType = (props: FilterByTypeProps) => {
  const { onChange, filterMode } = props;

  return (
    <SegmentedControl
      {...getFilterSettings(filterMode)}
      options={FILTERS}
      defaultValue={FILTERS[0].value}
      onChange={(value) => {
        onChange(value as FilterType);
      }}
    />
  );
};

export { FilterByType };
