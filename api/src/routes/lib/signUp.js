const { userService } = require('../../controllers');
const { createError } = require('../../utils');

async function signUp(req, res) {
    try {
        const { name, email, password } = req.body;

        const user = await userService.signUp(name, email, password);

        return res.status(200).json({ status: 'success', user });
    } catch (e) {
        const log = `Problem signing up ${e}`;
        const userFacingError =
            'Internal error when signing up. Please try again.';
        return res.status(500).json(createError(500, userFacingError, log));
    }
}

module.exports = signUp;
