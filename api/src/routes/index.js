module.exports.set = (app) => {
    app.get('/', (req, res) => {
        return res
            .status(200)
            .json({
                message: 'Welcome to The League of Extraordinary Film Watchers',
            });
    });
};
