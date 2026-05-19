import { CategoryColor } from '@/shared/styles';
import { AMOUNT, COLOR, ICON, ID, LABEL } from '@/shared/types';

interface PieChartItem {
  categoryId: ID;
  categoryColor: CategoryColor | undefined;
  categoryIcon: ICON | undefined;
  categoryName: LABEL;
  value: AMOUNT;
  percent: number;
  fill: COLOR;
}

export type { PieChartItem };
