const knex = require('../config/db');

module.exports = {
    user: require('./user')(knex),
};
