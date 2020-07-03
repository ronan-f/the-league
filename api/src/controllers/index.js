const knex = require('../config/db');

module.exports = {
    userService: require('./user')(knex),
};
