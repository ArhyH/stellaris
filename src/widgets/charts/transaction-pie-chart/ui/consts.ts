const pieChartModes = {
  dashboard: 'dashboard',
  analytics: 'anlytics',
} as const;

const pieChartProps = {
  modes: pieChartModes,
} as const;

export { pieChartProps };
