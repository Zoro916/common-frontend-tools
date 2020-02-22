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
var convertToAntTable = function convertToAntTable() {
  var key = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'list';
  return function () {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        current = _ref.pageNum,
        pageSize = _ref.pageSize,
        total = _ref.total,
        dataSource = _ref[key];

    return {
      dataSource: dataSource,
      pagination: {
        total: total,
        pageSize: pageSize,
        current: current
      }
    };
  };
};

export default convertToAntTable;
