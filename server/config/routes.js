const authController = require('../controllers/authController.js');
const addController = require('../controllers/addController.js');
const userController = require('../controllers/userController.js');

module.exports = (app) => {
    // TODO...
    app.use('/auth', authController);
    app.use('/add', addController);
    app.use('/account', userController);
    app.get('*', (req, res) => {
        console.log(req);
        res.status(404).json({message: 'Error'});
    });
};