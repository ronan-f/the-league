const { USERS_TABLE } = require('../constants');
const { createError } = require('../utils');

class User {
    constructor(db) {
        this.DB = db;
    }

    async signUp(name, email, password) {
        if (!name || !email || !password) {
            throw new Error(
                `Must provide name, email and password to register. Received: name: ${name}, email: ${email}, password: ${password}`
            );
        }

        try {
            const user = { name, email, password };

            await this.DB(USERS_TABLE).insert({
                ...user,
                reset_password_token: 'NULL',
            });

            return user;
        } catch (e) {
            const log = `There was an error when adding a new user to db: ${e}`;
            return createError(500, 'Could not add user to DB', log);
        }
    }
}

module.exports = (db) => new User(db);
