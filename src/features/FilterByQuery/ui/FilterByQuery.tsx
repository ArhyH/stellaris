import { icons } from '@/shared/assets';
import { Input } from '@/shared/ui/Input';

type FilterByQueryProps = {
  onChange: (value: string) => void;
};

const FilterByQuery = (props: FilterByQueryProps) => {
  const { onChange } = props;

  return (
    <Input
      onChange={onChange}
      placeholder="Search transactions..."
      icon={icons.search24}
    />
  );
};

export { FilterByQuery };
export type { FilterByQueryProps };
