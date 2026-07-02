import { Box, BoxWrapper } from '@/shared/ui/Box';
import { ContentCard } from '@/features/ContentCard';
import { Row } from '@/shared/ui/Row/Row';
import { Typography, typographyProps } from '@/shared/ui/Typography';
import { colors, sizes } from '@/shared/styles';
import { Button, buttonProps } from '@/shared/ui/Button';
import { User } from '../model/types';
import { Cell, cellProps } from '@/shared/ui/Cell';

type ProfileProps = {
  user: User;
  onClick: () => void;
};

const Profile = (props: ProfileProps) => {
  const { user, onClick } = props;
  const { initials, name, email } = user;

  return (
    <ContentCard>
      <Row gap={sizes.sizes[16]}>
        <Box bgColor={colors.green[1]} size={sizes.sizes[56]}>
          <BoxWrapper hasAlign>
            <Typography
              type={typographyProps.types.title20}
              color={colors.base.black}
            >
              {initials}
            </Typography>
          </BoxWrapper>
        </Box>
        <Cell grow={cellProps.grow[1]}>
          <Typography
            type={typographyProps.types.title16}
            color={colors.base.white}
          >
            {name}
          </Typography>
          <Typography
            type={typographyProps.types.text14}
            color={colors.lightgray[2]}
          >
            {email}
          </Typography>
        </Cell>

        <Button
          height={sizes.sizes[36]}
          paddingVertical={sizes.sizes[8]}
          paddingHorizontal={sizes.sizes[16]}
          theme={buttonProps.themes.lightgray}
          onClick={onClick}
        >
          <Typography type={typographyProps.types.text14}>
            EditProfile
          </Typography>
        </Button>
      </Row>
    </ContentCard>
  );
};

export { Profile };
export type { ProfileProps };
