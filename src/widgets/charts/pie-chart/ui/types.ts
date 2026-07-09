import { ValueOf } from 'type-fest';
import { pieChartProps } from './consts';
import { FinanceTransferType } from '@/shared/types';
import { PieChartItem } from '../model/types';
import { TooltipContentProps, DefaultLegendContentProps } from 'recharts';
import {
  NameType,
  ValueType,
} from 'recharts/types/component/DefaultTooltipContent';

type PieChartMode = ValueOf<typeof pieChartProps.modes>;

type PieChartProps = {
  type: FinanceTransferType;
  data: PieChartItem[];
  date: string;
  mode: PieChartMode;
};

type PieChartPlaceholderProps = {
  date: string;
  type: FinanceTransferType;
};

type CustomTooltipProps = TooltipContentProps<ValueType, NameType> & {
  mode: PieChartMode;
};

type CustomLegendProps = DefaultLegendContentProps & {
  mode: PieChartMode;
};

export type {
  PieChartMode,
  PieChartProps,
  PieChartPlaceholderProps,
  CustomTooltipProps,
  CustomLegendProps,
};
