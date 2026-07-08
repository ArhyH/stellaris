import { NavigationItem, navigationItems } from '@/shared/configs/navigation';
import { SidebarLink } from './SidebarLink';
import styles from './style.module.scss';
import { Box, BoxWrapper } from '@/shared/ui/Box';
import { colors, sizes } from '@/shared/styles';
import { Icon } from '@/shared/ui/Icon';
import { icons } from '@/shared/assets';
import { AddTransaction } from '@/features/AddTransaction';
import { Transaction } from '@/entity/transaction';
import { AddCategory } from '@/features/AddCategory';
import { Category } from '@/entity/category';

type SidebarProps = {
  onTransactionCreate: (transaction: Transaction) => void;
  onCategoryCreate: (category: Category) => void;
  hasCategories: boolean;
};

const Sidebar = (props: SidebarProps) => {
  const { onTransactionCreate, onCategoryCreate, hasCategories } = props;

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

      {hasCategories ? (
        <AddTransaction
          onSubmit={onTransactionCreate}
          isDisabled={!hasCategories}
        />
      ) : (
        <AddCategory onSubmit={onCategoryCreate} />
      )}

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
