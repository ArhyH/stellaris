import { ValueOf } from 'type-fest';
import { filterTypes } from './consts';

type FilterByArchivedValue = ValueOf<typeof filterTypes>;

export type { FilterByArchivedValue };
