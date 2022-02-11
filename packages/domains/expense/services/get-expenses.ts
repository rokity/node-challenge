import { Expenses } from '../entities/Expenses';
import { InternalError, NotFound } from '@nc/utils/errors';
import { to } from '@nc/utils/async';


const setPagination = (query): any => {
  if (query == null || query == undefined)
    return { skip: 0, take: 10 };
  else {
    const limit = query.limit || 10;
    return {
      skip: (query.page * limit) || 0,
      take: limit,
    }
  }
}

const getExpenses = async (query: undefined): Promise<any> => {
  const pagination = setPagination(query);
  const [dbError, expenses] = await to(Expenses.find(pagination));

  if (dbError !== null) {
    throw InternalError(`Error fetching data from the DB: ${dbError.message}`);
  }

  if (!expenses) {
    throw NotFound(`Could not find expenses `);
  }

  return { expenses, pagination };
}


module.exports = { setPagination, getExpenses };
