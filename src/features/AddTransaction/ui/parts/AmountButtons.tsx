import { Grid, gridProps } from '@/shared/ui/Grid';
import { colors, sizes } from '@/shared/styles';
import { AMOUNT_BUTTONS } from '../../model/consts';
import { Button, buttonProps } from '@/shared/ui/Button';
import { Typography, typographyProps } from '@/shared/ui/Typography';
import { Icon } from '@/shared/ui/Icon';

type AmountButtonsProps = {
  onValueButtonClick: (value: string) => void;
};

const AmountButtons = (props: AmountButtonsProps) => {
  const { onValueButtonClick } = props;

  return (
    <Grid
      templateColumns={gridProps.columns['repeat-3']}
      width={sizes.sizes.parent}
      gap={sizes.sizes[8]}
    >
      {AMOUNT_BUTTONS.map((item) => (
        <Button
          theme={buttonProps.themes.lightgray}
          size={buttonProps.sizes['48-stretched']}
          onClick={() => onValueButtonClick(item.value)}
          key={item.value}
        >
          {item.value !== 'delete' ? (
            <Typography
              type={typographyProps.types.text16}
              color={colors.base.white}
            >
              {item.label as string}
            </Typography>
          ) : (
            <Icon
              color={colors.base.white}
              icon={item.label as UtilityTypes.SvgContent}
            />
          )}
        </Button>
      ))}
    </Grid>
  );
};

export { AmountButtons };
