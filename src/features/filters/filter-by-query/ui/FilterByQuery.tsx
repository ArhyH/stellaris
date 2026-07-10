import { icons } from '@/shared/assets';
import { Input, inputProps } from '@/shared/ui/Input';

type FilterByQueryProps = {
  onChange: (value: string) => void;
  currentQuery: string;
  isDisabled?: boolean;
};

const FilterByQuery = (props: FilterByQueryProps) => {
  const { onChange, currentQuery, isDisabled } = props;

  return (
    <Input
      theme={inputProps.themes.lightgray}
      type={inputProps.types.regular}
      onChange={onChange}
      placeholder="Search transactions..."
      name="search"
      leftIcon={icons.search24}
      value={currentQuery}
      isDisabled={isDisabled}
    />
  );
};

export { FilterByQuery };
export type { FilterByQueryProps };
