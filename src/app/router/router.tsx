import { createBrowserRouter } from 'react-router-dom';
import { AppLayout } from '../layouts/app-layout';
import {
  AnalyticsPage,
  BudgetsPage,
  CategoriesPage,
  DashboardPage,
  SettingsPage,
  TransactionsPage,
} from '@/pages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <DashboardPage />,
      },
      {
        path: '/dashboard',
        element: <DashboardPage />,
      },
      {
        path: '/transactions',
        element: <TransactionsPage />,
      },
      {
        path: '/analytics',
        element: <AnalyticsPage />,
      },
      {
        path: '/budgets',
        element: <BudgetsPage />,
      },
      {
        path: '/categories',
        element: <CategoriesPage />,
      },
      {
        path: '/settings',
        element: <SettingsPage />,
      },
    ],
  },
]);

export { router };
