// Enter your database your database name
const databaseName = 'testdatabase'

module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/' + databaseName,
    useNullAsDefault: true,
    migrations: {
      directory: './db/migrations',
    },
    seeds: {
      directory: './db/seeds/dev',
    },
  },

  test: {
    client: 'pg',
    connection: process.env.DATABASE_URL || 'postgres://localhost/' + databaseName,
    useNullAsDefault: true,
    migrations: {
      directory: './db/migrations',
    },
    seeds: {
      directory: './db/seeds/test',
    },
  },

  production: {
    client: 'pg',
    connection: `${process.env.DATABASE_URL}?ssl=true`,
    migrations: {
      directory: './db/migrations',
    },
    useNullAsDefault: true,
  },
};
