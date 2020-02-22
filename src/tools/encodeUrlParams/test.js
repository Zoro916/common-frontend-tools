import encodeUrlParams from './index';

const description = `
  get请求参数转换函数：
    1. 剔除非真参数
    2. 自动转换为queryString
  输入： {
    a: 1,
    b: 2,
    c: null,
  }
  输出：a=1&b=2
`;

const params = {
  a: 1,
  b: 2,
  c: null,
};

test(description, () => {
  expect(encodeUrlParams(params)).toBe('a=1&b=2');
});