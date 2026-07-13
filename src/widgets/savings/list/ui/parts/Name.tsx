import { Row } from '@/shared/ui/Row';
import { CategoryColor, colors, sizes } from '@/shared/styles';
import { Box, BoxWrapper } from '@/shared/ui/Box';
import { Icon } from '@/shared/ui/Icon';
import { icons } from '@/shared/assets';
import { Typography, typographyProps } from '@/shared/ui/Typography';
import { ICON } from '@/shared/types';

type NameProps = {
  icon: ICON;
  iconColor: CategoryColor;
  name: string;
  saved?: number;
};

const Name = (props: NameProps) => {
  const { icon, iconColor, name, saved } = props;

  return (
    <Row gap={sizes.sizes[16]}>
      <Box
        bgColor={colors.gray[5]}
        size={sizes.sizes[40]}
        radius={sizes.radiuses[12]}
      >
        <BoxWrapper hasAlign>
          <Icon icon={icons[icon]} color={iconColor} size={sizes.sizes[24]} />
        </BoxWrapper>
      </Box>

      <Box gap={sizes.sizes[4]}>
        <Typography
          type={typographyProps.types.text14}
          color={colors.base.white}
        >
          {name}
        </Typography>

        {saved !== undefined && (
          <Typography
            type={typographyProps.types.text12}
            color={colors.lightgray[2]}
          >
            {saved.toFixed(1)}% saved
          </Typography>
        )}
      </Box>
    </Row>
  );
};

export { Name };
