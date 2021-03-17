const { Router } = require('express');
const router = Router();
const passport = require('passport');
const initPassport = require('../config/passport-config');
const register = require('../services/registerUser');
const Users = require('../models/Users');
const check = require('../middleware/checkAuth');
const validator = require('validator');


initPassport(passport,
    async (username) => {
        try {
            return await Users.findOne({ 'username': username });
        } catch (err) {
            console.log(err.message);
        }
    },
    async (id) => {
        try {
            return await Users.findById(id);
        } catch (err) {
            console.log(err.message);
        }
    });


router.get('/logout', check.ifLoged, (req, res) => {
    req.logOut();
    return res.status(200).json({ok: true});
});

router.post('/login', check.ifNotLoged, passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/auth/login',
    failureFlash: true
}));

router.post('/register', check.ifNotLoged, (req, res) => {
    let { email, username, password, rePassword } = req.body;
    if (password !== rePassword || !validator.isEmail(email) || !validator.isAlphanumeric(username)) {
        res.json({ messages: { error: 'Missmatch passwords, invalid email or username' }, title: 'Register' });
    } else {
        register(email, username, password, req, res);
    }
});

module.exports = router;