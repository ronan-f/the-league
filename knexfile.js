const { HOST, PASSWORD, DATABASE, DB_USER } = require('./api/src/config/env');

module.exports = {
    development: {
        client: 'pg',
        connection: {
            host: HOST,
            user: DB_USER,
            password: PASSWORD,
            database: DATABASE,
            ssl: true,
        },
        pool: {
            min: 2,
            max: 10,
        },
        migrations: {
            tableName: 'knex_migrations',
        },
    },
};
