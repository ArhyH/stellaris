import { icons } from '@/shared/assets';
import { Input } from '@/shared/ui/Input';

type FilterByQueryProps = {
  onChange: (value: string) => void;
  currentQuery: string;
};

const FilterByQuery = (props: FilterByQueryProps) => {
  const { onChange, currentQuery } = props;

  return (
    <Input
      onChange={onChange}
      placeholder="Search transactions..."
      name="search"
      leftIcon={icons.search24}
      value={currentQuery}
    />
  );
};

export { FilterByQuery };
export type { FilterByQueryProps };
