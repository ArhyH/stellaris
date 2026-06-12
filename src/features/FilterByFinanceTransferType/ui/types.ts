import { ValueOf } from 'type-fest';
import { filterTypes } from '..';
import { filterModes } from './consts';

type FilterType = ValueOf<typeof filterTypes>;

type FilterMode = ValueOf<typeof filterModes>;

type FilterByTypeProps = {
  onChange: (filter: FilterType) => void;
  filterMode: FilterMode;
};

export type { FilterType, FilterMode, FilterByTypeProps };
