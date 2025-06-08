import { Knex } from 'knex'

declare module 'knex/types/tables' {
  interface Transaction {
    id: string
    session_id?: string
    title: string
    amount: number
    created_at: string
  }

  export interface Tables {
    transactions: Transaction
  }
}
