import {
  SegmentedControlProps,
  segmentedControlProps,
} from '@/shared/ui/SegmentedControl';
import { FilterMode } from '../ui/types';
import { filterModes } from '..';

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

export { getFilterSettings };
