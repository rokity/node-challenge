import { Connection, createConnection } from 'typeorm';
import config from 'config';
import path from 'path';


let db: Connection = null;

export async function getConnectionDatabase(): Promise<Connection> {
  if (db == null)
    db = await createConnection({...config.db,entities: [path.resolve(__dirname, '../**/entities/*.ts')]});
  
  return db;
}

