import { NavigationItem, navigationItems } from '@/shared/configs/navigation';
import { SidebarLink } from './SidebarLink';

const Sidebar = () => {
  return (
    <aside>
      <div>Fintrack</div>
      <button>Add Transaction</button>

      <nav>
        {navigationItems.map((item: NavigationItem) => {
          return (
            <SidebarLink
              key={item.key}
              to={item.path}
              end={item.key === '/dashboard'}
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
