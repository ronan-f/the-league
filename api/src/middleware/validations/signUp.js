const { createError } = require('../../utils');

function signUpValidation(req, res, next) {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        const log = 'Missing params on sign up';
        const userFacingError =
            'Please provide a name, email and password to register';
        return res.status(400).json(createError(400, userFacingError, log));
    }

    return next();
}

module.exports = signUpValidation;
