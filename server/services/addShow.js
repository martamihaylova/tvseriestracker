const Users = require('../models/Users');

function addShow(data) {
   
    let { userId, show } = data;

    return Users.findById(userId)
        .then((user) => {
            user.shows.push(show)
            user.save()
        })
        .catch((err) => console.log(err))
 

}

module.exports = addShow;