import  {setPagination,setSortings,setFilters}  from '../services/get-expenses';

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


describe('Set Sorting Test', () => {
  test('setSorting(null) must to have sorting settings as default', async () => {
    const results = setSortings(null);
    expect(results).toStrictEqual({ order : {} });
  });
  test('setSorting({merchant_name:ASC,amount_in_cents:DESC}) must to have as result {order : {merchant_name:ASC,amount_in_cents:DESC}} ', async () => {
    const results = setSortings({sort:"{\"merchant_name\":\"ASC\",\"amount_in_cents\":\"DESC\"}"});
    expect(results).toStrictEqual({order:{merchant_name:"ASC",amount_in_cents:"DESC"}});
  });
});


describe('Set Filters Test', () => {
  test('setFilters(null) must to have sorting settings as default', async () => {
    const results = setFilters(null);
    expect(results).toStrictEqual({ where : {} });
  });
  test('setSorting({amount_in_cents:6000}) must to have as result {where : {amount_in_cents:6000}} ', async () => {
    const results = setFilters({filter:"{\"amount_in_cents\":6000}"});
    expect(results).toStrictEqual({where:{amount_in_cents:6000}});
  });
});