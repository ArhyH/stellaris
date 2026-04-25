import { Box, boxProps, BoxWrapper } from '@/shared/ui/Box';
import styles from './style.module.scss';
import { colors, sizes } from '@/shared/styles';

const Header = () => {
  return (
    <div className={styles.header}>
      Header
      <Box
        bgColor={colors.box['green-1']}
        radius={sizes.radiuses[12]}
        size={boxProps.sizes[30]}
      >
        <BoxWrapper hasAlign>
          <span>JD</span>
        </BoxWrapper>
      </Box>
    </div>
  );
};

export { Header };
