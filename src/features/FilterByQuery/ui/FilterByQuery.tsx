import { icons } from '@/shared/assets';
import { Input, inputProps } from '@/shared/ui/Input';

type FilterByQueryProps = {
  onChange: (value: string) => void;
};

const FilterByQuery = (props: FilterByQueryProps) => {
  const { onChange } = props;

  return (
    <Input
      onChange={onChange}
      placeholder="Search transactions..."
      name="search"
      type={inputProps.types.text}
      leftIcon={icons.search24}
    />
  );
};

export { FilterByQuery };
export type { FilterByQueryProps };
