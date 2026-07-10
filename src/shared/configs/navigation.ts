const navigationItems = [
  {
    key: 'dashboard',
    label: 'Dashboard',
    path: '/dashboard',
    icon: 'dashboard',
  },
  {
    key: 'transactions',
    label: 'Transactions',
    path: '/transactions',
    icon: 'transactions',
  },
  {
    key: 'savings',
    label: 'Savings',
    path: '/savings',
    icon: 'savings',
  },
  {
    key: 'analytics',
    label: 'Analytics',
    path: '/analytics',
    icon: 'analytics',
  },
  {
    key: 'budgets',
    label: 'Budgets',
    path: '/budgets',
    icon: 'budgets',
  },
  {
    key: 'categories',
    label: 'Categories',
    path: '/categories',
    icon: 'categories',
  },
  {
    key: 'settings',
    label: 'Settings',
    path: '/settings',
    icon: 'settings',
  },
];

interface NavigationItem {
  key: string;
  label: string;
  path: string;
  icon: string;
}

export { navigationItems, NavigationItem };
