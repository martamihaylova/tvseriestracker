const Users = require('../models/Users');
const bcrypt = require('bcrypt');
const { SALT_ROUNDS } = require('../config/config');

function register(email, name, password, req, res) {

    Users.find({}, 'username')
        .then((data) => {
            let found = data.find((x) => x?.username.toLowerCase() === name.toLowerCase());
            if (found) res.json({type: 'errorBox', message: 'Username allready exists' });
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
                    res.locals.user = user;
                    req.login(user, function (err) {
                        if (err) { return next(err); }
                        return res.status(201).json(user);
                    });
                })
                .catch((error) => {
                    console.log(error.message);
                    return res.json({ type: 'errorBox', message: error.message });
                });
        })
        .catch((err) => {
            console.log(err.message);
            res.json({type:'errorBox', message: 'Unsuccessful reristration'  });
        });

}
module.exports = register;