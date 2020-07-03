const { root, signUp } = require('./lib');
const { signUpValidation } = require('../middleware/validations');
const bodyParser = require('body-parser');

module.exports.set = (app) => {
    app.use(bodyParser.json());
    app.get('/', root);
    app.post('/sign-up', signUpValidation, signUp);
};
