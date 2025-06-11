import type { Knex } from 'knex'
import { env } from './src/env'

const dbConnection =
  env.DATABASE_CLIENT === 'better-sqlite3'
    ? {
        filename: env.DATABASE_URL,
      }
    : env.DATABASE_URL

const knexConfig: Knex.Config = {
  client: env.DATABASE_CLIENT,
  connection: dbConnection,
  useNullAsDefault: true,
  migrations: {
    extension: 'ts',
    directory: './db/migrations',
  },
}

export default knexConfig
