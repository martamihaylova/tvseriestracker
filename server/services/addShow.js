const Users = require('../models/Users');

function addShow(data) {
    // let found = show.find((x) => x?.username.toLowerCase() === name.toLowerCase());
    // if (found) 
    let { userId, show } = data;
    return Users.findById(userId)
        .then((user) => {
            user.shows.push(show)
            user.save()
        })
        .catch((err) => console.log(err))
    // res.redirect('/');

}

module.exports = addShow;