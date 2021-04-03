const authController = require('../controllers/authController.js');
const addAndRemoveController = require('../controllers/addAndRemoveController.js');
const userController = require('../controllers/userController.js');

module.exports = (app) => {
    // TODO...
    app.use('/auth', authController);
    app.use('/show', addAndRemoveController);
    app.use('/account', userController);
    app.get('*', (req, res) => {
        console.log(req);
        res.status(404).json({message: 'Error'});
    });
};