import convertToAntTable from './index';

const description = `
  列表数据转换函数：
    1. 指定映射dataSource的key，默认为'list'
    2. 自动转换为ant-table可用的数据结构
  输入(高阶函数)：
    一级参数： 'result'
    二级参数： {
      pageNum: 1,
      pageSize: 10,
      total: 100,
      result: [
        { a: 1, b: 2, c: 3 },
        { a: 10, b: 20, c: 30 },
      ],
    }
  输出：{
    dataSource: [
      { a: 1, b: 2, c: 3 },
      { a: 10, b: 20, c: 30 },
    ],
    pagination: {
      total: 100,
      pageSize: 10,
      current: 1,
    },
  }
`;

const params1 = 'result';

const params2 = {
  pageNum: 1,
  pageSize: 10,
  total: 100,
  result: [
    { a: 1, b: 2, c: 3 },
    { a: 10, b: 20, c: 30 },
  ],
};

const result = {
  dataSource: [
    { a: 1, b: 2, c: 3 },
    { a: 10, b: 20, c: 30 },
  ],
  pagination: {
    total: 100,
    pageSize: 10,
    current: 1,
  },
};

test(description, () => {
  expect(convertToAntTable(params1)(params2)).toEqual(result);
});