import  { setPagination }  from '../services/get-expenses';

describe('Set Pagination Test', () => {
  test('setPagination(null) must to have pagination settings as default', async () => {
    const results = setPagination(null);
    expect(results).toStrictEqual({ skip: 0, take: 10 });
  });
  test('setPagination({page:3,limit:2}) must to have skip to 6', async () => {
    const results = setPagination({page:3,limit:2});
    expect(results).toStrictEqual({ skip: 6, take: 2 });
  });
});