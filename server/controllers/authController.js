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
    return req.logOut()
        .then(() => {
            res.status(200).json({ ok: true })
        })

});

router.post('/login', check.ifNotLoged, (req, res, next) => {
    passport.authenticate('local', (err, user, info) => {
        if (err) throw err;
        if (!user) res.json({ info });
        else {
            req.logIn(user, err => {
                if (err) throw err;
                res.send(user);
            })
        }
    })(req, res, next);
});

router.post('/register', check.ifNotLoged, (req, res) => {
    // console.log(req.body);
    let { username, email, password, rePassword } = req.body;
    if (password !== rePassword){
    res.json({ type: 'errorBox', message: 'Missmatch passwords' });
    } else if(!validator.isEmail(email) ){
        res.json({ type: 'errorBox', message: 'Invalid email' });
    } else if (!validator.isAlphanumeric(username)){
        res.json({ type: 'errorBox', message: 'Invalid username' });  
    } else {
        register(email, username, password, req, res);
    }
});

module.exports = router;