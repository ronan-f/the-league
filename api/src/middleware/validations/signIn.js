const { createError } = require('../../utils');

function signInValidation(req, res, next) {
    const { email, password } = req.body;

    if (!email || !password) {
        const log = 'Missing params on sign in';
        const userFacingError =
            'Please provide an email and password to sign in';
        return res.status(400).json(createError(400, userFacingError, log));
    }

    return next();
}

module.exports = signInValidation;
