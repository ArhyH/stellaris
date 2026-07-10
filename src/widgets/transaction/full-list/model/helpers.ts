import { SortConfig, SortField } from '../../data';

const getButtonState = (field: SortField, sortConfig: SortConfig) => ({
  isActive: sortConfig.field === field,
  isRotated: sortConfig.field === field && sortConfig.direction === 'asc',
});

export { getButtonState };
