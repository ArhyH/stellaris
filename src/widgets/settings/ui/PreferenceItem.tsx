import { Row, rowProps } from '@/shared/ui/Row';
import { colors, sizes } from '@/shared/styles';
import { Box, BoxWrapper, boxProps } from '@/shared/ui/Box';
import { Icon } from '@/shared/ui/Icon';
import { Cell } from '@/shared/ui/Cell';
import { Typography, typographyProps } from '@/shared/ui/Typography';
import { Select, selectProps } from '@/shared/ui/Select';
import { Setting } from '../model/types';

type PreferenceItemProps = {
  name: string;
  icon: UtilityTypes.SvgContent;
  description: string;
  settings: Setting[];
  selectedSetting: string;
  onChange: (value: string) => void;
};

const mapSettingsToSelectOptions = (settings: Setting[]) => {
  return settings.map((item) => {
    return {
      value: item,
      description: item,
    };
  });
};

const PreferenceItem = (props: PreferenceItemProps) => {
  const { name, icon, description, settings, selectedSetting, onChange } =
    props;

  return (
    <Row
      justify={rowProps.justifies.spaceBetween}
      paddingVertical={sizes.sizes[16]}
    >
      <Row gap={sizes.sizes[12]}>
        <Box
          bgColor={colors.box['button-1']}
          size={boxProps.sizes[36]}
          radius={sizes.radiuses[14]}
        >
          <BoxWrapper hasAlign>
            <Icon
              icon={icon}
              color={colors.lightgray[3]}
              width={sizes.sizes[18]}
              height={sizes.sizes[18]}
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
        theme={selectProps.themes.gray6}
        options={mapSettingsToSelectOptions(settings)}
        value={selectedSetting}
        onChange={onChange}
        name={name}
      />
    </Row>
  );
};

export { PreferenceItem };
export type { PreferenceItemProps };
