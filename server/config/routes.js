const userController = require('../controllers/userController.js');

module.exports = (app) => {
    // TODO...
    app.use('/user', userController);
    app.get('*', (req, res) => {
        res.send('404');
    });
};