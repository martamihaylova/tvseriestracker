const authController = require('../controllers/authController.js');
const addAndRemoveController = require('../controllers/addAndRemoveController.js');
const userController = require('../controllers/userController.js');

module.exports = (app) => {
    // TODO...
    app.use('/auth', authController);
    app.use('/show', addAndRemoveController);
    app.use('/account', userController);
    app.get('/', (req, res) => {
        res.send('Hello world');
    });
    app.get('*', (req, res) => {
        res.status(404).json({message: 'Error'});
    });
};