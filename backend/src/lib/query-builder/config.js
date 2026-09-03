require('dotenv').config();

exports.config = {
  client: 'mysql2',
  connection: {
    host: process.env.DATABASE_HOST || '127.0.0.1',
    port: +(process.env.DATABASE_PORT || '3306'),
    user: process.env.DATABASE_USER || 'root',
    password: process.env.DATABASE_PASSWORD || '',
    database: process.env.DATABASE_NAME || 'seu-banco'
  },
  pool: {
    min: 2,
    max: 10
  },
  migrations: {
    tableName: 'knex_migrations',
    directory: './src/database/migrations'
  }
}

