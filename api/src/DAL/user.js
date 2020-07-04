const { createError } = require('../utils');

class User {
    constructor(db) {
        this.DB = db;
    }

    async getUser(email) {
        try {
            const userRecord = await this.dbClient('users')
                .select('*')
                .where({ email });

            if (!userRecord || !userRecord[0])
                throw Error(`Could not find user with email ${email}`);

            return userRecord[0];
        } catch (e) {
            return createError(500, 'Could not find user', e);
        }
    }
}

module.exports = (db) => new User(db);
