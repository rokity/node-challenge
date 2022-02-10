import { Expenses } from '../entities/Expenses';
import { InternalError, NotFound } from '@nc/utils/errors';
import { to } from '@nc/utils/async';

export async function getExpenses(): Promise<Expenses[]> {
  const [dbError,rawExpenses] = await to(Expenses.find());
  if (dbError!==null) {
    throw InternalError(`Error fetching data from the DB: ${dbError.message}`);
  }

  if (!rawExpenses) {
    throw NotFound(`Could not find expenses `);
  }

  return rawExpenses;
}