import { Row, rowProps } from '@/shared/ui/Row';
import { colors, sizes } from '@/shared/styles';
import { Box, BoxWrapper } from '@/shared/ui/Box';
import { Icon } from '@/shared/ui/Icon';
import { Cell } from '@/shared/ui/Cell';
import { Typography, typographyProps } from '@/shared/ui/Typography';
import { Select, SelectOption } from '@/shared/ui/Select';

type PreferenceItemProps = {
  name: string;
  icon: UtilityTypes.SvgContent;
  description: string;
  options: SelectOption[];
  selectedSetting: string;
  onChange: (value: string) => void;
};

const PreferenceItem = (props: PreferenceItemProps) => {
  const { name, icon, description, options, selectedSetting, onChange } = props;

  const [placeholderValue] = [...options].filter(
    (option) => option.value === selectedSetting,
  );

  return (
    <Row
      justify={rowProps.justifies.spaceBetween}
      paddingVertical={sizes.sizes[16]}
    >
      <Row gap={sizes.sizes[12]}>
        <Box
          bgColor={colors.box['button-1']}
          size={sizes.sizes[36]}
          radius={sizes.radiuses[14]}
        >
          <BoxWrapper hasAlign>
            <Icon
              icon={icon}
              color={colors.lightgray[3]}
              size={sizes.sizes[18]}
            />
          </BoxWrapper>
        </Box>

        <Cell gap={sizes.sizes[2]}>
          <Typography
            type={typographyProps.types.title14}
            color={colors.base.white}
          >
            {name}
          </Typography>
          <Typography
            type={typographyProps.types.text12}
            color={colors.lightgray[1]}
          >
            {description}
          </Typography>
        </Cell>
      </Row>

      <Select
        options={options}
        value={selectedSetting}
        placeholderOption={placeholderValue}
        onChange={onChange}
        {...(name === 'Currency' && { width: sizes.sizes[216] })}
      />
    </Row>
  );
};

export { PreferenceItem };
export type { PreferenceItemProps };
