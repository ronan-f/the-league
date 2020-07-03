require('dotenv').config({ path: __dirname + '/../../.env' });

function getEnv(key) {
    if (!process.env[key]) {
        throw Error(`Could not find environment variable with key: ${key}`);
    }

    return process.env[key];
}

module.exports = {
    PORT: getEnv('PORT'),
    HOST: getEnv('HOST'),
    DATABASE: getEnv('DATABASE'),
    DB_USER: getEnv('DB_USER'),
    PASSWORD: getEnv('PASSWORD'),
    DB_URL: getEnv('DB_URL'),
};
