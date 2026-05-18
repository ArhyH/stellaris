import { ReactNode } from 'react';
import { Box, boxProps } from '@/shared/ui/Box';
import { colors, sizes } from '@/shared/styles';

type ContentCardProps = {
  children: ReactNode;
  grow?: keyof typeof boxProps.grow;
};

const ContentCard = (props: ContentCardProps) => {
  const { children, grow } = props;

  return (
    <Box
      bgColor={colors.box['gray-4']}
      grow={grow ? grow : boxProps.grow[1]}
      padding={sizes.sizes[24]}
    >
      {children}
    </Box>
  );
};

export { ContentCard };
export type { ContentCardProps };
