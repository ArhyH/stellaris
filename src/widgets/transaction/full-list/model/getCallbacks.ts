import { Dispatch, SetStateAction } from 'react';
import { SortConfig, SortField, sortDirections } from '../../data';

const getCallbacks = (
  setSortConfig: Dispatch<SetStateAction<SortConfig>>,
  sortConfig: SortConfig,
) => {
  const handleSort = (nextField: SortField) => {
    if (sortConfig.field !== nextField) {
      return setSortConfig({
        field: nextField,
        direction: sortDirections.desc,
      });
    }

    return setSortConfig({
      field: sortConfig.field,
      direction: sortConfig.direction === 'desc' ? 'asc' : 'desc',
    });
  };

  return { handleSort };
};

export { getCallbacks };
