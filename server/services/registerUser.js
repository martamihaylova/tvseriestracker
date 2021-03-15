const Users = require('../models/Users');
const bcrypt = require('bcrypt');
const { SALT_ROUNDS } = require('../config/config');

function register(email, name, password, req, res) {

    Users.find({}, 'username')
        .then((data) => {
            console.log(data);
            let found = data.find((x) => x?.username.toLowerCase() === name.toLowerCase());
            // if (found) res.render('register', { messages: { error: 'Username allready exists.Please try again.' }, title: 'Register' });
        });

    bcrypt.hash(password, SALT_ROUNDS)
        .then((hashedPassword) => {
            let user = new Users({
                email,
                username: name,
                password: hashedPassword,
            });
            user.save()
                .then(() => {
                    console.log(user);
                    res.locals.user = user;
                    req.login(user, function (err) {
                        if (err) { return next(err); }
                        return res.redirect('/');
                    });
                })
                .catch((error) => {
                    console.log(error.message);
                    // return res.render('register', { messages: { error: error.message }, title: 'Register' });
                });
        })
        .catch((err) => {
            console.log(err.message);
            // res.render('register', { messages: { error: 'Unsuccessful reristration.Please try again.' }, title: 'Register' });
        });

}
module.exports = register;