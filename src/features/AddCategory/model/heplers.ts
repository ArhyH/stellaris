import { Category } from '@/entity/category';
import { FinanceTransferTypes } from '@/shared/consts';
import { CategoryColor, colors } from '@/shared/styles';

const createInitialCategory = (): Category => ({
  name: '',
  icon: 'house24',
  iconColor: 'category-green-1',
  color: 'category-blue-1',
  type: FinanceTransferTypes.expense,
  id: Date.now().toString(),
});

const isDarkColor = (color: CategoryColor) =>
  color === colors.category['category-gray-1'] ||
  color === colors.category['category-black-1']
    ? true
    : false;

export { createInitialCategory, isDarkColor };
