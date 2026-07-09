const deleteMessages = {
  both: {
    title: 'Delete category and budget?',
    description:
      'This category has associated transactions and a budget. If you continue, the category will be archived and removed from future use. Existing transactions will remain in your history, while the associated budget will be permanently deleted.',
  },
  transaction: {
    title: 'Delete category?',
    description:
      'This category has associated transactions. If you continue, the category will be archived and removed from future use. Existing transactions will remain in your history.',
  },
  budget: {
    title: 'Delete category and budget?',
    description:
      'This category is currently used in a budget. Deleting it will also delete the associated budget. This action cannot be undone.',
  },
};

export { deleteMessages };
