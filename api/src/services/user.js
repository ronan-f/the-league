const { USERS_TABLE } = require('../constants');
const { createError, generateRandomInt } = require('../utils');
const { user: UserDAL } = require('../DAL');
const { JWT_SIGNATURE } = require('../config/env');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

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
            password = await this.hashPassword(password);

            if (password.error) throw Error('Could not hash password');

            const user = { name, email, password };

            await this.DB(USERS_TABLE).insert({
                ...user,
                reset_password_token: 'NULL',
            });

            return { name, email, token: this.generateToken(email) };
        } catch (e) {
            const log = `There was an error when adding a new user to db: ${e}`;
            return createError(500, 'Could not add user to DB', log);
        }
    }

    async signIn(email, password) {
        const userFacingError = 'Email/password incorrect.';
        const user = await UserDAL.getUser(email);

        if (!user) {
            return createError(
                400,
                userFacingError,
                'No user found with provided email'
            );
        }

        const isPasswordCorrect = await this.comparePassword(
            password,
            user.password
        );

        if (!isPasswordCorrect) {
            return createError(
                400,
                userFacingError,
                'Password provided incorrect'
            );
        }

        return {
            token: this.generateToken(email),
        };
    }

    async hashPassword(plainTextPass) {
        try {
            const saltRounds = generateRandomInt(5, 20);

            const hash = await bcrypt.hash(String(plainTextPass), saltRounds);

            return hash;
        } catch (e) {
            return createError(500, '', e);
        }
    }

    async comparePassword(plainTextPass, hash) {
        try {
            const result = await bcrypt.compare(plainTextPass, hash);
            return result;
        } catch (e) {
            return createError(500, '', e);
        }
    }

    generateToken(email) {
        console.log('generating JWT...');
        const data = { email };

        const expiration = { expiresIn: '6h' };

        const token = jwt.sign(data, JWT_SIGNATURE, expiration);

        return token;
    }
}

module.exports = (db) => new User(db);
