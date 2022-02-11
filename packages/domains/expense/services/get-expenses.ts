import { Expenses } from '../entities/Expenses';
import { InternalError, NotFound } from '@nc/utils/errors';
import { to } from '@nc/utils/async';
import { setPagination, setSortings, setFilters } from '../utils/settings';

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

  return { expenses, pagination, sortings, filters };
}


const getExpensesByUserId = async ( query: undefined,user_id:string): Promise<any> => {
  const pagination = setPagination(query);
  const sortings = setSortings(query);
  const filters = setFilters(query);
  filters.where.user_id=user_id;
  const settings = {...pagination,...sortings,...filters};
  const [dbError, expenses] = await to(Expenses.find(settings));
  if (dbError !== null) {
    throw InternalError(`Error fetching data from the DB: ${dbError.message}`);
  }

  if (!expenses) {
    throw NotFound(`Could not find expenses with user_id ${user_id}`);
  }

  return { expenses, pagination, sortings, filters };
}




module.exports = {  getExpenses,getExpensesByUserId };
