/* import 'reflect-metadata';
import { createConnection } from 'typeorm';

createConnection();
 */

import { Connection, createConnection } from 'typeorm';
import ormConfig from '../../../../ormconfig';

const connection = async (name = 'default'): Promise<Connection> => createConnection(
  Object.assign(ormConfig, {
    name,
  }),
);

export default connection;
