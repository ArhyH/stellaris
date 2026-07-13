import { ReactNode } from 'react';

type PickerProps<T> = {
  data: Record<string, T>;
  children: (item: { key: string; value: T }) => ReactNode;
};

const Picker = <T,>(props: PickerProps<T>) => {
  const { data, children } = props;

  return Object.entries(data).map(([key, value]) => children({ key, value }));
};

export { Picker };
export type { PickerProps };
