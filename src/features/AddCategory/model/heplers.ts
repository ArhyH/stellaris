import { Category } from '@/entity/category';
import { FinanceTransferTypes } from '@/shared/consts';

const createInitialCategory = (): Category => ({
  name: '',
  icon: 'house24',
  iconColor: 'category-green-1',
  color: 'category-blue-1',
  type: FinanceTransferTypes.expense,
  id: Date.now().toString(),
});
export { createInitialCategory };
