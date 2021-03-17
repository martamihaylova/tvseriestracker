const authController = require('../controllers/authController.js');

module.exports = (app) => {
    // TODO...
    app.use('/auth', authController);
    app.get('*', (req, res) => {
        res.send('404');
    });
};