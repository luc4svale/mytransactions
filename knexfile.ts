import type { Knex } from 'knex'
import { env } from './src/env'

const knexConfig: Knex.Config = {
  client: 'better-sqlite3',
  connection: {
    filename: env?.DATABASE_URL,
  },
  useNullAsDefault: true,
  migrations: {
    extension: 'ts',
    directory: './db/migrations',
  },
}

export default knexConfig
