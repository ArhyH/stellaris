import styles from './style.module.scss';
import { SavingItem as SavingItemType } from '../model/types';
import { Row, rowProps } from '@/shared/ui/Row';
import { Box, BoxWrapper } from '@/shared/ui/Box';
import { colors, sizes } from '@/shared/styles';
import { Icon } from '@/shared/ui/Icon';
import { icons } from '@/shared/assets';
import { Typography, typographyProps } from '@/shared/ui/Typography';
import { formatAmount } from '@/shared/helpers';
import { formatTypes } from '@/shared/helpers/formatAmount';

type RegularItemProps = {
  saving: SavingItemType;
};

const RegularItem = (props: RegularItemProps) => {
  const { saving } = props;

  const { name, icon, amount, iconColor } = saving;

  return (
    <li className={styles['saving-item']}>
      <Row justify={rowProps.justifies.spaceBetween}>
        <Row gap={sizes.sizes[16]}>
          <Box
            bgColor={colors.gray[5]}
            size={sizes.sizes[40]}
            radius={sizes.radiuses[12]}
          >
            <BoxWrapper hasAlign>
              <Icon
                icon={icons[icon]}
                color={iconColor}
                size={sizes.sizes[24]}
              />
            </BoxWrapper>
          </Box>

          <Box>
            <Typography
              type={typographyProps.types.text14}
              color={colors.base.white}
            >
              {name}
            </Typography>
          </Box>
        </Row>

        <Box>
          <Row gap={sizes.sizes[12]} justify={rowProps.justifies.spaceBetween}>
            <Typography
              type={typographyProps.types.text14}
              color={colors.lightgray[3]}
            >
              No target set
            </Typography>
            <Typography
              type={typographyProps.types.title18}
              color={colors.green[1]}
              textAlign={typographyProps.aligns.end}
            >
              {formatAmount({
                amount: amount,
                format: formatTypes.full,
              })}
            </Typography>
          </Row>
        </Box>

        {/* Buttons */}
      </Row>
    </li>
  );
};

export { RegularItem };
export type { RegularItemProps };
