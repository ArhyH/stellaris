import { AMOUNT, COLOR, ICON, ID, LABEL } from '@/shared/types/types';

interface PieChartItem {
  categoryId: ID;
  categoryColor: COLOR;
  categoryIcon: ICON;
  categoryName: LABEL;
  value: AMOUNT;
  percent: number;
}

export type { PieChartItem };
