import { NavigationItem, navigationItems } from '@/shared/configs/navigation';
import { SidebarLink } from './SidebarLink';
import styles from './style.module.scss';
import { Box, BoxWrapper } from '@/shared/ui/Box';
import { colors, sizes } from '@/shared/styles';
import { Icon } from '@/shared/ui/Icon';
import { icons } from '@/shared/assets';
import { AddTransaction } from '@/features/AddTransaction';
import { Category } from '@/entity/category';
import { Transaction } from '@/entity/transaction';

type SidebarProps = {
  onSubmit: (transaction: Transaction) => void;
  categories: Category[];
};

const Sidebar = (props: SidebarProps) => {
  const { onSubmit, categories } = props;

  return (
    <aside className={styles.sidebar}>
      <div className={styles.sidebar__title}>
        <Box
          bgColor={colors.box['green-1']}
          size={sizes.sizes[32]}
          radius={sizes.sizes[14]}
        >
          <BoxWrapper hasAlign>
            <Icon icon={icons.wallet18} size={sizes.sizes[16]} />
          </BoxWrapper>
        </Box>
        Fintrack
      </div>

      <AddTransaction onSubmit={onSubmit} categories={categories} />

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
