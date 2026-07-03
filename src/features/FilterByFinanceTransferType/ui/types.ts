import { ValueOf } from 'type-fest';
import { filterTypes } from '..';
import { filterModes } from './consts';

type FilterByTypeValue = ValueOf<typeof filterTypes>;

type FilterMode = ValueOf<typeof filterModes>;

type FilterByTypeProps = {
  onChange: (filter: FilterByTypeValue) => void;
  filterMode: FilterMode;
};

export type { FilterByTypeValue, FilterMode, FilterByTypeProps };
