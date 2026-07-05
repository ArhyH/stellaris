type Grouped<T> = Record<string, T[]>;

const groupBy = <T>(items: T[], getKey: (item: T) => string): Grouped<T> => {
  return items.reduce<Grouped<T>>((acc, item) => {
    const key = getKey(item);
    acc[key] ??= [];
    acc[key].push(item);
    return acc;
  }, {});
};

const getGroupByKey = <T>(items: Grouped<T>, key: string): T[] =>
  items[key] ?? [];

export { groupBy, getGroupByKey };
