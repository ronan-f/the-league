function createError(status, message, log) {
    if (log) {
        console.error(log);
    }

    return {
        error: { status, message },
    };
}

module.exports = {
    createError,
};
