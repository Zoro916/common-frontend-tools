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
