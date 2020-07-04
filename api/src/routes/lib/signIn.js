const { userService } = require('../../services');
const { createError } = require('../../utils');

async function signIn(req, res) {
    try {
        const { email, password } = req.body;

        const token = await userService.signIn(email, password);

        return res.status(200).json({ status: 'success', token });
    } catch (e) {
        const log = `Problem signing in ${e}`;
        const userFacingError =
            'Internal error when signing in. Please try again.';
        return res.status(500).json(createError(500, userFacingError, log));
    }
}

module.exports = signIn;
