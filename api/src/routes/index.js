module.exports.set = (app) => {
    app.get('/', (req, res) => {
        console.log('Hello world');
        return res.status(200).send();
    });
};
