// Update with your config settings.
require('dotenv').config();

localPbConnection = {
  host: 'localhost',
  database: 'Database',
  user: process.env.DB_USERS,
  password: process.env.DB_PASS
};
const prodDbConnection = process.env.DATABASE_URL || localPbConnection;

module.exports = {
  development: {
    client: 'sqlite3',
    useNullAsDefault: true,
    connection: {
      filename: './database/auth.sqlite3'
    },
    migrations: {
      directory: './database/migrations'
    },
    seeds: {
      directory: './database/seeds'
    },
    pool: {
      afterCreate: (conn, done) => {
        conn.run('PRAGMA foreign_keys = ON', done);
      }
    }
  },

  production: {
    client: 'pg',
    connection: prodDbConnection,
    migrations: {
      directory: './database/migrations'
    },
    seeds: {
      directory: './database/seeds'
    }
  }
};
