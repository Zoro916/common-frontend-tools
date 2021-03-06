function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) {
    return;
  }

  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

var customMutiParams = function customMutiParams(value) {
  return Object.keys(value).map(function (k) {
    return Array.isArray(value[k]) && value[k].length > 0 ? "".concat(k, ":").concat(value[k].join(',')) : "".concat(k, ":").concat(value[k]);
  }).join('!');
};
/**
 * @name get请求参数转换工具函数
 * @function
 * @description 将传入的对象（key-value）结构，转换为querystring（查询字符串），并自动剔除nudefined、null和空字符
 * @param {Object} params key-value结构的参数对象
 * @returns querystring 查询字符串
 * 
 * @example
 * encodeUrlParams({ a: 1, b: undefined, c: null, d: '', e: 'a' })  // => a=1&e=a
 */


function encodeUrlParams(params) {
  return Object.keys(params).filter(function (prop) {
    var value = params[prop];
    return value !== undefined && value !== null && value !== '';
  }).map(function (prop) {
    var value = params[prop];

    if (_typeof(value) === 'object') {
      value = customMutiParams(value);
    }

    return [prop, value];
  }).filter(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        value = _ref2[1];

    return value !== '' && value !== undefined;
  }).map(function (v) {
    return v.map(encodeURIComponent).join('=');
  }).join('&');
}

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

export { convertToAntTable, encodeUrlParams };
