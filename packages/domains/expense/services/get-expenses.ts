import { Expenses } from '../entities/Expenses';
import { InternalError, NotFound } from '@nc/utils/errors';
import { to } from '@nc/utils/async';


const setPagination = (query): any => {
  if (query == null || query == undefined  || query.page == undefined || query.limit == undefined)
    return { skip: 0, take: 10 };
  else {
    const limit = query.limit || 10;
    return {
      skip: (query.page * limit) || 0,
      take: limit,
    }
  }
}

const setSortings = (query): any => {
  if (query == null || query == undefined || query.sort == undefined || query.sort == null)
    return { order : {} };
  else {    
    return { order : JSON.parse(query.sort) };
  } 
};


const setFilters = (query): any => {
  if (query == null || query == undefined || query.filter == undefined || query.filter == null)
    return { where :{}};
  else {    
    return { where : JSON.parse(query.filter)} ;
  } 
}

const getExpenses = async (query: undefined): Promise<any> => {
  const pagination = setPagination(query);
  const sortings = setSortings(query);
  const filters = setFilters(query);
  const settings = {...pagination,...sortings,...filters};
  const [dbError, expenses] = await to(Expenses.find(settings));

  if (dbError !== null) {
    throw InternalError(`Error fetching data from the DB: ${dbError.message}`);
  }

  if (!expenses) {
    throw NotFound(`Could not find expenses `);
  }

  return { expenses, pagination };
}


module.exports = { setPagination, getExpenses, setSortings ,setFilters };
