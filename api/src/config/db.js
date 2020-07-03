const { DB_USER, HOST, PASSWORD, DATABASE } = require('../config/env');

const connection = {
    host: HOST,
    user: DB_USER,
    password: PASSWORD,
    database: DATABASE,
    ssl: true,
};

const knex = require('knex')({
    client: 'pg',
    connection,
});

module.exports = knex;
