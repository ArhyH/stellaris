import { Typography, typographyProps } from '@/shared/ui/Typography';
import { HistoryItem as HistoryItemType } from '../model/types';
import styles from './style.module.scss';
import { colors, sizes } from '@/shared/styles';
import { Row } from '@/shared/ui/Row';
import { Box, BoxWrapper } from '@/shared/ui/Box';
import { Icon } from '@/shared/ui/Icon';
import { icons } from '@/shared/assets';
import { formatAmount } from '@/shared/helpers';
import { formatTypes } from '@/shared/helpers/formatAmount';
import { Button, buttonProps } from '@/shared/ui/Button';
import { ID } from '@/shared/types';

type HistoryItemProps = {
  item: HistoryItemType;
  onDelete: (value: ID) => void;
};

const HistoryItem = (props: HistoryItemProps) => {
  const { item } = props;

  const {
    amount,
    savingId,
    sourceId,
    source,
    type,
    savingIcon,
    savingIconColor,
    date,
    id,
  } = item;

  return (
    <li className={styles['history-list__item']}>
      <Typography
        type={typographyProps.types.text14}
        color={colors.lightgray[6]}
      >
        {date}
      </Typography>

      <Typography
        type={typographyProps.types.text12}
        color={colors.lightgray[3]}
        tag={typographyProps.tags.p}
      >
        {type}
      </Typography>

      <Box size={sizes.sizes[32]} radius={sizes.radiuses[14]}>
        <BoxWrapper hasAlign>
          <Icon
            icon={savingIcon ? icons[savingIcon] : icons.coins24}
            color={savingIconColor}
            size={sizes.sizes[20]}
          />
        </BoxWrapper>
      </Box>

      <Row gap={sizes.sizes[8]}>
        {sourceId ? (
          <Typography
            type={typographyProps.types.text14}
            color={colors.base.white}
            tag={typographyProps.tags.p}
          >
            {sourceId}
          </Typography>
        ) : (
          <Typography
            type={typographyProps.types.text14}
            color={colors.base.white}
            tag={typographyProps.tags.p}
          >
            {source}
          </Typography>
        )}
        <Icon
          icon={icons.arrowRight12}
          size={sizes.sizes[16]}
          color={colors.lightgray[3]}
        />

        <Typography
          type={typographyProps.types.text14}
          color={colors.base.white}
          tag={typographyProps.tags.p}
        >
          {savingId}
        </Typography>
      </Row>

      <Typography
        type={typographyProps.types.title14}
        textAlign={typographyProps.aligns.end}
        color={colors.green[1]}
      >
        {formatAmount({ amount: amount, format: formatTypes.full })}
      </Typography>

      <div className={styles['history-list__button']}>
        <Button
          theme={buttonProps.themes.transparentRed}
          size={sizes.sizes['32']}
          // onClick={() => onDelete(id)}
        >
          <Icon icon={icons.trash24} size={sizes.sizes[12]} />
        </Button>
      </div>
    </li>
  );
};

export { HistoryItem };
export type { HistoryItemProps };
