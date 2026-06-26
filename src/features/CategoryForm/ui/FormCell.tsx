import { ReactNode } from 'react';
import { Cell } from '@/shared/ui/Cell';
import { colors, sizes } from '@/shared/styles';
import { Typography, typographyProps } from '@/shared/ui/Typography';
import { Box, BoxScrollWrapper } from '@/shared/ui/Box';
import { ValueOf } from 'type-fest';

type FormCellProps = {
  title: string;
  children: ReactNode;
  hasScroll?: boolean;
  maxHeight?: ValueOf<typeof sizes.sizes>;
};

const FormCell = (props: FormCellProps) => {
  const { title, children, hasScroll, maxHeight = sizes.sizes[132] } = props;

  return (
    <Cell width={sizes.sizes.parent} gap={sizes.sizes[6]}>
      <Typography
        type={typographyProps.types.text12}
        color={colors.lightgray[2]}
        textTransform={typographyProps.transforms.uppercase}
      >
        {title}
      </Typography>

      {hasScroll ? (
        <Box padding={sizes.sizes[6]}>
          <BoxScrollWrapper maxHeight={maxHeight}>{children}</BoxScrollWrapper>
        </Box>
      ) : (
        children
      )}
    </Cell>
  );
};

export { FormCell };
export type { FormCellProps };
