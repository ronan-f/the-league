const { root, signUp, signIn } = require('./lib');
const {
    signUpValidation,
    signInValidation,
} = require('../middleware/validations');
const bodyParser = require('body-parser');

module.exports.set = (app) => {
    app.use(bodyParser.json());
    app.get('/', root);
    app.post('/sign-up', signUpValidation, signUp);
    app.post('/sign-in', signInValidation, signIn);
};
