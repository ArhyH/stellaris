import { ColorToken } from '@/shared/styles';

type ProgressProps = {
  value?: number;
  percent?: number;
  min: number;
  max: number;
  color: ColorToken;
};

export type { ProgressProps };
