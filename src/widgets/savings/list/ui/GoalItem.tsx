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
import { Progress } from '@/shared/ui/Progress';
import { statusColors } from '../model/consts';
import { savingStatus } from '@/entity/saving';

type GoalItemProps = {
  saving: SavingItemType;
};

const GoalItem = (props: GoalItemProps) => {
  const { saving } = props;

  const {
    name,
    icon,
    amount,
    iconColor,
    goal,
    goalPercent,
    clampedPercent,
    status,
    remaining,
    overflow,
  } = saving;

  if (!goalPercent || !status) {
    return;
  }

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

            <Typography
              type={typographyProps.types.text12}
              color={colors.lightgray[2]}
            >
              {goalPercent.toFixed(1)}% saved
            </Typography>
          </Box>
        </Row>

        <Box>
          <Typography
            type={typographyProps.types.title18}
            color={
              status === savingStatus.normal
                ? colors.yellow[1]
                : colors.green[1]
            }
            textAlign={typographyProps.aligns.end}
          >
            {formatAmount({
              amount: amount,
              format: formatTypes.full,
            })}
          </Typography>
          <Typography
            type={typographyProps.types.text14}
            color={colors.lightgray[3]}
          >
            from{' '}
            <Typography type={typographyProps.types.subtitle16}>
              {formatAmount({
                amount: goal,
                format: formatTypes.full,
              })}
            </Typography>
          </Typography>
        </Box>

        {/* Buttons */}
      </Row>

      <Row>
        <Progress
          color={statusColors[status]}
          min={0}
          max={goal}
          percent={clampedPercent}
        />
      </Row>

      <Row justify={rowProps.justifies.spaceBetween}>
        <Typography
          type={typographyProps.types.text12}
          color={colors.lightgray[3]}
        >
          {formatAmount({
            amount: amount,
            format: formatTypes.full,
          })}{' '}
          saved
        </Typography>

        {remaining && remaining > 0 ? (
          <Typography
            type={typographyProps.types.text12}
            color={colors.lightgray[3]}
          >
            {formatAmount({
              amount: remaining,
              format: formatTypes.full,
            })}{' '}
            left
          </Typography>
        ) : (
          <Typography
            type={typographyProps.types.text12}
            color={colors.green[1]}
          >
            {formatAmount({
              amount: overflow ? overflow : 0,
              format: formatTypes.full,
            })}{' '}
            over
          </Typography>
        )}
      </Row>
    </li>
  );
};

export { GoalItem };
