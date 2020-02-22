const convertToAntTable = (key = 'list') => ({
  pageNum: current,
  pageSize,
  total,
  [key]: dataSource,
} = {}) => ({
  dataSource,
  pagination: {
    total,
    pageSize,
    current,
  },
});

export default convertToAntTable;