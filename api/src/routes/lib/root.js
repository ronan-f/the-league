function root(req, res) {
    return res.status(200).json({
        status: 200,
        message: 'Welcome to The League of Extraordinary Film Watchers',
    });
}

module.exports = root;
