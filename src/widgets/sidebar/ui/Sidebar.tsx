import { NavigationItem, navigationItems } from '@/shared/configs/navigation';
import { SidebarLink } from './SidebarLink';
import styles from './style.module.scss';
import { Button, buttonProps } from '@/shared/ui/Button';
import { Box, boxProps, BoxWrapper } from '@/shared/ui/Box';
import { colors, sizes } from '@/shared/styles';
import { Typography, typographyProps } from '@/shared/ui/Typography';
import { Icon } from '@/shared/ui/Icon';
import { icons } from '@/shared/assets';

const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.sidebar__title}>
        <Box
          bgColor={colors.box['green-1']}
          size={boxProps.sizes[32]}
          radius={sizes.sizes[14]}
        >
          <BoxWrapper hasAlign>
            <Icon
              icon={icons.wallet18}
              width={sizes.sizes[16]}
              height={sizes.sizes[16]}
            />
          </BoxWrapper>
        </Box>
        Fintrack
      </div>
      <Button
        theme={buttonProps.themes.green}
        size={buttonProps.sizes['44-stretched']}
      >
        <Icon
          icon={icons.plus24}
          width={sizes.sizes[18]}
          height={sizes.sizes[18]}
        />
        <Typography
          tag={typographyProps.tags.h3}
          type={typographyProps.types.title14}
        >
          Add Transaction
        </Typography>
      </Button>

      <nav className={styles.sidebar__nav}>
        {navigationItems.map((item: NavigationItem) => {
          return (
            <SidebarLink
              key={item.key}
              to={item.path}
              end={item.path === '/dashboard'}
            >
              {item.label}
            </SidebarLink>
          );
        })}
      </nav>
    </aside>
  );
};

export { Sidebar };
