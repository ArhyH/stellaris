import { createBrowserRouter, Navigate } from 'react-router-dom';
import { AppLayout } from '../ui/app-layout';
import {
  AnalyticsPage,
  BudgetsPage,
  CategoriesPage,
  DashboardPage,
  SettingsPage,
  TransactionsPage,
} from '@/pages';
import { SavingsPage } from '@/pages/savings';

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <Navigate to="/dashboard" replace />,
      },
      {
        path: 'dashboard',
        element: <DashboardPage />,
      },
      {
        path: 'transactions',
        element: <TransactionsPage />,
      },
      {
        path: 'savings',
        element: <SavingsPage />,
      },
      {
        path: 'analytics',
        element: <AnalyticsPage />,
      },
      {
        path: 'budgets',
        element: <BudgetsPage />,
      },
      {
        path: 'categories',
        element: <CategoriesPage />,
      },
      {
        path: 'settings',
        element: <SettingsPage />,
      },
      {
        path: '*',
        element: <Navigate to="/dashboard" replace />,
      },
    ],
  },
]);

export { router };
