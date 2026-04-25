import { NavigationItem, navigationItems } from '@/shared/configs/navigation';
import { SidebarLink } from './SidebarLink';
import styles from './style.module.scss';
import { Button, buttonProps, ButtonText } from '@/shared/ui/Button';
import { Box, boxProps, BoxWrapper } from '@/shared/ui/Box';
import { colors } from '@/shared/styles';

const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.sidebar__title}>
        <Box bgColor={colors.box['green-1']} size={boxProps.sizes[30]}>
          <BoxWrapper hasAlign>
            <span>JD</span>
          </BoxWrapper>
        </Box>
        Fintrack
      </div>
      <Button
        theme={buttonProps.themes.green}
        size={buttonProps.sizes['44-stretched']}
      >
        <ButtonText>+ Add Transaction</ButtonText>
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
