import { Box, BoxWrapper, boxProps } from '@/shared/ui/Box';
import { CategoryItem as CategoryItemType } from '../model/types';
import styles from './style.module.scss';
import { colors, sizes } from '@/shared/styles';
import { Icon } from '@/shared/ui/Icon';
import { icons } from '@/shared/assets';
import { Typography, typographyProps } from '@/shared/ui/Typography';
import { Dot } from '@/shared/ui/Dot';
import { Button, buttonProps } from '@/shared/ui/Button';
import { Label, labelProps } from '@/shared/ui/Label';
import { FinanceTransferTypes } from '@/shared/consts';

type CategoryItemProps = {
  data: CategoryItemType;
};

const CategoryItem = (props: CategoryItemProps) => {
  const { data } = props;
  const {
    categoryName,
    categoryColor,
    categoryIconColor,
    categoryIcon,
    transactionsCount,
    type,
  } = data;

  return (
    <li className={styles.categories__item}>
      <Box
        bgColor={
          categoryColor
            ? colors.categoryOp[categoryColor]
            : colors.categoryOp['category-blue-1']
        }
        size={boxProps.sizes[40]}
        radius={sizes.radiuses[12]}
      >
        <BoxWrapper hasAlign>
          <Icon
            icon={categoryIcon ? icons[categoryIcon] : icons.wallet18}
            color={categoryIconColor}
          />
        </BoxWrapper>
      </Box>

      <div className={styles.categories__column}>
        <div className={styles.categories__row}>
          <Typography
            type={typographyProps.types.title14}
            color={colors.base.white}
          >
            {categoryName}
          </Typography>
          <Dot
            color={
              categoryColor
                ? colors.category[categoryColor]
                : colors.category['category-red-1']
            }
          />
        </div>

        <div className={styles.categories__row}>
          <Label
            bgColor={
              type === FinanceTransferTypes.income
                ? labelProps.bgColors.green
                : labelProps.bgColors.red
            }
          >
            <Typography type={typographyProps.types.text12}>{type}</Typography>
          </Label>
          <Typography
            type={typographyProps.types.text12}
            color={colors.lightgray[3]}
          >
            {transactionsCount}
            {transactionsCount === 1 ? ' transaction' : ' transactions'}
          </Typography>
        </div>
      </div>

      <div className={styles.categories__buttons}>
        <Button
          theme={buttonProps.themes.lightgray}
          size={buttonProps.sizes['32x32']}
        >
          <Icon
            icon={icons.pen24}
            width={sizes.sizes[12]}
            height={sizes.sizes[12]}
          />
        </Button>
        <Button
          theme={buttonProps.themes.red}
          size={buttonProps.sizes['32x32']}
        >
          <Icon
            icon={icons.trash24}
            width={sizes.sizes[12]}
            height={sizes.sizes[12]}
          />
        </Button>
      </div>
    </li>
  );
};

export { CategoryItem };
export type { CategoryItemProps };
