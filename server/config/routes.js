const authController = require('../controllers/authController.js');

module.exports = (app) => {
    // TODO...
    app.use('/auth', authController);
    app.get('*', (req, res) => {
        console.log(req.method);
        res.status(404).json({message: 'Error'});
    });
};