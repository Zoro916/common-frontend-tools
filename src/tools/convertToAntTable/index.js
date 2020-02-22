/**
 * @name 列表数据转换函数
 * @function
 * @description 将传入的对象（key-value）结构，转换为querystring（查询字符串），并自动剔除nudefined、null和空字符
 * @param {Object} params key-value结构的参数对象
 * @returns querystring 查询字符串
 *
 * @example
 * encodeUrlParams({ a: 1, b: undefined, c: null, d: '', e: 'a' })  // => a=1&e=a
 */

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