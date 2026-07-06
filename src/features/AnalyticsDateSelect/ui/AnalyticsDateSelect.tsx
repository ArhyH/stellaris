import { Row } from '@/shared/ui/Row';
import { Box } from '@/shared/ui/Box';
import { colors, sizes } from '@/shared/styles';
import { Button, buttonProps } from '@/shared/ui/Button';
import { Select } from '@/shared/ui/Select';
import { Typography, typographyProps } from '@/shared/ui/Typography';
import { useAnalyticsDateSelect } from '../model/useAnalyticsDateSelect';
import { getCallbacks } from '../model/getCallbacks';
import { buttonModes } from '../model/consts';
import { Icon } from '@/shared/ui/Icon';
import { icons } from '@/shared/assets';

type AnalyticsDateSelectProps = {
  transactionsKey: string | undefined;
  onChange: (value: string) => void;
};

const AnalyticsDateSelect = (props: AnalyticsDateSelectProps) => {
  const { transactionsKey, onChange } = props;

  const {
    index,
    isPrevDisabled,
    isNextDisabled,
    setectOptions,
    placeholder,
    transactionsDateKeys,
  } = useAnalyticsDateSelect(transactionsKey);

  if (!transactionsKey) {
    return;
  }

  const { onDateButtonClick, onDateChange } = getCallbacks(
    onChange,
    transactionsDateKeys,
    index,
  );

  return (
    <Box
      bgColor={colors.gray[4]}
      padding={sizes.sizes[16]}
      gap={sizes.sizes[12]}
    >
      <Typography
        type={typographyProps.types.title16}
        color={colors.base.white}
      >
        Select month for analytics
      </Typography>
      <Row gap={sizes.sizes[4]}>
        <Button
          theme={buttonProps.themes.gray1}
          height={sizes.sizes[36]}
          paddingHorizontal={sizes.sizes[12]}
          radius={sizes.sizes[8]}
          onClick={() => onDateButtonClick(buttonModes.prev)}
          isDisabled={isPrevDisabled}
        >
          <Icon icon={icons.arrowLeft24} size={sizes.sizes[14]} />
          <Typography
            type={typographyProps.types.text14}
            color={colors.base.white}
          >
            Prev
          </Typography>
        </Button>
        <Select
          value={transactionsKey}
          placeholderOption={placeholder}
          options={setectOptions}
          onChange={onDateChange}
        />
        <Button
          theme={buttonProps.themes.gray1}
          height={sizes.sizes[36]}
          paddingHorizontal={sizes.sizes[12]}
          radius={sizes.sizes[8]}
          onClick={() => onDateButtonClick(buttonModes.next)}
          isDisabled={isNextDisabled}
        >
          <Typography
            type={typographyProps.types.text14}
            color={colors.base.white}
          >
            Next
          </Typography>
          <Icon icon={icons.arrowRight24} size={sizes.sizes[14]} />
        </Button>
      </Row>
    </Box>
  );
};

export { AnalyticsDateSelect };
export type { AnalyticsDateSelectProps };
