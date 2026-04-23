import { Box, boxProps, BoxWrapper } from '@/shared/ui/Box';
import styles from './style.module.scss';

const Header = () => {
  return (
    <div className={styles.header}>
      Header
      <Box theme={boxProps.themes.green} size={boxProps.sizes[30]}>
        <BoxWrapper>
          <span>JD</span>
        </BoxWrapper>
      </Box>
    </div>
  );
};

export { Header };
