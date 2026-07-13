import { CategoryColor, colors } from '@/shared/styles';

const isDarkColor = (color: CategoryColor) =>
  color === colors.category['category-gray-1'] ||
  color === colors.category['category-black-1']
    ? true
    : false;

export { isDarkColor };
