const createBudget = () => ({
  id: new Date().toString(),
  limit: '',
  categoryId: 'all',
});

export { createBudget };
