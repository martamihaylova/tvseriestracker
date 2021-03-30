const authController = require('../controllers/authController.js');
const addController = require('../controllers/addController.js');

module.exports = (app) => {
    // TODO...
    app.use('/auth', authController);
    app.use('/add', addController);
    app.get('*', (req, res) => {
        console.log(req);
        res.status(404).json({message: 'Error'});
    });
};