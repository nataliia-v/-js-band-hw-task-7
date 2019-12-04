export const priorityOptions = [
  {
    label: 'High',
    value: 'high'
  },
  {
    label: 'Normal',
    value: 'normal'
  },
  {
    label: 'Low',
    value: 'low'
  }
];

export const allOption = { label: 'All', value: 'all' };

export const filterStatusOptions = [
  allOption,
  { label: 'Open', value: 'open' },
  { label: 'Done', value: 'done' }
];

export const filterPriorityOptions = [allOption, ...priorityOptions];
