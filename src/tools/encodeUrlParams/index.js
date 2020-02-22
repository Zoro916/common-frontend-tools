const customMutiParams = value => Object.keys(value)
  .map(k => (
    Array.isArray(value[k]) && value[k].length > 0
      ? `${k}:${value[k].join(',')}`
      : `${k}:${value[k]}`
  ))
  .join('!');

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

export function encodeUrlParams(params) {
  return Object.keys(params)
    .filter((prop) => {
      const value = params[prop];
      return value !== undefined && value !== null && value !== '';
    })
    .map((prop) => {
      let value = params[prop];
      if (typeof value === 'object') {
        value = customMutiParams(value);
      }
      return [prop, value];
    })
    .filter(([, value]) => value !== '' && value !== undefined)
    .map(v => v.map(encodeURIComponent).join('='))
    .join('&');
}

export default encodeUrlParams;